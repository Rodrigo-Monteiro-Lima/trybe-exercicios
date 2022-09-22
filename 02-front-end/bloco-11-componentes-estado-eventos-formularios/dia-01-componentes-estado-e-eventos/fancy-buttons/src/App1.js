import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this);
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
  }

  handleClick() {
    console.log('clicou', this)
  }
  
  handleClick1() {
    console.log('clicou1', this)
  }
  
  handleClick2() {
    console.log('clicou2', this)
  }

  render() {
    return (
      <div>
          <button onClick={ this.handleClick }>Botão</button>
          <button onClick={ this.handleClick1 }>Botão1</button>
          <button onClick={ this.handleClick2 }>Botão2</button>
      </div>
    );
  }
}

export default App;
