import styled from 'styled-components'

export const Wrapper = styled.div`
    .am-list-item.am-list-item-middle {
        .am-list-content {
            padding-right:20px;
            flex:none;
        }
        .am-list-extra {
            .ant-progress-outer {
                position: relative;
                .ant-progress-inner {
                    margin-top: 14px;
                }
            }
            .progress-desc {
                text-align: right;
                width: auto;
                position: absolute;
                top: -1px;
                right: 15px;
            }
        }
        .am-list-extra {
            flex:1 1;
        }
    }
`