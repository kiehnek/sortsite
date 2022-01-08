import '@fontsource/fira-mono/latin-400.css';
import App from 'App';
import { StrictMode } from 'react';
import { render } from 'react-dom';
import './style.css';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
