/*
Thank you to these following websites for letting me use there 
photos for my portfolio project
Photo references:
Robert Half: thebestandbrightest.com
Cullinan Group Foundation: th.bing.com
Bitwise/Alpha Works:www.fresnocitycollege.com
Cash Offers LLC: cdn.carrot.com
Diversified Products: water.ca.gov
Grower Direct Nut: www.anaut.com
University of the Pacific: i.pinimg.com
Stanislaus State: www.csustan.edu
Venture Academy: th.bing/com
Java Logo: www.teahub.io
Facebook logo: th.bing.com
html and css logo: www.logolynx.com
scratch io logo: pdnchen.weebly.com
c++ logo: th.bing.com
python logo: gss-technology.com
bay valley tech logo: snap-tech.com
javascript logo: www.britefish.net
vectorstock.com for multiple images
dreamstime.com for the numbers image and the school photo
1000logos.net for the github icon
github.githubassets.com for the github logo
image.siilarpng.com for the twitter logo
https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg for the galaxy background image
*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
);
