import { Column } from '../../component/column';
import { Text } from '../../component/text';
import AppBody,{BodyMainWrapper} from '../../component/view'
import { RowCenter,RowFixed } from '../../component/row';
import {colors} from '../../common/utils'
import styled from 'styled-components'
import videojs from "video.js";
import "video.js/dist/video-js.css";
import React,{ useRef,useState,useEffect } from 'react';
import { ButtonClick } from '../../component/button';
import axios from 'axios';
import {API_video} from '../../common/API'
import {Skeleton,LinearProgress,Box} from '@material-ui/core';
import ReloadImg from '../../assets/images/reload.png'
import { message } from 'antd';

import './video.css'

const CenterView = styled(RowFixed)`
  background-color:${colors.mainColor};
  border-radius:10px;
  padding:20px;
  height:100%;
  position:relative;
  overflow:hidden
`
const ReloadButton = styled(ButtonClick)`
  height:20px;
  width:20px;
  position:absolute;
  top:0px;
  right:0px
`
const ReloadImage = styled.img`
  width:20px
`
const Loading = styled(ButtonClick)`
  position:absolute;
  bottom:0px;
  left:0px;
  width:100%
`


function Video() {
  const videoRef = React.useRef(null);
  const [videoInfo,setVideoInfo] = useState({url:'',img:''})
  const [loading,setLoading] = useState(false)

  useEffect(()=>{
    getVideo()
  },[])

  function getVideo(){    
    if (loading){
      console.log('-------');
      
      message.info({
        content: 'This is a prompt message with custom className and style',
        className: 'custom-class',
        style: {
          zIndex:1000
        },
      })
      return 
    }
    setLoading(true)
    axios(API_video).then((res)=>{
      if (res.data.code == 200){
        setVideoInfo(res.data)
      }
      setLoading(false)
    }).catch((e)=>{
      console.log('eeeeeee',e);
      setLoading(false)
    })
  }


  return (
    <AppBody>
      <BodyMainWrapper style={{justifyContent:'center'}}>
        <RowCenter style={{height:'90%'}}>
          <CenterView>
              {
                videoInfo.url ? <VideoJS options={{
                  controls: true,
                     playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
                     autoplay: true, // 如果true,浏览器准备好时开始回放。
                     muted: false, // 默认情况下将会消除任何音频。
                     loop: true, // 导致视频一结束就重新开始。
                     preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                     language: 'zh-CN',
                     aspectRatio: '3:4', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                     fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                     sources: [
                       {
                         src: videoInfo.url,
                         type: 'video/mp4'
                       }
                     ],
                     poster: videoInfo.img, // 你的封面地址
                     width: document.documentElement.clientWidth,
                     notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
                     controlBar: {
                       timeDivider: true,
                       durationDisplay: true,
                       remainingTimeDisplay: true,
                       fullscreenToggle: true // 全屏按钮
                     }
                }} onReady={(play:any)=>{
                  videoRef.current = play
                  play.play()
                }}/> : <VideoEmpty/>
              }
              <ReloadButton onClick={getVideo}>
                <ReloadImage className={"reloadImg"} src={ReloadImg}/>
              </ReloadButton>
              {
                loading && <Loading>
                  <Box sx={{ width: '100%' }}>
                    <LinearProgress />
                  </Box>
                </Loading>
              }
          </CenterView>
          
        </RowCenter>
      </BodyMainWrapper>
    </AppBody>
  );
}

export default Video;

function VideoEmpty(){
  return <Column style={{
    width:'500px',
    height:'100%',
  }}>
    <Skeleton animation="wave" variant="rectangular" width={'100%'} height={'100%'} />
  </Column> 
}

const VideoJS = ( props:any ) => {

  const videoRef = React.useRef(null);
  const playerRef = React.useRef<any>(null);
  const { options, onReady } = props;

  React.useEffect(() => {
    if (!playerRef.current) {
      const videoElement = videoRef.current;
      if (!videoElement) return;
      const player = playerRef.current = videojs(videoElement, options, () => {
        onReady && onReady(player);
      });
    } else {
      const player = playerRef.current;
      player.src(options.sources[0].src);      
      player.autoplay(true);

    }
  }, [options, videoRef]);

  return (
    <div data-vjs-player>
      <video style={{
        height:'100%',
        width:'500px',
      }} ref={videoRef} className="video-js vjs-big-play-centered" />
    </div>
  );
}