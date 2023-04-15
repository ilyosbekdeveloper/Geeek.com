import styled from "styled-components";

const Header2 = styled.div`
    font-family: sans-serif !important;
    a{
        text-decoration: none;
    }
    .drops{
        display: flex;
        align-items: center;

        .drop{
            .hoverLink{
                position: relative;
                &:hover{
                    .dropHovered{        
                        opacity: 1;
                        height: auto;
                        transform: translateY(0px) scale(1);
                    }
                }
            }
            .drop-title{
                color: #333;
                cursor: pointer;
            }

            .dropHovered{
                position: absolute;
                top: 50px;
                background: #fff;
                box-shadow: 0 4px 10px #ccc;
                border-radius: 5px;
                opacity: 0;
                height: 0;
                transform: translateY(40px) scale(0);
                transition: transform 0.3s ease-in-out, opacity 0.2s ease-out;
                ul{
                    padding: 0;
                    .landings{
                        color: #999;
                        text-transform: uppercase;
                        font-size: 12px;
                        padding: 6px 0 5px 20px;
                        letter-spacing: 1px;
                    }
                    li{
                        padding: 7px 0px 5px 20px;
                        width: 192px;
                        text-align: left;
                        cursor: pointer;
                        
                        a{
                            color: #444;
                            font-size: 15px;
                        }
                        &:hover{
                            background: #af9bf938;
                            a{
                                color: #754ffe;
                            }
                        }
                    }
                }
            }
        }
    }

    .new{
        color: #fff;
        border-radius: 5px;
        padding: 4px 7px;
        margin-left: 10px;
        background: #754ffe;
        font-size: 12px;
    }
    .inst{
        color: #333;
        font-size: 10px;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin: 16px 0 15px 0;
    }
    .instContainer{
        margin: 15px auto;
        background: #fff !important;
    }
    .instPar{
        color: #999;
        font-size: 12px;
    }
    .hoverLi{
        position: relative;

        &:hover{
            .dropHovered1{
                transform: translateY(-40px);
                opacity: 1;
                height: auto;
                width: auto;
                ul{
                    li{
                        opacity: 1;
                    }
                }
            }
        }
        .dropHovered1{
            position: absolute;
            right: -100%;
            background: #000;
            background: #fff;
            box-shadow: 0 4px 10px #ccc;
            border-radius: 5px;
            opacity: 0;
            height: 0;
            width: 0;
            transform: translateY(30px);
            transition: 
            transform 0.3s ease-in-out, 
            opacity 0.2s ease-out,
            width 0s ease;
            ul{
                padding: 0;
                li{
                    opacity: 0;
                    padding: 3px 15px;
                    width: 192px;
                    text-align: left;
                    cursor: pointer;
                    
                    .insideHover{
                        position: absolute;
                        right: 20px;
                    }
                    a{
                        color: #444 !important;
                        font-size: 15px;
                    }
                    &:hover{
                        background: #af9bf938;
                        a{
                            color: #754ffe !important;
                        }
                    }
                }
            }
        }
    }

    .df-section{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    // br
    .br{
        margin: 15px auto;
        border-bottom: 1px solid #ccc6;
    }

    .hoverLi3{
        background: #fff;
        box-shadow: 0 4px 10px #ccc;
        position: absolute;
        right: -100%;
        transform: translateY(-40px);
        display: none;
        border-radius: 4px;
    }
    .insideHover3{
        position: relative;
        &:hover{
            .hoverLi3{
                display: block;
            }
        }
    }
    .quiz{
        li{
            a{
                color: #333 !important;
            }
        }
    }


    .file{
        color: #754ffe;
        font-size: 26px;
    }
    .docs{
        width: 250px;
        .doc1{
            cursor: pointer;
            padding: 10px 15px;
            display: flex;
            align-items: center;

            .docTitle{
                color: #222;

                span{
                    color: #754ffe;
                    font-size: 14px;
                }
            }
            .docRight p{
                color: #333;
                font-size: 12px;
                padding: 0;
                margin: 0;
            }
            &:hover{
                p{
                    color: #754ffe;
                }
            }
        }
    }

    .inp{
        width: 240px;
        height: 40px;
        padding: 4px 5px 4px 37px;
        border-radius: 7px;
        border: 1px solid #b8b7b7;
        outline: none;
        color: #666;
        &::placeholder{
            font-size: 15px;
            user-select: none;
        }
        &:focus{
            border-color: #754ffe;
            outline: 4px solid #baa8fc3f;
        }
    }
    .drop6{
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        span{
            position: absolute;
            top: 8px;
            left: 14px;

            .search{
                color: #777;
                font-size: 16px;
                font-weight: light;
            }
        }
    }

    /* header */
    .headerRow{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between !important;
        flex-wrap: nowrap;
        flex-direction: row;
    }

    /* themeSection */
    .themeSection{
        width: 45px;
        height: 45px;
        border-radius: 50%;
        cursor: pointer;
        background-color: #bbe4f77a;
        display: flex;
        align-items: center;
        justify-content: center;

        .changer{
            font-size: 23px;
            color: #69757a;
        }
    }
    .rightHeader{
        display: flex;
        align-items: center;
        margin-left: 240px;

    }
    .signBtn{
        color: #223;
        width: 79.5px;
        height: 40px;
        text-align: center;
        margin-left: 10px;
        line-height: 40px;
        box-shadow: 0px 2px 5px 1px #c4c4c48d;
        border-radius: 4px;
        cursor: pointer;
        user-select: none;
    }
    .signUp{
        color: #fff;
        background: #754ffe;
    }
    .logo{
        object-fit: cover;
    }


    ${({darkMode})=> `
        ${        
            darkMode === 'dark' && `
                        
                .drop{
                    .hoverLink{
                        position: relative;
                        &:hover{
                            .dropHovered{        
                                opacity: 1;
                                height: auto;
                                transform: translateY(0px) scale(1);
                            }
                        }
                    }
                    .logo{
                        filter: brightness(0) invert(1) !important;
                    }
                    .drop-title{
                        color: #dedcdc !important;
                        cursor: pointer;
                    }

                    .dropHovered{
                        position: absolute;
                        top: 50px;
                        background: #1e293b !important;
                        box-shadow: none;
                        border-radius: 5px;
                        opacity: 0;
                        height: 0;
                        transform: translateY(40px) scale(0);
                        transition: transform 0.3s ease-in-out, opacity 0.2s ease-out;
                        ul{
                            padding: 0;
                            .landings{
                                color: #dedcdc;
                                text-transform: uppercase;
                                font-size: 12px;
                                padding: 6px 0 5px 20px;
                                letter-spacing: 1px;
                            }
                            li{
                                padding: 7px 0px 5px 20px;
                                width: 192px;
                                text-align: left;
                                cursor: pointer;
                                
                                a{
                                    color: #dedcdc !important;
                                    font-size: 15px;
                                }
                                &:hover{
                                    background: #af9bf938;
                                    a{
                                        color: #754ffe;
                                    }
                                }
                            }
                        }
                    }
                }
            }

            .new{
                color: #fff;
                border-radius: 5px;
                padding: 4px 7px;
                margin-left: 10px;
                background: #754ffe;
                font-size: 12px;
            }
            .inst{
                color: #dedcdc;
                font-size: 10px;
                text-transform: uppercase;
                letter-spacing: 1px;
                margin: 16px 0 15px 0;
            }
            .instContainer{
                margin: 15px auto;
                background: #1e293b !important;
            }
            .instPar{
                color: #fff;
                font-size: 12px;
            }
            .hoverLi{
                position: relative;
                a{
                    color: #dcdecd !important;
                }
                &:hover{
                    .dropHovered1{
                        transform: translateY(-40px);
                        opacity: 1;
                        height: auto;
                        width: auto;
                        ul{
                            li{
                                opacity: 1;
                            }
                        }
                    }
                }
                .dropHovered1{
                    position: absolute;
                    right: -100%;
                    background: #1e293b;
                    box-shadow: 0 0px 0px #ccc;
                    border-radius: 5px;
                    opacity: 0;
                    height: 0;
                    width: 0;
                    transform: translateY(30px);
                    transition: 
                    transform 0.3s ease-in-out, 
                    opacity 0.2s ease-out,
                    width 0s ease;
                    ul{
                        padding: 0;
                        li{
                            opacity: 0;
                            padding: 3px 15px;
                            width: 192px;
                            text-align: left;
                            cursor: pointer;
                            
                            .insideHover{
                                position: absolute;
                                right: 20px;
                            }
                            a{
                                color: #dedcdc !important;
                                font-size: 15px;
                            }
                            &:hover{
                                background: #af9bf938;
                                a{
                                    color: #754ffe !important;
                                }
                            }
                        }
                    }
                }
            }

            .df-section{
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            // br
            .br{
                margin: 15px auto;
                border-bottom: 1px solid #ccc6;
            }

            .hoverLi3{
                background: #1e293b;
                box-shadow: 0 4px 10px #ccc;
                position: absolute;
                right: -100%;
                transform: translateY(-40px);
                display: none;
                border-radius: 4px;
            }
            .insideHover3{
                position: relative;
                &:hover{
                    .hoverLi3{
                        display: block;
                    }
                }
            }
            .quiz{
                li{
                    a{
                        color: #1e293b !important;
                    }
                }
            }


            .file{
                color: #754ffe;
                font-size: 26px;
            }
            .docs{
                width: 250px;
                background: #1e293b;
                box-shadow: 0 0  0 0 red;
                .doc1{
                    cursor: pointer;
                    padding: 10px 15px;
                    display: flex;
                    align-items: center;

                    .docTitle{
                        color: #dedcdc;

                        span{
                            color: #754ffe;
                            font-size: 14px;
                        }
                    }
                    .docRight p{
                        color: #dedcdc;
                        font-size: 12px;
                        padding: 0;
                        margin: 0;
                    }
                    &:hover{
                        p{
                            color: #754ffe;
                        }
                    }
                }
            }

            .inp{
                width: 240px;
                height: 40px;
                padding: 4px 5px 4px 37px;
                border-radius: 7px;
                border: 1px solid #0b1324;
                outline: none;
                background: #0b1324;
                color: #36658b;
                &::placeholder{
                    font-size: 15px;
                    user-select: none;
                    color: #36658b;
                }
                &:focus{
                    border-color: #0b1324;
                    outline: none;
                }
            }
            .drop6{
                position: relative;
                display: flex;
                align-items: center;
                justify-content: space-between;
                span{
                    position: absolute;
                    top: 8px;
                    left: 14px;

                    .search{
                        color: #36658b;
                        font-size: 16px;
                        font-weight: light;
                    }
                }
            }

            /* header */
            .headerRow{
                display: flex;
                align-items: center;
                justify-content: space-between !important;
                flex-wrap: nowrap;
                background: #1e293b;
                flex-direction: row;
            }

            /* themeSection */
            .themeSection{
                width: 45px;
                height: 45px;
                border-radius: 50%;
                cursor: pointer;
                background-color: #0b1324;
                display: flex;
                align-items: center;
                justify-content: center;

                .changer{
                    font-size: 23px;
                    color: #dedcdc;
                }
            }
            .rightHeader{
                display: flex;
                align-items: center;

            }
            .signBtn{
                color: #dedcdc;
                width: 79.5px;
                height: 40px;
                text-align: center;
                margin-left: 10px;
                line-height: 40px;
                box-shadow: none;
                border-radius: 4px;
                cursor: pointer;
                user-select: none;
                background: #0b1324;
            }
            .signUp{
                color: #dedcdc;
                background: #754ffe;
            }
            `
        }
    `}
`

export default Header2

