import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  padding-top: 10px;
  padding-bottom: 10px;
  color: ${p => p.theme.colors.colorText};
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
ul {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

button {
  cursor: 'pointer',
}
`;
