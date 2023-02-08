import React, { useState, useEffect } from 'react';
import Main from './Main';
import Loading from '../loading';
import PreferenceProvider from '../context';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <PreferenceProvider>
          <Main />
        </PreferenceProvider>
      )}
    </div>
  );
}
export default App;
