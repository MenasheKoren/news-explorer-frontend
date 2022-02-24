import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'normalize.css';
import './index.css';
import { App } from './components/App/App';
import { render } from 'react-dom';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
