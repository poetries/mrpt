import styled from 'styled-components'
import {WingBlank  } from 'antd-mobile';

export const Wrapper = styled(WingBlank)`
    margin-top:10px;
    background-color:#fff;
    .tag-container {
        display: flex;
        padding-top: 9px;
        flex-direction: row;
        flex-wrap: wrap;
        & > div {
            margin-left: 9px;
            margin-bottom: 9px;
          }
    }
`