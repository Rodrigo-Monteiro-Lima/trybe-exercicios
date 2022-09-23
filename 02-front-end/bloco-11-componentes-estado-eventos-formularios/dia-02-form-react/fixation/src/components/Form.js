import React, { Component } from 'react';
import InfoBasicas from './InfoBasicas';
import Description from './Description';

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      modality: '',
      description: '',
      checkbox: false,
      file: '',
      formularioComErros: true,
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleError() {
    const { name, email, checkbox, description } = this.state;

    const errorCases = [
      !name.length,
      !email.match(/^\S+@\S+$/i),
      !description.length,
      !checkbox,
    ];

    const formularioPreenchido = errorCases.every((error) => error !== true);

    this.setState({
      formularioComErros: !formularioPreenchido,
    });
  }

  handleChange ({target}) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value
    }, () => { this.handleError(); });
  }
  render() {
    return (
      <>
        <h1>Formulário</h1>
        <form>
          <InfoBasicas value={[this.state.name, this.state.email]} handleChange={this.handleChange}/>

          <label htmlFor="select">
            Escolha sua modalidade
            <select name="modality" id="select" onChange={ this.handleChange }
              value={ this.state.modality }>
              <option value="" disabled>--</option>
              <option value="soccer">Futebol</option>
              <option value="voleiball">Vôlei</option>
              <option value="basqueteball">Basquete</option>
            </select>
          </label>

          <label htmlFor="check"> Auxilio alimentação
            <input type="checkbox" name='checkbox' id='check' value={this.state.checkbox} onChange={this.handleChange}/>
          </label>

          <Description value={this.state.description} handleChange={this.handleChange} />

          <label htmlFor="file">Anexar documentos:
          <input type="file" name='file' value={this.state.file} onChange={this.handleChange}/>
          </label>
        </form>
        { this.state.formularioComErros
          ? <span style={ { color: 'red' } }>Preencha todos os campos</span>
          : <span style={ { color: 'green' } }>Todos campos foram preenchidos</span> }      
      </>
    );
  }
}

export default Form;