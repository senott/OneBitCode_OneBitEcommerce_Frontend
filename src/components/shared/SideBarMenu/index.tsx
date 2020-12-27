import React from 'react';
import {
  faCheckSquare,
  faDollarSign,
  faGamepad,
  faLaptop,
  faSignal,
  faSignOutAlt,
  faTicketAlt,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

import Logo from '../Logo';
import { MenuItems, MenuText, SideBarContainer } from './styles';

const SidebarMenu: React.FC = () => {
  return (
    <SideBarContainer>
      <Logo />

      <MenuItems>
        <Link href="/Admin">
          <a>
            <FontAwesomeIcon
              icon={faSignal}
              color="var(--color-gray-light)"
              className="ml-3"
            />
            <MenuText>Painel Inicial</MenuText>
            <hr />
          </a>
        </Link>

        <Link href="/Admin/Users/List">
          <a>
            <FontAwesomeIcon
              icon={faUser}
              color="var(--color-gray-light)"
              className="ml-3"
            />
            <MenuText>Usuários</MenuText>
            <hr />
          </a>
        </Link>

        <Link href="/Admin/Products/List">
          <a>
            <FontAwesomeIcon
              icon={faGamepad}
              color="var(--color-gray-light)"
              className="ml-3"
            />
            <MenuText>Produtos</MenuText>
            <hr />
          </a>
        </Link>

        <Link href="/Admin/Categories/List">
          <a>
            <FontAwesomeIcon
              icon={faCheckSquare}
              color="var(--color-gray-light)"
              className="ml-3"
            />
            <MenuText>Categorias</MenuText>
            <hr />
          </a>
        </Link>

        <Link href="/Admin/SystemRequirements/List">
          <a>
            <FontAwesomeIcon
              icon={faLaptop}
              color="var(--color-gray-light)"
              className="ml-3"
            />
            <MenuText>Requisitos de Sistema</MenuText>
            <hr />
          </a>
        </Link>

        <Link href="/Admin/Coupons/List">
          <a>
            <FontAwesomeIcon
              icon={faTicketAlt}
              color="var(--color-gray-light)"
              className="ml-3"
            />
            <MenuText>Coupons</MenuText>
            <hr />
          </a>
        </Link>

        <Link href="#">
          <a>
            <FontAwesomeIcon
              icon={faDollarSign}
              color="var(--color-gray-light)"
              className="ml-3"
            />
            <MenuText>Financeiro</MenuText>
            <hr />
          </a>
        </Link>

        <Link href="/Admin/#">
          <a>
            <FontAwesomeIcon
              icon={faSignOutAlt}
              color="var(--color-gray-light)"
              className="ml-3"
            />
            <MenuText>Sair</MenuText>
            <hr />
          </a>
        </Link>
      </MenuItems>
    </SideBarContainer>
  );
};

export default SidebarMenu;
