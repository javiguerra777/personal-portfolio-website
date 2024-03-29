import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './app/store';
import App from './app/App';
import './index.css';
import 'react-vertical-timeline-component/style.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);

/*
attributions
<a href="https://www.freepik.com/free-photo/blue-watercolor-splash-background_6649581.htm">Image by vector_corp</a> on Freepik
vecteezy.com
*/
