import React from 'react';
import Main from './Main';
import PreferenceProvider from '../context';

function App() {
  return (
    <PreferenceProvider>
      <Main />
    </PreferenceProvider>
  );
}
export default App;
