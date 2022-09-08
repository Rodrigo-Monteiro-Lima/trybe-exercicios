import React from 'react';
import Image from './Image';
import img from './img.jpg';

class App extends React.Component {
  render() {
    return (
      <div>
        <Image source={img} alternativeText='Cute cat staring'/>
      </div>
    );
  }
}

export default App;
