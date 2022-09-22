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
   }), () => {
    console.log(this.buttonColor(this.state.numeroDeCliques));
  });
  }
  
  handleClick1() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques1: estadoAnterior.numeroDeCliques1 + 1,
     }), () => {
      console.log(this.buttonColor(this.state.numeroDeCliques1));
    });
  }
  
  handleClick2() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques2: estadoAnterior.numeroDeCliques2 + 1,
     }), () => {
      console.log(this.buttonColor(this.state.numeroDeCliques2));
    });
  }

  buttonColor(num) {
    if (num % 2 === 0) {
      return 'green'
    } return 'white'
  }

  render() {
    return (
      <div>
          <button onClick={ this.handleClick } style={ { backgroundColor: this.buttonColor(this.state.numeroDeCliques) } }>{ this.state.numeroDeCliques }</button>
          <button onClick={ this.handleClick1 } style={ { backgroundColor: this.buttonColor(this.state.numeroDeCliques1) } }>{ this.state.numeroDeCliques1 }</button>
          <button onClick={ this.handleClick2 } style={ { backgroundColor: this.buttonColor(this.state.numeroDeCliques2) } }>{ this.state.numeroDeCliques2 }</button>
      </div>
    );
  }
}

export default App;
