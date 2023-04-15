import styled from "styled-components";

const Testimon = styled.div`
    .testimonial{
        background-color: #f1f5f9;
        padding: 136px 0;

        .testtitle{
            color: #754ffe;
            letter-spacing: 1px;
            font-size: 16px;
            font-weight: bold;
        }
        .displayy-4{
            color: #000;
            font-weight: bold;
        }
        .test-par{
            color: #64748b;
            text-align: center;
            font-size: 18px;
        }

        .tests{
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: nowrap;

            .test{
                background: #fff;
                box-shadow: 0 1px 4px #cccccc61;
                border-radius: 10px;
                text-align: center;
                padding: 0;
                margin: 0;
                overflow: hidden;
                
                .par{
                    padding-top: 15px;
                    padding: 56px;
                    color: #111;
                    font-size: 18px;
                    font-weight: bolder;
                }

                .footer{
                    background: #754ffe;
                    padding: 0;
                    margin: 0;
                    position: relative;

                    .footer-title{
                        color: #fff;
                        font-size: 22px;
                        font-weight: bold;
                        padding-top: 50px;
                    }

                    .footer-par{
                        color: #b6a2fe;
                        padding: 0 0 15px 0;
                    }

                    .footerImg{
                        background: #754ffe;
                        width: 80px;
                        height: 80px;
                        border-radius: 50%;
                        overflow: hidden;

                        position: absolute;
                        border: 4px solid #754ffe;
                        top: -40px;
                        left: 43%;

                        img{
                            width: 100%;
                        }
                    }
                }
                .footer2{
                    background: #0ea5e9;

                    .footerImg{
                        border: 4px solid #0ea5e9;
                    }
                }
            }
        }
    }

    ${({darkMode})=> `
        ${
            darkMode === 'dark' && `
            .testimonial{
                background-color: #0f172a;
                padding: 136px 0;

                .testtitle{
                    color: #754ffe;
                    letter-spacing: 1px;
                    font-size: 16px;
                    font-weight: bold;
                }
                .displayy-4{
                    color: #cbd5e1;
                    font-weight: bold;
                }
                .test-par{
                    color: #64748b;
                    text-align: center;
                    font-size: 18px;
                }

                .tests{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    flex-wrap: nowrap;

                    .test{
                        background: #1e293b;
                        box-shadow: 0 0px 0px #cccccc61;
                        border-radius: 10px;
                        text-align: center;
                        padding: 0;
                        margin: 0;
                        overflow: hidden;
                        
                        .par{
                            padding-top: 15px;
                            padding: 56px;
                            color: #fff;
                            font-size: 18px;
                            font-weight: bolder;
                        }

                        .footer{
                            background: #754ffe;
                            padding: 0;
                            margin: 0;
                            position: relative;

                            .footer-title{
                                color: #fff;
                                font-size: 22px;
                                font-weight: bold;
                                padding-top: 50px;
                            }

                            .footer-par{
                                color: #b6a2fe;
                                padding: 0 0 15px 0;
                            }

                            .footerImg{
                                background: #754ffe;
                                width: 80px;
                                height: 80px;
                                border-radius: 50%;
                                overflow: hidden;

                                position: absolute;
                                border: 4px solid #754ffe;
                                top: -40px;
                                left: 43%;

                                img{
                                    width: 100%;
                                }
                            }
                }
                .footer2{
                    background: #0ea5e9;

                    .footerImg{
                        border: 4px solid #0ea5e9;
                    }
                }
            }
        }
    }
            `
        }
    `}
`

export default Testimon