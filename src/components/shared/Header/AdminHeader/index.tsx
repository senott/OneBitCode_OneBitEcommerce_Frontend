import React from 'react';
import { Col } from 'react-bootstrap';
import {
  faCheckSquare,
  faDollarSign,
  faGamepad,
  faLaptop,
  faSignal,
  faTicketAlt,
  faUser,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

import { HeaderContainer, NameText } from './styles';

interface AdminheaderProps {
  name: string;
}

const AdminHeader: React.FC<AdminheaderProps> = ({ name }) => {
  return (
    <HeaderContainer>
      <Col lg={6} xs>
        <Link href="/Admin">
          <a>
            <FontAwesomeIcon
              icon={faSignal}
              color="var(--color-gray-light)"
              className="ml-3"
            />
          </a>
        </Link>

        <Link href="/Admin/Users/List">
          <a>
            <FontAwesomeIcon
              icon={faUser}
              color="var(--color-gray-light)"
              className="ml-3"
            />
          </a>
        </Link>

        <Link href="/Admin/Products/List">
          <a>
            <FontAwesomeIcon
              icon={faGamepad}
              color="var(--color-gray-light)"
              className="ml-3"
            />
          </a>
        </Link>

        <Link href="/Admin/Categories/List">
          <a>
            <FontAwesomeIcon
              icon={faCheckSquare}
              color="var(--color-gray-light)"
              className="ml-3"
            />
          </a>
        </Link>

        <Link href="/Admin/SystemRequirements/List">
          <a>
            <FontAwesomeIcon
              icon={faLaptop}
              color="var(--color-gray-light)"
              className="ml-3"
            />
          </a>
        </Link>

        <Link href="/Admin/Coupons/List">
          <a>
            <FontAwesomeIcon
              icon={faTicketAlt}
              color="var(--color-gray-light)"
              className="ml-3"
            />
          </a>
        </Link>

        <Link href="#">
          <a>
            <FontAwesomeIcon
              icon={faDollarSign}
              color="var(--color-gray-light)"
              className="ml-3"
            />
          </a>
        </Link>
      </Col>

      <Col lg={6} xs>
        <div className="float-right">
          <NameText>{name}</NameText>
          <FontAwesomeIcon
            icon={faUserCircle}
            color="var(--color-gray-light)"
          />
        </div>
      </Col>
    </HeaderContainer>
  );
};

export default AdminHeader;
