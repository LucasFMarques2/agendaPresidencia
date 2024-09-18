import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    :root{
        font-size: 62.5%;
    }
    ::-webkit-scrollbar {
    width: 8px;
  }


    ::-webkit-scrollbar-track {
    border-radius: 8px;
  }
  

  ::-webkit-scrollbar-thumb {
  background: ${({ theme }) => theme.COLORS.YELLOW};
  border-radius: 10px;
  }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        color: ${({ theme }) => theme.COLORS.WHITE};
        height: 100vh;
    }

    body, input, button, textarea {
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
`