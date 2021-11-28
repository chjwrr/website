import styled from 'styled-components' 


// https://qqlykm.cn/bing/bing.php
// https://api.iyk0.com/mn/2/
// https://api.iyk0.com/mn/
// http://api.wpbom.com/api/secon.php
// https://apis.jxcxin.cn/api/dmimg
const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height:100%;
  @media (max-width: 768px) {
  };
  background-image: url(https://apis.jxcxin.cn/api/dmimg);
  background-position:center;
  background-size:cover;
  background-repeat: no-repeat;
  z-index:1
`

function BackgroundView() {
  return (
    <Background/>
  );
}

export default BackgroundView;
