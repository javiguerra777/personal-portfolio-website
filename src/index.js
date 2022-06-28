/*
Thank you to these following websites for letting me use these
photos for my portfolio project
Photo references:
Robert Half: thebestandbrightest.com
Cullinan Group Foundation: th.bing.com
Bitwise/Alpha Works:www.fresnocitycollege.com
Cash Offers LLC: cdn.carrot.com
Diversified Products: water.ca.gov
Grower Direct Nut: www.anaut.com
*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import './css/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
);
