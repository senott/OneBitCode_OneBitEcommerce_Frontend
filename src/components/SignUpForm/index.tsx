import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Button, Col, FormControl, InputGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import AuthState from '../../dtos/AuthState';
import User from '../../dtos/User';
import UsersService from '../../services/users';
import { setLoggedUser } from '../../store/modules/auth/reducer';
import BlueBackground from '../shared/BlueBackground';
import { FormContainer } from './styles';

interface SignUpProps {
  titlePhrase: string;
  buttonPhrase: string;
  links?: {
    path: string;
    linkText: string;
  }[];
}

const SignUpForm: React.FC<SignUpProps> = ({
  titlePhrase,
  buttonPhrase,
  links,
}) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const loggedUser: User = useSelector(
    (state: AuthState) => state.auth.loggedUser,
  );

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleSubmit = async (evt: React.FormEvent) => {
    evt.preventDefault();

    if (password !== passwordConfirmation) {
      toast.error('A senha e a confirmação da senha devem ser iguais.');
      return;
    }

    try {
      await UsersService.signUp({
        name,
        email,
        password,
        password_confirmation: passwordConfirmation,
      });

      toast.success(
        'registro realizado com sucesso! Para continuar faça seu login.',
      );

      dispatch(
        setLoggedUser({
          id: 0,
          name,
          email,
          profile: 'client',
        }),
      );

      setName('');
      setEmail('');
      setPassword('');
      setPasswordConfirmation('');
    } catch (error) {
      if (error.response.data.errors) {
        toast.warning(error.response.data.errors.full_messages[0]);
      }
      console.log(error.response);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormContainer>
        <Col lg={{ span: 6, offset: 3 }} md={{ span: 8, offset: 2 }}>
          <BlueBackground>
            <h4>{titlePhrase}</h4>
            <InputGroup className="mt-3">
              <FormControl
                placeholder="Meu nome"
                value={name}
                type="text"
                onChange={e => setName(e.target.value)}
                required
              />
            </InputGroup>
            <InputGroup className="mt-3">
              <FormControl
                placeholder="Meu e-mail"
                value={email}
                type="email"
                onChange={e => setEmail(e.target.value)}
                required
              />
            </InputGroup>
            <InputGroup className="mt-3">
              <FormControl
                placeholder="Minha senha"
                value={password}
                type="password"
                onChange={e => setPassword(e.target.value)}
                required
              />
            </InputGroup>
            <InputGroup className="mt-3">
              <FormControl
                placeholder="Confirmação senha"
                value={passwordConfirmation}
                type="password"
                onChange={e => setPasswordConfirmation(e.target.value)}
                required
              />
            </InputGroup>
            <Button type="submit" className="btn btn-info mt-3 w-100">
              {buttonPhrase}
            </Button>
            {links &&
              links.map(link => {
                return (
                  <p>
                    <Link href={link.path}>{link.linkText}</Link>
                  </p>
                );
              })}
          </BlueBackground>
        </Col>
      </FormContainer>
    </form>
  );
};

export default SignUpForm;
