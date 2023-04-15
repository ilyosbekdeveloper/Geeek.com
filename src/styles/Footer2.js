import styled from "styled-components";

const Footer2 = styled.div`
    footer{
        background: #fff;
        .footer{
            padding: 72px 0;
        }
        .par{
            color: #475569;
        }

        .footerImg{
            object-fit: cover;
            margin-bottom: 20   px;
        }

        .links{
            .link{
                padding: 0 10px;
                color: #475569;
                cursor: pointer;

                &:hover{
                color: #754ffe;
            }
            }
        }
        .link{
                padding: 0 10px;
                color: #475569;
                cursor: pointer;
                font-size: 15px;

                &:hover{
                color: #754ffe;
            }
        }

        .col-2, .col-3{
            .title{
                color: #222;
                font-weight: bold;
                font-size: 24px;
            }
            ul{
                padding: 0;
                margin: 0;
                li{
                    padding: 3px 0;
                }
                a{
                    padding: 0;
                }
            }
        }
        .faq{
            p{
                color: #475569;
                padding-bottom: 10px;
                font-size: 15px;
            }
        }
        .phone{
            color: #475569;
            font-size: 15px;
            span{
                color: #222;
                font-weight: bold;
                margin-bottom: 20px;
            }
        }

        .imgs{
            margin-top: 15px;
            display: flex;
            align-items: center;
            flex-wrap: nowrap;
            img{
                width: 147px;
            }
        }

        .br{
            background-color: #4755698d;
            height: 1px;
            width: 100%;
        }

        .rightPar{
            color: #475569;
            font-size: 15px;
            padding-top: 10px;
        }

        .col-8{
            ul{
                padding-top: 10px;
                margin: 0;
                text-align: right;
                display: flex;
                align-items: center;
                li{
                    padding: 0 10px;
                    &:first-child{
                        flex: 1;
                    }
                }
            }
        }
    }

    ${({darkMode})=> `
        ${
            darkMode === 'dark' && `
                footer{
                    background: #0b1324;
                    
                    .footer{
                        padding: 72px 0;
                    }
                    .par{
                        color: #475569;
                    }

                    .footerImg{
                        object-fit: cover;
                        margin-bottom: 20px;
                        filter: brightness(0) invert(1);
                    }

                    .links{
                        .link{
                            padding: 0 10px;
                            color: #475569;
                            cursor: pointer;

                            &:hover{
                            color: #754ffe;
                        }
                        }
                    }
                    .link{
                            padding: 0 10px;
                            color: #475569;
                            cursor: pointer;
                            font-size: 15px;

                            &:hover{
                            color: #754ffe;
                        }
                    }

                    .col-2, .col-3{
                        .title{
                            color: #cbd5e1;
                            font-weight: bold;
                            font-size: 24px;
                        }
                        ul{
                            padding: 0;
                            margin: 0;
                            li{
                                padding: 3px 0;
                            }
                            a{
                                padding: 0;
                            }
                        }
                    }
                    .faq{
                        p{
                            color: #475569;
                            padding-bottom: 10px;
                            font-size: 15px;
                        }
                    }
                    .phone{
                        color: #475569;
                        font-size: 15px;
                        span{
                            color: #fff;
                            font-weight: bold;
                            margin-bottom: 20px;
                        }
                    }

                    .imgs{
                        margin-top: 15px;
                        display: flex;
                        align-items: center;
                        flex-wrap: nowrap;
                        img{
                            width: 147px;
                        }
                    }

                    .br{
                        background-color: #4755698d;
                        height: 1px;
                        width: 100%;
                    }

                    .rightPar{
                        color: #475569;
                        font-size: 15px;
                        padding-top: 10px;
                    }

                    .col-8{
                        ul{
                            padding-top: 10px;
                            margin: 0;
                            text-align: right;
                            display: flex;
                            align-items: center;
                            li{
                                padding: 0 10px;
                                &:first-child{
                                    flex: 1;
                                }
                            }
                        }
                    }
                }
            `
        }
    `}
    
`

export default Footer2