import React from 'react';

const list = ['Ler', 'Estudar', 'Ver vídeo aula', 'Tirar dúvidas']

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>
          Lista de atividades
        </h3>
        <ul> 
          {list.map((item) => Task(item))}
        </ul>
      </div>
    );
  }
}

export default App;