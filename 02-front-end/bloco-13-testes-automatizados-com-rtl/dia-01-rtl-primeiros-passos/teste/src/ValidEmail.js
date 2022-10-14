import React from 'react';
import PropTypes from 'prop-types';

const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
};

const ValidEmail = (props) => {
  const { email, send } = props;
  const green = { color:'green' };
  const red = { color:'red' };
  return (
    <div>
      <h2 data-testid="id-email-user">{`Valor: ${email}`}</h2>
      {send && <h3 style={verifyEmail(email) ? green : red} data-testid="validation">{(verifyEmail(email) ? 'Email Válido' : 'Email Inválido')}</h3>}
    </div>
  );
};

ValidEmail.propTypes = {
  email: PropTypes.string.isRequired,
  send: PropTypes.bool.isRequired,
};

export default ValidEmail;
