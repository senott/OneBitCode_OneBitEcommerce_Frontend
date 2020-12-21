import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Container } from '../../Header/StoreFrontHeader/styles';
import { Footer, Line, TextFooter } from './styles';
import Logo from '../../Logo';
import Image from 'next/image';

const StoreFrontFooter: React.FC = () => {
  return (
    <Footer>
      <Col md={{ span: 8, offset: 2 }}>
        <Row>
          <Col lg={7} md={12}>
            <Row>
              <Col lg={4} md={12} className="mb-4 mb-lg-0">
                Acompanhe-nos
              </Col>

              <Col lg={7} md={12} className="mb-4 mb-lg-0">
                <Row>
                  <Col lg={1} xs={2}>
                    <FontAwesomeIcon icon={faFacebookF} />
                  </Col>
                  <Col lg={1} xs={2}>
                    <FontAwesomeIcon icon={faInstagram} />
                  </Col>
                  <Col lg={1} xs={2}>
                    <FontAwesomeIcon icon={faYoutube} />
                  </Col>
                  <Col lg={1} xs={2}>
                    <FontAwesomeIcon icon={faTwitter} />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>

          <Col lg={{ span: 4, offset: 0 }} xs={{ span: 8, offset: 2 }}>
            <Row>
              <Col>Contato</Col>
              <Col>Sobre</Col>
              <Col>Blog</Col>
              <Col>FAQ</Col>
            </Row>
          </Col>
        </Row>

        <Line />

        <Row>
          <Col lg={{ span: 2, offset: 0 }} xs={{ span: 8, offset: 2 }}>
            <Logo />
          </Col>
          <Col lg={{ span: 6, offset: 1 }} xs={12}>
            <TextFooter>onebitcode.com - contato@onebitcode.com</TextFooter>
          </Col>
          <Col lg={{ span: 2, offset: 1 }} xs={{ span: 6, offset: 3 }}>
            <Image
              src="/assets/images/logo-bootcamp.png"
              alt="Logo bootcamp"
              width={240}
              height={70}
            />
          </Col>
        </Row>
      </Col>
    </Footer>
  );
};

export default StoreFrontFooter;
