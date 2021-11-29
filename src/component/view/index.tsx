import React from 'react'
import styled from 'styled-components'
import { colors } from '../../common/utils'
import ParticlesBg from '../../component/ParticlesBg'

export const BodyWrapper = styled.div`
  position: relative;
  width: 100%;
  display:flex;
  flex:1;
  flex-direction:column;
  @media (max-width: 768px) {
  };
  height:100%;
  z-index:2;
  background-color:${colors.black};
  overflow:hidden
`

export default function AppBody({ children }: { children: React.ReactNode }) {
  return <BodyWrapper>
    <ParticlesBg/>
    {children}
  </BodyWrapper>
}


export const BodyMainWrapper = styled.div`
  position: relative;
  width: 100%;
  display:flex;
  flex-direction:column;
  @media (max-width: 768px) {
   
  };
  z-index2;
  padding-top:50px;
  padding-bottom:70px;
  // background-color:${colors.black};
  height:100%;

`

export function AppMainBody({ children,style }: { children: React.ReactNode,style?:Object }) {
  return <BodyMainWrapper style={style}>
    {children}
  </BodyMainWrapper>
}

