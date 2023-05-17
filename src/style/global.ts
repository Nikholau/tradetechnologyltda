import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --blue: #0071BC;
    --black: #3B3A34;
    --green: #8CC63F;
    --red: #C53030;
    --white: #FFFFFF;
    --light-grey: #EBEBEB;
    --medium-grey: #9E9E9E;
    --dark-grey: #424242;
    --yellow: #FFEE28;
    --purple: #800080;
  }
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  
  body {
    background: var(--medium-grey);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  body, input, button {
    font: 16px 'Barlow', 'Roboto', sans-serif;
  }

  #root {
    position: relative;
    min-height: calc(100vh - 170px);
  }

  button {
    cursor: pointer;
  }

  h6, h5, h4, h3, h2, h1 {
    margin: 0;
  }

  .toast-notification {
    background: var(--purple);
    color: var(--white);
    font-size: 14px;
    font-weight: 600;
  }
`;
