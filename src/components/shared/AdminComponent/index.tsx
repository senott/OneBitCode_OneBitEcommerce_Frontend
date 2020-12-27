import React from 'react';
import { Col, Row } from 'react-bootstrap';

import AdminFooter from '../Footer/AdminFooter';
import AdminHeader from '../Header/AdminHeader';
import SidebarMenu from '../SideBarMenu';

const AdminComponent: React.FC = ({ children }) => {
  return (
    <Row className="mr-lg-4">
      <Col lg={3}>
        <SidebarMenu />
      </Col>

      <Col lg={9}>
        <div className="d-flex flex-column stick-footer-wrapper container min-vh-100">
          <AdminHeader name="Tibúrcio" />

          <div className="flex-even text-center">{children}</div>

          <AdminFooter />
        </div>
      </Col>
    </Row>
  );
};

export default AdminComponent;
