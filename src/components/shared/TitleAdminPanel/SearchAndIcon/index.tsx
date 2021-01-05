import React from 'react';
import { Col, InputGroup, Row } from 'react-bootstrap';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from '../../Button';
import { Input } from './styles';

interface SearchAndIconProps {
  icon: IconProp;
}

const SearchAndIcon: React.FC<SearchAndIconProps> = ({ icon }) => {
  return (
    <Row>
      <Col lg={9} xs>
        <Row>
          <Col lg={9} xs={10}>
            <InputGroup>
              <Input placeholder="Pesquisar" />
            </InputGroup>
          </Col>

          <Col lg={2} className="mt-1" style={{ cursor: 'pointer' }}>
            <FontAwesomeIcon
              icon={faSearch}
              size="lg"
              color="var(--color-gray-light)"
              className="float-left"
            />
          </Col>
        </Row>
      </Col>

      <Col lg={2} xs={{ span: 3 }}>
        <Button icon={icon} type="blue" />
      </Col>
    </Row>
  );
};

export default SearchAndIcon;
