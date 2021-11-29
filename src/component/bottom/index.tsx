import styled from 'styled-components' 
import { colors } from '../../common/utils';
import { RowEnd } from '../row'
import { useLocation } from 'react-router-dom';


const BottomView = styled(RowEnd)<{
  solid:boolean
}>`
  height:70px;
  background-color:${({solid})=>solid ? colors.black : colors.black_2};
  width:100%;
  position:absolute;
  bottom:0;
  z-index:3
`

function Bottom() {
  const location = useLocation()

  return (
    <BottomView solid={location.pathname == '/'}>
    </BottomView>
  );
}

export default Bottom;

/*
1.左播放音乐（随机按钮、播放暂停按钮、封面旋转、歌手、歌名）
2.右边联系方式   邮箱（发送邮箱）、微信（复制微信号）


鼠标移上去图标变颜色
 */