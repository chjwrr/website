import AppBody from '../../component/view'
function Home() {

  return (
    <AppBody>
      {load()}
    </AppBody>
  );
}

function load(){
  const random = parseInt(Math.random() * 3 + '')  
  switch (random) {
    case 0:
      return <Universe/>
      break;
    case 1:
      return <Jellyfish/>
      break;
    case 2:
      return <Kaleidoscopic/>
      break;
    default:
      return <Jellyfish/>
      break;
  }
}

function Universe(){
  return <iframe
    style={{width:'110%',height:'100%',marginLeft:'-5%'}}
    allow="autoplay; fullscreen; xr-spatial-tracking" 
    xr-spatial-tracking 
    execution-while-out-of-viewport 
    execution-while-not-rendered 
    src="https://sketchfab.com/models/ef1aa837c6fb480b8691c212a4d63d9d/embed?autospin=1&autostart=1&preload=1&ui_hint=0"> 
  </iframe>
}
function Jellyfish(){
  return <iframe
    style={{width:'110%',height:'100%',marginLeft:'-5%'}}
    allow="autoplay; fullscreen; xr-spatial-tracking" 
    xr-spatial-tracking 
    execution-while-out-of-viewport 
    execution-while-not-rendered
    src="https://sketchfab.com/models/950707db46634dd7ad3cadb0eb749ab3/embed?autospin=1&autostart=1&preload=1&transparent=1"> 
  </iframe>
}
function Kaleidoscopic(){
  return <iframe
    style={{width:'110%',height:'100%',marginLeft:'-5%'}}
    allow="autoplay; fullscreen; xr-spatial-tracking" 
    xr-spatial-tracking 
    execution-while-out-of-viewport 
    execution-while-not-rendered
    src="https://sketchfab.com/models/8a40abc018d2464d85a7fc9fcb401832/embed?autospin=1&autostart=1&preload=1&transparent=1&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0"> 
  </iframe>
}
function Survivor(){
  return <iframe
    style={{width:'100%',height:'100%'}}
    allow="autoplay; fullscreen; xr-spatial-tracking" 
    xr-spatial-tracking 
    execution-while-out-of-viewport 
    execution-while-not-rendered
    src="https://sketchfab.com/models/5a5dea98b3ac4ab0819687a4eef2b7cf/embed?autospin=1&autostart=1&annotations_visible=0&preload=1&transparent=1"> 
  </iframe>
}


export default Home;
