import React from 'react';
import { Route } from 'react-router';
import { Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import './App.scss';
import Counter from './pages/Counter/Counter';
import Main from './pages/Main/Main';
import State from './pages/State/State';

const GlobalStyle = createGlobalStyle`
body {
  background-color: #4572; 
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Routes>
          <Route path='/' element={<Main />}>
            <Route element={<Counter />} path='counter' />
            <Route element={<State />} path='state' />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
