import React, { useEffect } from 'react';
import startQianKun from '../src/micro/index';

function App() {
  useEffect(() => {
    startQianKun([
      {
        name: 'micro-kylin',
        entry: '//localhost:3001',
        container: '#zhulong-layout',
        activeRule: '/',
        loader: () => {
          console.log(1233);
        },
      },
    ]);
  }, []);

  return (
    <div className='App'>
      <div id='zhulong-layout'></div>
    </div>
  );
}

export default App;
