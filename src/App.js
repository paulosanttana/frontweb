import React from 'react';

import './style.css';

import Header from './components/Header';
import Main from './pages/main';

const App = () => (
  <div className="App">
      <header className="App-header">
        <Header />
        <Main />
      </header>
    </div>
);


export default App;
