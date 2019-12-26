import React from 'react';
import { GlobalStyle } from  './style';
import {IconStyle} from './assets/iconfont/iconfont'

export function App(){
    return(
        <>
            <GlobalStyle />
            <IconStyle />
            <i className="iconfont">&#xe62b;</i>
        </>
    );
}