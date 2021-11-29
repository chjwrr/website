import './App.css';
import {useEffect} from 'react'
import Background from './component/backgroundImage'
import AppBody from './component/view'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

import Home from './pages/home'
import Video from './pages/video'
import AboutMe from './pages/aboutMe'
import styled from 'styled-components';
import Header from './component/header'
import Bottom from './component/bottom'

const Main = styled.div`
  width:100%;
  height:100%;
  display:flex;
  flex:1;
  flex-direction:column;
  position:absolute
`

function App() {
  return (
    <Main>
      {/* <Background/> */}
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video" element={<Video />} />
          <Route path="/aboutMe" element={<AboutMe />} />
          
          <Route
            path="*"
            element={<Home />}
          />
        </Routes>
        <Bottom/>
      </BrowserRouter>
    </Main>
  );
}

export default App;