import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Description extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <fieldset>
        <legend>Descrição</legend>
        <label htmlFor="textarea" className='description'>
          <textarea name="description" id="textarea" cols="30" rows="10" value={value} onChange={handleChange}></textarea>
          { !value.length ? ' campo vazio ' : ' ok '}
        </label>
      </fieldset>
    );
  }
}

Description.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};


export default Description;