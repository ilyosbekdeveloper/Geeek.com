import styled from "styled-components";

const About2 = styled.div`
    .About{
        background: #fff;

        .padd{
        padding: 136px 0;
        }
        .inst{
            color: #754ffe;
            letter-spacing: 1px;
            font-size: 16px;
            font-weight: bold;
        }

        .name{
            font-weight: bold;
            font-size: 2.5rem;
            color: #000;
            span{
                color: #754ffe;
            }
        }
        .titlePar{
            width: 70%;
            p{
                color: #64748b;
                font-size: 1.25rem;
            }
        }
        .br{
            background-color: #64748bbd;
            height: .5px;
            width: 90%;
        }

        .students{
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 90%;

            .st{
                h1{
                    color: #000;
                    font-weight: bold;
                    margin: 0;
                    
                }
                p{
                    color: #64748b;
                }
            }
        }

        .works{
            .worksTitle{
                color: #754ffe;
                font-size: 16px;
                letter-spacing: 1px;
                font-weight: bold;
            }
            .work{
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding-bottom: 90px;
            }
        }

    }
        ${({darkMode})=> `
        ${        
            darkMode == 'dark' && `
            .About{
                background: #0b1324;

                .padd{
                    padding: 136px 0rem;
                }
                .inst{
                    color: #754ffe;
                    letter-spacing: 1px;
                    font-size: 16px;
                    font-weight: bold;
                }

                .name{
                    font-weight: bold;
                    font-size: 2.5rem;
                    color: #cbd5e1;
                    span{
                        color: #754ffe;
                    }
                }
                .titlePar{
                    width: 70%;
                    p{
                        color: #64748b;
                        font-size: 1.25rem;
                    }
                }
                .br{
                    background-color: #64748bbd;
                    height: .5px;
                    width: 90%;
                }

                .students{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 90%;

                    .st{
                        h1{
                            color: #cbd5e1;
                            font-weight: bold;
                            margin: 0;
                            
                        }
                        p{
                            color: #64748b;
                        }
                    }
                }

                .works{
                    .worksTitle{
                        color: #754ffe;
                        font-size: 16px;
                        letter-spacing: 1px;
                        font-weight: bold;
                    }
                    .work{
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        padding-bottom: 90px;
                    }
                }
            `
        }
    `}
`

export default About2