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

  return (
    <AppBody>
      <BodyMainWrapper style={{justifyContent:'center'}}>
        <RowCenter style={{height:'90%'}}>
          <VideoCenter/>
        </RowCenter>
      </BodyMainWrapper>
    </AppBody>
  );
}

function VideoCenter(){
  const videoRef = React.useRef(null);
  const [videoInfo,setVideoInfo] = useState({url:'',img:''})
  const [loading,setLoading] = useState(false)

  useEffect(()=>{
    getVideo()
  },[])

  function getVideo(){    
    if (loading){
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

  return <CenterView>
    {
      videoInfo.url ? <VideoJS options={{
        controls: true,
          playbackRates: [0.7, 1.0, 1.5, 2.0], // ????????????
          autoplay: true, // ??????true,????????????????????????????????????
          muted: false, // ??????????????????????????????????????????
          loop: true, // ???????????????????????????????????????
          preload: 'auto', // ??????????????????<video>??????????????????????????????????????????????????????auto???????????????????????????,???????????????????????????????????????????????????
          language: 'zh-CN',
          aspectRatio: '3:4', // ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????? - ???????????????????????????????????????"16:9"???"4:3"???
          fluid: true, // ???true??????Video.js player?????????????????????????????????????????????????????????????????????????????????
          sources: [
            {
              src: videoInfo.url,
              type: 'video/mp4'
            }
          ],
          poster: videoInfo.img, // ??????????????????
          width: document.documentElement.clientWidth,
          notSupportedMessage: '??????????????????????????????????????????', // ????????????Video.js????????????????????????????????????????????????
          controlBar: {
            timeDivider: true,
            durationDisplay: true,
            remainingTimeDisplay: true,
            fullscreenToggle: true // ????????????
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