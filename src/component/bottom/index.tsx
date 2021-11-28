import styled from 'styled-components' 
import { colors } from '../../common/utils';
import { RowEnd } from '../row'


const BottomView = styled(RowEnd)`
  height:70px;
  background-color:${colors.black};
  width:100%;
  position:absolute;
  bottom:0;
  z-index:200
`

function Bottom() {
  return (
    <BottomView>
    </BottomView>
  );
}

export default Bottom;

/*
1.左播放音乐（随机按钮、播放暂停按钮、封面旋转、歌手、歌名）
2.右边联系方式   邮箱（发送邮箱）、微信（复制微信号）



 */