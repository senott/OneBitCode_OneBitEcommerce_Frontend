import React from 'react';
import { Button, Col, FormControl, InputGroup, Row } from 'react-bootstrap';

import BlueBackground from '../shared/BlueBackground';
import { FormContainer } from './styles';

interface LoginProps {
  titlePhrase: string;
  buttonPhrase: string;
}

const LoginForm: React.FC<LoginProps> = ({ titlePhrase, buttonPhrase }) => {
  return (
    <FormContainer>
      <Col lg={{ span: 6, offset: 3 }} md={{ span: 8, offset: 2 }}>
        <BlueBackground>
          <h4>{titlePhrase}</h4>
          <InputGroup className="mt-3">
            <FormControl placeholder="Meu e-mail" />
          </InputGroup>
          <InputGroup className="mt-3">
            <FormControl placeholder="Minha senha" />
          </InputGroup>
          <Button className="btn btn-info mt-3 w-100">{buttonPhrase}</Button>
          <br />
          Esqueci minha senha
        </BlueBackground>
      </Col>
    </FormContainer>
  );
};

export default LoginForm;
