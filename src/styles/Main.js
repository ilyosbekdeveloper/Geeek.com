import styled from "styled-components";

const Main2 = styled.div`
.main{
    background: #fff;
}
    .container{
        .main-title{
            .vanilla{
                h1{
                    color: #1e293b;
                    font-weight: bold;
                }
                p{
                    color: #444;
                    font-size: 1.25rem;
                }
            }
            .results{
                .hour{
                    span{
                        color: #333;
                        font-size: 16px;
                    }
                }

                .ico{
                    color: #f59e0b;
                }
            }
            .watchPreviewBtn{
                color: #fff;
                background: #38a169;
                border: none;
                width: 156px;
                height: 51.2px;
                font-size: 18px;
                font-weight: bold;
                border-radius: 8px;
            }
        }
        .main-row{
            padding-top: 152px;
            padding-bottom: 152px;

            .createAccount{
                position: relative;
                .regesterSection{
                    .acTitle{
                        h4{
                            color: #1e293b;
                            font-size: 1.5rem;
                            font-weight: 700;
                        }
                    }
                    .card-icons{
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        .icon{
                            background: #f1f5f9;
                            display: inline-block;
                            width: 140px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            padding: 10px 0;
                            text-align: center;
                            border-radius: 10px;
                            cursor: pointer;

                            &:hover{
                                background: #8e8d8d57;
                            }
                            img{
                                width: 20px;
                            }
                            span{
                                color: #1e293b;
                                padding-left:  7px;
                            }
                        }
                    }

                    .or{
                        text-align: center;
                        color: #333;
                        font-size: 14px;
                        position: relative;
                        &::after{
                            position: absolute;
                            content: '';
                            background: #a8a5a5bc;
                            height: 1px;
                            width: 46%;
                            top: 9px;
                            left: 0;
                        }
                        &::before{
                            position: absolute;
                            content: '';
                            background: #a8a5a5bc;
                            height: 1px;
                            width: 46%;
                            top: 9px;
                            right: 0;
                        }
                    }

                    .inputsSection{
                        .inp{
                            color: #1e293b;
                            width: 100%;
                            padding: 6px 10px;
                            border: 1px solid #b4c1ce;
                            border-radius: 5px;

                            &::placeholder{
                                color: #747576;
                                font-size: 14px;
                            }
                            &:focus{
                                border-color: #754ffe;
                                outline: 4px solid #baa8fc3f;
                            }
                        }
                    }

                    .start{
                        color: #fff;
                        font-weight: bold;
                        background: #754ffe;
                        width: 100%;
                        padding: 10px 0;
                        border: none;
                        border-radius: 7px;
                    }

                }
                .br{
                    width: 100%;height:0.3px;
                    background: #999;
                }
                .fot{
                    width: 100%;
                    padding: 10px 20px;
                    color: #777;
                    .footerPar{
                        a{
                            color: #000;
                            font-weight: bold;
                        }
                    }
                }
            }
            .card{
                background: #fff;
                box-shadow: 0 9px 20px #a8a6a688;
                z-index: 14;
                padding: 10px 20px;
                border: none;
            }
            .bgSvg{
                position: absolute;
                right: -45px;
                bottom: -50px;
                opacity: .7;
            }
        }

        .courses{
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-bottom: 15px;

            .course{
                display: flex;
                align-items: center;
                .check{
                    background: #ffeeda;
                    color: #c28135;
                    padding: 5px;
                    border-radius: 50%;
                }
                span{
                    color: #111;
                    font-weight: bold;
                    font-size: 15px;
                }
            }
        }
    }


    ${({darkMode})=> `
        ${        
            darkMode == 'dark' && `
            .main{
                background: #0b1324;
            }
                .container{
                    .main-title{
                        .vanilla{
                            h1{
                                color: #cbd5e1;
                                font-weight: bold;
                            }
                            p{
                                color: #64748b;
                                font-size: 1.25rem;
                            }
                        }
                        .results{
                            .hour{
                                span{
                                    color: #64748b;
                                    font-size: 16px;
                                }
                            }

                            .ico{
                                color: #f59e0b;
                            }
                        }
                        .watchPreviewBtn{
                            color: #fff;
                            background: #38a169;
                            border: none;
                            width: 156px;
                            height: 51.2px;
                            font-size: 18px;
                            font-weight: bold;
                            border-radius: 8px;
                        }
                    }
                    .main-row{
                        padding-top: 152px;
                        padding-bottom: 152px;

                        .createAccount{
                            position: relative;
                            .regesterSection{
                                .acTitle{
                                    h4{
                                        color: #1e293b;
                                        font-size: 1.5rem;
                                        font-weight: 700;
                                    }
                                }
                                .card-icons{
                                    display: flex;
                                    align-items: center;
                                    justify-content: space-between;
                                    .icon{
                                        background: #0f172a;
                                        display: inline-block;
                                        width: 140px;
                                        display: flex;
                                        align-items: center;
                                        justify-content: center;
                                        padding: 10px 0;
                                        text-align: center;
                                        border-radius: 10px;
                                        cursor: pointer;

                                        &:hover{
                                            background: #0a101c;
                                        }
                                        img{
                                            width: 20px;
                                        }
                                        span{
                                            color: #fff;
                                            padding-left:  7px;
                                        }
                                    }
                                }

                                .or{
                                    text-align: center;
                                    color: #cbd5e1;
                                    font-size: 14px;
                                    position: relative;
                                    &::after{
                                        position: absolute;
                                        content: '';
                                        background: #9393937a;
                                        height: 1px;
                                        width: 46%;
                                        top: 9px;
                                        left: 0;
                                    }
                                    &::before{
                                        position: absolute;
                                        content: '';
                                        background: #9393937a;
                                        height: 1px;
                                        width: 46%;
                                        top: 9px;
                                        right: 0;
                                    }
                                }

                                .inputsSection{
                                    .inp{
                                        color: #1e293b;
                                        width: 100%;
                                        padding: 6px 10px;
                                        border: 1px solid transparent;
                                        border-radius: 5px;
                                        background: #0b1324;

                                        &::placeholder{
                                            color: #747576;
                                            font-size: 14px;
                                        }
                                        &:focus{
                                            border-color: #754ffe;
                                            outline: 4px solid #baa8fc3f;
                                        }
                                    }
                                }

                                .start{
                                    color: #fff;
                                    font-weight: bold;
                                    background: #754ffe;
                                    width: 100%;
                                    padding: 10px 0;
                                    border: none;
                                    border-radius: 7px;
                                }

                            }
                            .br{
                                width: 100%;height:0.3px;
                                background: #999;
                            }
                            .fot{
                                width: 100%;
                                padding: 10px 20px;
                                color: #64748b;
                                .footerPar{
                                    a{
                                        color: #dcebff;
                                        font-weight: bold;
                                    }
                                }
                            }
                        }
                        .card{
                            background: #1e293b;
                            box-shadow: 0 0px 0px #a8a6a688;
                            z-index: 14;
                            padding: 10px 20px;
                            border: none;
                        }
                        .bgSvg{
                            position: absolute;
                            right: -45px;
                            bottom: -50px;
                            opacity: .2;
                        }
                    }

                    .courses{
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        padding-bottom: 15px;

                        .course{
                            display: flex;
                            align-items: center;
                            .check{
                                background: #ffeeda;
                                color: #c28135;
                                padding: 5px;
                                border-radius: 50%;
                            }
                            span{
                                color: #fff;
                                font-weight: bold;
                                font-size: 15px;
                            }
                        }
                    }
                }
            `
        }
    `}
`

export default Main2