cursor: pointer;  鼠标变成手

width: fit-content;

backgroundColor: 'transparent'

background-image: linear-gradient(to right, #2FA8F6, #7EC9F7);

background-image:url(${ImageCommon.countdown_bg_html});
background-position:center;
background-size:cover;
background-repeat: no-repeat;

border:none; 5px solid red;  
border-style:dotted solid double dashed; 
border-radius: 10px

text-decoration: none; 
overline line-through underline blink

position:relative;


@media (max-width: 768px) {
  font-size: 0.6rem;
  top: 3rem;
}

import styled from 'styled-components'


路由传参
import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
export function RedirectDuplicateTokenIds(props: RouteComponentProps<{ currencyIdA: string; currencyIdB: string }>) {
  const {
    match: {
      params: { currencyIdA, currencyIdB }
    }
  } = props
  return <div></div>
}
路由声明
<Route exact path="/add/:currencyIdA/:currencyIdB" component={RedirectDuplicateTokenIds} />
按钮使用
import { ButtonCustom } from '../../components/Button'
import { Link } from 'react-router-dom'
<ButtonCustom
  as={Link}
  to={`/add/${currencyId(currency0)}/${currencyId(currency1)}`}
>
  Add
</ButtonCustom>



普通组件传参
export default function MyLiquidityList({
  changeAdd
  params1
}: {
  changeAdd?:()=>void
  params1?:string
}) {
  return (
    <>
    </>
  )
}
import {useTranslation} from "react-i18next";
const {t} = useTranslation();
{t("blackholeWarning")}

import i18next from 'i18next'
i18next.changeLanguage("zh-CN")

