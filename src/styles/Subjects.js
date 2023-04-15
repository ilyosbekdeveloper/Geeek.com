import styled from "styled-components";

const Subjects = styled.div`
    .subject{
        background: #e2e8f0;
        padding-top: 136px;
        padding-bottom: 136px;

        .top{
            color: #754ffe;
            font-size: 17px;
            font-weight: bold;
            letter-spacing: 1px;
        }
        .display-4{
            color: #000;
            font-weight: bold;
        }
        .titlePar{
            color: #64748b;
            font-size: 20px;
            width: 780px;
            margin: auto;
        }
        .box{
            background: #fff;
            box-shadow: 0 1px 3px #90909068;
            border-radius: 10px;
        }
        .box{
                margin: 16px 0;
            }
        .boxes{
            /* flex-wrap: nowrap !important; */
        }
        .box-title{
            .col-2{
                background: #754ffe;
                width: 70px;
                height: 70px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
        .int{
            display: flex;
            align-items: center;
            h5{
                margin: 0;
                color: #222;
                font-weight: bold;
                font-size: 24px;
            }
            .free{
                color: #fff;
                background: #f59e0b;
                padding: 3px 7px;
                border-radius: 9px;
                margin-left: 15px;
            }
        }
        .crs{
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 300px;
            font-size: 14px;
            color: #64748b;
            font-weight: bold;

            .crs1{
                color: #000;
            }
        }
        .cardPar{
            p{
                color: #64748b;
                font-size: 17px;
            }
        }
        .cardLink{
            a{
                color: #754ffe;
                text-decoration: underline;
                font-weight: bold;
                font-size: 15px;
            }
        }
        .card{
            border: none;
        }
    }

    ${({darkMode})=> `
        ${
            darkMode === 'dark' && `
            .subject{
                background: #0f172a;
                padding-top: 136px;
                padding-bottom: 136px;

                .top{
                    color: #754ffe;
                    font-size: 17px;
                    font-weight: bold;
                    letter-spacing: 1px;
                }
                .display-4{
                    color: #cbd5e1;
                    font-weight: bold;
                }
                .titlePar{
                    color: ;
                    font-size: 20px;
                    width: 780px;
                    margin: auto;
                }
                .box{
                    background: #1e293b;
                    box-shadow: 0 0px 0px #90909068;
                    border-radius: 10px;
                }
                .card{
                    background: transparent;
                }
                .box{
                        margin: 16px 0;
                    }
                .boxes{
                    /* flex-wrap: nowrap !important; */
                }
                .box-title{
                    .col-2{
                        background: #754ffe;
                        width: 70px;
                        height: 70px;
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                }
                .int{
                    display: flex;
                    align-items: center;
                    h5{
                        margin: 0;
                        color: #cbd5e1;
                        font-weight: bold;
                        font-size: 24px;
                    }
                    .free{
                        color: #fff;
                        background: #f59e0b;
                        padding: 3px 7px;
                        border-radius: 9px;
                        margin-left: 15px;
                    }
                }
                .crs{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 300px;
                    font-size: 14px;
                    color: #64748b;
                    font-weight: bold;

                    .crs1{
                        color: #fff;
                    }
                }
                .cardPar{
                    p{
                        color: #64748b;
                        font-size: 17px;
                    }
                }
                .cardLink{
                    a{
                        color: #754ffe;
                        text-decoration: underline;
                        font-weight: bold;
                        font-size: 15px;
                    }
                }
                .card{
                    border: none;
                }
            }
            `
        }
    `}
`   

export default Subjects