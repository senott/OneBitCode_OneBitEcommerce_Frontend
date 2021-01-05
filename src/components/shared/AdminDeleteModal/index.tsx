import { faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

import Button from '../Button';
import { StyledModal, StyledModalBody } from './styles';

interface AdminDeleteModalProps {
  show: boolean;
  handleClose: (success?: boolean) => void;
  target: string;
}

const AdminDeleteModal: React.FC<AdminDeleteModalProps> = ({
  show,
  handleClose,
  target,
}) => {
  return (
    <StyledModal show={show} onHide={handleClose} animation={true}>
      <StyledModalBody>
        Tem certeza que deseja excluir este {target}?
        <Row>
          <Col lg={6} xs>
            <div onClick={() => handleClose(true)}>
              <Button action="Excluir" type="red" icon={faTrash} />
            </div>
          </Col>

          <Col lg={6} xs>
            <div onClick={() => handleClose(true)}>
              <Button action="Cancelar" type="blue" icon={faTimes} />
            </div>
          </Col>
        </Row>
      </StyledModalBody>
    </StyledModal>
  );
};

export default AdminDeleteModal;
