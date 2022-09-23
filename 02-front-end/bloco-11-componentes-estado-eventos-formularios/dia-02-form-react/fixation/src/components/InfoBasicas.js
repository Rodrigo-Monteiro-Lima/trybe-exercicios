import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InfoBasicas extends Component {
  render() {
    const {value, handleChange} = this.props;
    const [ name, email ] = value;
    return (
      <fieldset>
            <legend>Informações básicas</legend>
            <label htmlFor="name">
              Nome
              <input id='name' type="text" name='name' value={name} onChange={handleChange} placeholder="Nome"/>
              { !name.length ? ' nome inválido ' : ' ok '}
            </label>

            <label htmlFor="email">
              Email
              <input id='email' type="email" name='email' value={email} onChange={handleChange} placeholder="Email"/>
              { !email.match(/^\S+@\S+$/i)
            ? ' email inválido ' : ' ok ' }
            </label>
          </fieldset>
    );
  }
}

InfoBasicas.propTypes = {
  value: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InfoBasicas;