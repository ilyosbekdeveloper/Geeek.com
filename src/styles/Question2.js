import styled from "styled-components";

const Question2 = styled.div`
    .question{
        background-color: #fff;
        padding: 136px 0;

        .container{
            .title{
                color: #754ffe;
                font-size: 16px;
                font-weight: bold;
                letter-spacing: 1px;
            }

            h1{
                color: #000;
                font-weight: bold;
                letter-spacing: 1px;
                text-align: center;
                padding-top: 15px;
            }
            .par{
                color: #64748b;
                font-size: 22px;
                padding-bottom: 20px;
            }

            .accordion{
                width: 80%;
                margin: 10px auto;

                .accordion-button{
                    color: #000;
                    font-size: 20px ;
                    font-weight: bold ;

                    &:hover{
                        color: #754ffe;
                    }
                    &:focus{
                        outline: none !important;
                        border: none !important;
                    }

                    &::after{
                        color: #754ffe;
                        font-weight: lighter;
                        font-size: 30px;
                        content: '+';
                        background-image: none;
                    }
                }

                .accordion-body{
                    color: #64748b;
                }
            }

            .btn{
                color: #754ffe;
                border: 1px solid #754ffe;
                font-weight: bold;
                padding: 3px 10px;
                margin-top: 20px;

                &:hover{
                    color: #fff;
                    background-color: #754ffe;
                }
            }
        }
    }

    ${({darkMode})=>`
        ${
            darkMode === 'dark' && `
            .question{
                background-color: #0b1324;
                padding: 136px 0;

                .container{
                    .title{
                        color: #754ffe;
                        font-size: 16px;
                        font-weight: bold;
                        letter-spacing: 1px;
                    }

                    h1{
                        color: #cbd5e1;
                        font-weight: bold;
                        letter-spacing: 1px;
                        text-align: center;
                        padding-top: 15px;
                    }
                    .par{
                        color: #64748b;
                        font-size: 22px;
                        padding-bottom: 20px;
                    }

                    .accordion{
                        width: 80%;
                        margin: 10px auto;
                        background: transparent !important;

                        .accordion-item{
                            background: transparent !important;
                        }
                        .accordion-header{
                            background: transparent !important;
                        }

                        .accordion-button{
                            color: #cbd5e1;
                            font-size: 20px ;
                            font-weight: bold ;
                            background: transparent !important;

                            &:hover{
                                color: #754ffe;
                            }
                            &:focus{
                                outline: none !important;
                                border: none !important;
                            }

                            &::after{
                                color: #754ffe;
                                font-weight: lighter;
                                font-size: 30px;
                                content: '+';
                                background-image: none;
                            }
                        }

                        .accordion-body{
                            color: #64748b;
                        }
                    }

                    .btn{
                        color: #754ffe;
                        border: 1px solid #754ffe;
                        font-weight: bold;
                        padding: 3px 10px;
                        margin-top: 20px;

                        &:hover{
                            color: #fff;
                            background-color: #754ffe;
                        }
                    }
                }
            }
            `
        }
    `}
` 

export default Question2