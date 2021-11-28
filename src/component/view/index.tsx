import React from 'react'
import styled from 'styled-components'
import { colors } from '../../common/utils'

export const BodyWrapper = styled.div`
  position: relative;
  width: 100%;
  display:flex;
  flex:1;
  flex-direction:column;
  @media (max-width: 768px) {
  };
  height:100%;
  z-index:10;
  background-color:${colors.black};
  overflow:hidden
`

export default function AppBody({ children }: { children: React.ReactNode }) {
  return <BodyWrapper>
    {children}
  </BodyWrapper>
}


export const BodyMainWrapper = styled.div`
  position: relative;
  width: 100%;
  display:flex;
  flex-direction:column;
  margin:100px 0px 0px 0px;
  @media (max-width: 768px) {
    padding:0px 15px;
    margin-top:70px;
    margin-left:0px;
    width:100%
  };
  height:100%;
  align-items:center;
  z-index:10
`

export function AppMainBody({ children }: { children: React.ReactNode }) {
  return <BodyMainWrapper>
    {children}
  </BodyMainWrapper>
}

