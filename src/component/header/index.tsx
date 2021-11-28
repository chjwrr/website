import styled from 'styled-components' 
import { colors } from '../../common/utils';
import { RowEnd } from '../row'


const HeaderView = styled(RowEnd)`
  height:50px;
  background-color:${colors.black};
  width:100%;
  position:absolute;
  left:0;
  top:0;
  z-index:200
`

function Header() {
  return (
    <HeaderView>
    </HeaderView>
  );
}

export default Header;
/*
左边 一言接口
右边 新闻、视频（列表）、视频（单个）、美文

*/