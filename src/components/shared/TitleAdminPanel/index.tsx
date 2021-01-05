import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import SearchAndIcon from './SearchAndIcon';
import TitleAndPath from './TitleAndPath';

import { TitleAndPathCol } from './styles';

interface TitleAdminPanelProps {
  title: string;
  path: string;
  icon?: IconProp;
}

const TitleAdminPanel: React.FC<TitleAdminPanelProps> = ({
  title,
  path,
  icon,
}) => {
  return (
    <Row className="mt-4">
      {icon ? (
        <>
          <TitleAndPathCol lg={6} xs={4}>
            <Col lg={{ span: 4, offset: 2 }} xs={8}>
              <SearchAndIcon icon={icon} />
            </Col>
          </TitleAndPathCol>
        </>
      ) : (
        <TitleAndPath title={title} path={path} />
      )}
    </Row>
  );
};

export default TitleAdminPanel;
