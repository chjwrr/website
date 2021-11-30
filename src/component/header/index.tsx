import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import styled from 'styled-components' 
import { API_one_word } from '../../common/API';
import { colors } from '../../common/utils';
import { ButtonClick } from '../button';
import { RowBetween, RowEnd,RowFixed } from '../row'
import {Text} from '../text'
import {useState} from 'react'
import Texty from 'rc-texty'
import 'rc-texty/assets/index.css';


const HeaderView = styled(RowBetween)<{
  solid:boolean
}>`
  height:50px;
  background-color:${({solid})=>solid ? colors.black : colors.black_2};
  width:100%;
  position:absolute;
  left:0;
  top:0;
  z-index:3;
`
const RightView = styled(RowFixed)`
  margin-right:100px
`

function Header() {
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <HeaderView solid={location.pathname == '/'}>
      <LeftContent/>
      <RightView>
        <ButtonClick onClick={()=>{
          navigate('/video')
        }}>
          <Text fontSize={20} fontWeight={'bold'}>视频</Text>
        </ButtonClick>
        
      </RightView>
    </HeaderView>
  );
}
function LeftContent(){
  const [content,setContent] = useState('')
  const [show,setShow] = useState(false)

  useEffect(()=>{
    axios.get(API_one_word).then((res)=>{
      if (res.data.code == 200){
        setContent(res.data.data.hitokoto)
        setInterval(()=>{
          setShow((pre)=>!pre)
        },2000)
      } 
    })
  },[])
  return <RowFixed>
    <div className="texty-demo" style={{
      color:'#fff',
      fontSize:10,
      fontWeight:'bold'
    }}>
     <Texty>
       1234
     </Texty>
  </div>
  </RowFixed>
}

export default Header;
/*
左边 一言接口 文字动效
右边 新闻、视频（列表）、视频（单个）、美文

鼠标移上去文字动画 或者 变图片

或者一个图片 鼠标移上去 动画显示 菜单  
*/