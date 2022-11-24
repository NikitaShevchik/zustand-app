import React from 'react';
import { Route } from 'react-router';
import { Routes } from 'react-router-dom';
import './App.scss';
import Counter from './pages/Counter/Counter';
import Main from './pages/Main/Main';
import State from './pages/State/State';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />}>
          <Route element={<Counter />} path='counter' />
          <Route element={<State />} path='state' />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
