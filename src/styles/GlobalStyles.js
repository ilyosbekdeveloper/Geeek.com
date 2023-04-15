import { createGlobalStyle } from "styled-components";

const GlabalStyles = createGlobalStyle`
    :root{
        --link-color: #49a3d2;
    }
    body{
        width: 100%;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }
    ul{
        list-style: none;
    }
    a{
        text-decoration: none;
    }
    header{
        width: 100%;
    }
    *{
        transition: all .2s;
    }

`

export default GlabalStyles