import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './ValidEmail';

describe('Testa se o email é válido', () => {
  it('Testando um componente, caso o email seja válido.', () => {
    const EMAIL_USER = 'email@email.com';
    render(<ValidEmail email={ EMAIL_USER } send={true}/>);
    const isValid = screen.getByText('Email Válido');
    expect(isValid).toBeInTheDocument();
  });
  it('Testando um componente, caso o email seja inválido.', () => {
    const EMAIL_USER = 'emailerrado';
    render(<ValidEmail email={ EMAIL_USER } send={true}/>);
    const isValid = screen.getByText('Email Inválido');
    expect(isValid).toBeInTheDocument();
  });
  it('Testa se não aparece o texto de validação.', () => {
    render(<ValidEmail email="teste" send={false}/>)
    const text = screen.queryByTestId('validation');
    expect(text).not.toBeInTheDocument();
  })
  it('Testa se o texto tem a cor verde ao ser digitado um e-mail válido.', () => {  
    render(<ValidEmail email='teste@teste.com'send={true} />);
    const text = screen.getByTestId('validation');
    expect(text).toHaveStyle(`color: green`)
  });  
  it('Testa se o texto tem a cor vermelha ao ser digitado um e-mail inválido.', () => {  
    render(<ValidEmail email='teste'send={true} />);
    const text = screen.getByTestId('validation');
    expect(text).toHaveStyle(`color: red`)
  });  
})
