import React, { Component } from 'react';
import './App.css';

function handleClick() {
  console.log('clicou')
}

function handleClick1() {
  console.log('clicou1')
}

function handleClick2() {
  console.log('clicou2')
}

class App extends Component {
  render() {
    return (
      <div>
          <button onClick={ handleClick }>Botão</button>
          <button onClick={ handleClick1 }>Botão1</button>
          <button onClick={ handleClick2 }>Botão2</button>
      </div>
    );
  }
}

export default App;
