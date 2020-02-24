import React from 'react';
import Routes from './routes';

import './style.css';

import Header from './components/Header';

const App = () => (
  <div className="App">
      <header className="App-header">
        <Header />
        <Routes />
      </header>
    </div>
);


export default App;
