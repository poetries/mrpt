import styled from 'styled-components'
import {Modal} from 'antd'

export const Wrapper = styled.div`
    text-align:right;
    padding: 3px;
`
export const ButtonWrapper = styled.div`
   a.am-button {
        width:100%;
        background:#fff;
        color:#423f3f;
        @media (-webkit-min-device-pixel-ratio: 2), not all, (min-resolution: 2dppx) {
            border: 1PX solid #fff !important;
        }
    }
`
export const ModalWrapper = styled(Modal)`
    margin:0 !important;
    .ant-modal-body {
        padding:0 !important;
    }
    .ant-modal-header {
        background: #1990ff !important;
        .ant-modal-title {
            text-align: center !important;
        }
    }
    .ant-modal-title {
        position: relative !important;
        top: 5px !important;
    }
    .ant-modal-footer {
        background-color: #f5f5f9 !important;
        border-top: 1px solid #f5f5f9 !important;
        padding:0 !important;
        button:nth-child(1) {
            position: absolute !important;
            top: 17px !important;
            left: 5px !important;
            border-color: #1990ff !important;
            background: #1990ff !important;
            color:#fff !important;
        }
        button:nth-child(2) {
            position: absolute !important;
            top: 17px !important;
            right: 1px !important;

        }
    }
`