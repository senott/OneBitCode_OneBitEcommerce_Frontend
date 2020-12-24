import React from 'react';
import { Col, Row } from 'react-bootstrap';
import AdminHeader from '../Header/AdminHeader';

const AdminComponent: React.FC = ({ children }) => {
  return (
    <Row className="mr-lg-4">
      <Col lg={3}>Menu Lateral</Col>

      <Col lg={9}>
        <div className="d-flex flex-column stick-footer-wrapper container">
          <AdminHeader name="Tibúrcio" />

          <div className="flex-fill text-center">{children}</div>
        </div>
      </Col>
    </Row>
  );
};

export default AdminComponent;
