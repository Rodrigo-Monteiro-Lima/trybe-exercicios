import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      people: [],
    }
  }

  async componentDidMount() {
      const response = await fetch( "https://api.randomuser.me/");
      const data = await response.json();
      this.setState({
        people: data.results,
        loading: false,
      })
  };

  shouldComponentUpdate(_nextProps, nextState) {
    if (nextState.people[0].dob.age <= 50) {
      return true;
    } return false;
   };

  render() {
    const loadingElement = <div style={{textAlign: 'center',}}>Carregando...</div>;
    const { people, loading } = this.state;
    return (
      <div>{loading ? loadingElement :   people
        .map(({id, picture: {medium}, name: {title, first, last}, email, dob: {age}}) => 
        <div key={id}>
          <img src={medium} alt={first} />
          <p>{`Nome: ${title}. ${first} ${last}`}</p>
          <p>{`Email: ${email}`}</p>
          <p>{`Idade: ${age}`}</p>
        </div>
        )}</div>                                         
    );
  }
}

export default App;