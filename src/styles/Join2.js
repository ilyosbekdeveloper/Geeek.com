import styled from "styled-components";
import JoinImg from '.././static/img/joinImg.svg'

const Join2 =styled.div`
    .join{
        background: url(${JoinImg});
        height: 440px;
        background-color: #f1f5f9;

        .join-container{
            padding: 110px 0;

            .title{
                h2{
                    color: #222;
                    font-weight: bold;
                    font-size: 36px;
                }
            }
            .par{
                color: #64748b;
                font-size: 24px;
                width: 60%;
                margin: 10px auto;
            }

            .btns{
                display: flex;
                align-items: center;
                justify-content: center;

                .btn{
                    background-color: #754ffe;
                    color: #fff;
                }
                .btn2{
                    background-color: #0ea5e9;
                }
            }
        }
    }

    ${({darkMode})=> `
        ${
            darkMode === 'dark' && `
            .join{
                background: url(${JoinImg});
                height: 440px;
                background-color: #0f172a;

                .join-container{
                    padding: 110px 0;

                    .title{
                        h2{
                            color: #cbd5e1;
                            font-weight: bold;
                            font-size: 36px;
                        }
                    }
                    .par{
                        color: #64748b;
                        font-size: 24px;
                        width: 60%;
                        margin: 10px auto;
                    }

                    .btns{
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        .btn{
                            background-color: #754ffe;
                            color: #fff;
                        }
                        .btn2{
                            background-color: #0ea5e9;
                        }
                    }
                }
            }
            `
        }
    `}
`
export default Join2