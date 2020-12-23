import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { Button, Col, FormControl, InputGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import AuthState from '../../dtos/AuthState';
import User from '../../dtos/User';
import UsersService from '../../services/users';
import { setLoggedUser } from '../../store/modules/auth/reducer';
import BlueBackground from '../shared/BlueBackground';
import { FormContainer } from './styles';

interface LoginProps {
  titlePhrase: string;
  buttonPhrase: string;
  links?: {
    path: string;
    linkText: string;
  }[];
}

const LoginForm: React.FC<LoginProps> = ({
  titlePhrase,
  buttonPhrase,
  links,
}) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const loggedUser: User = useSelector(
    (state: AuthState) => state.auth.loggedUser,
  );

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null);

  useEffect(() => {
    if (loggedUser) {
      setEmail(loggedUser.email);

      if (passwordRef && passwordRef.current) {
        passwordRef.current.focus();
      }
    }
  }, [loggedUser]);

  const handleSubmit = async (evt: React.FormEvent) => {
    evt.preventDefault();

    try {
      const response = await UsersService.signIn({
        email,
        password,
      });
      console.log(response);
      const { id, email: userEmail, name, profile } = response.data.data;

      const user = {
        id,
        name,
        email: userEmail,
        profile,
      };

      dispatch(setLoggedUser(user));

      toast.info('Login realizado com sucesso!');

      router.push(user.profile === 'admin' ? '/Admin/' : '/');
    } catch (error) {
      toast.error('E-mail ou senha inválidos.');
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
                ref={passwordRef}
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

export default LoginForm;
