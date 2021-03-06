export const rootEm = 16;

const globalStyle = `
  html,
  body {
    font-size: ${rootEm}px; // base value used for em/rem calculation
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html,
  body,
  #__next {
    height: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  a:hover {
    text-decoration: underline;
  }
  
  abbr {
    text-decoration: none;
  }

  img {
    pointer-events: none;
    user-select: none;
  }
`;

export default globalStyle;
