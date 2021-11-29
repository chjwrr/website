import { useNavigate,useLocation } from 'react-router-dom';
import styled from 'styled-components' 
import { colors } from '../../common/utils';
import { ButtonClick } from '../button';
import { RowEnd,RowFixed } from '../row'
import {Text} from '../text'

const HeaderView = styled(RowEnd)<{
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

export default Header;
/*
左边 一言接口 文字动效
右边 新闻、视频（列表）、视频（单个）、美文

鼠标移上去文字动画 或者 变图片

或者一个图片 鼠标移上去 动画显示 菜单  
*/