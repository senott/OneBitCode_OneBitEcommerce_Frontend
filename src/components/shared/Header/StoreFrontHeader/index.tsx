import React from 'react';
import {
  faSearch,
  faShoppingCart,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, FormControl, InputGroup, Row } from 'react-bootstrap';

import Logo from '../../Logo';
import { Container } from './styles';

const StoreFrontHeader: React.FC = () => {
  return (
    <Container>
      <Col md={8} className="mt-2">
        <Logo />
      </Col>
      <Col md={4} className="mt-2 text-center">
        <Row>
          <Col md={6} className="mb-4 mb-md-0">
            <InputGroup>
              <FormControl placeholder="Pesquisar produto" />
            </InputGroup>
          </Col>

          <Col md={6}>
            <Row>
              <Col md={4} xs={4}>
                <FontAwesomeIcon
                  icon={faSearch}
                  color="var(--color-gray-light)"
                />
              </Col>
              <Col md={4} xs={4}>
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  color="var(--color-gray-light)"
                />
              </Col>
              <Col md={4} xs={4}>
                <FontAwesomeIcon
                  icon={faUserCircle}
                  color="var(--color-gray-light)"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Container>
  );
};

export default StoreFrontHeader;
