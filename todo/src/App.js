import React, {useState, useReducer} from 'react';
import List from './components/List';
import './App.css';
import { initialState, reducer } from './reducers/list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React To Do List</h1>
        <div className="hello">
          <List />
        </div>
      </header>
    </div>
  );
}

export default App;
