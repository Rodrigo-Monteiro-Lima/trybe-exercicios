import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      numeroDeCliques: 0,
      numeroDeCliques1: 0,
      numeroDeCliques2: 0,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
  }

  handleClick() {
   this.setState((estadoAnterior, _props) => ({
    numeroDeCliques: estadoAnterior.numeroDeCliques + 1,
   }))
  }
  
  handleClick1() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques1: estadoAnterior.numeroDeCliques1 + 1,
     }))
  }
  
  handleClick2() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques2: estadoAnterior.numeroDeCliques2 + 1,
     }))
  }

  render() {
    return (
      <div>
          <button onClick={ this.handleClick }>{ this.state.numeroDeCliques }</button>
          <button onClick={ this.handleClick1 }>{ this.state.numeroDeCliques1 }</button>
          <button onClick={ this.handleClick2 }>{ this.state.numeroDeCliques2 }</button>
      </div>
    );
  }
}

export default App;
