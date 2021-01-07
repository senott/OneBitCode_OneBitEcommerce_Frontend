import React from 'react';

import Meta from '../../../dtos/Meta';
import Pagination from '../Pagination';
import { Container, StyledTable } from './styles';

interface AdminListTableProps {
  firstTitle: string;
  secondTitle?: string;
  thirdTitle?: string;
  fourthTitle?: string;
  fifthTitle?: string;
  sixthTitle?: string;
  meta: Meta;
}

const AdminListTable: React.FC<AdminListTableProps> = ({
  firstTitle,
  secondTitle,
  thirdTitle,
  fourthTitle,
  fifthTitle,
  sixthTitle,
  meta,
  children,
}) => {
  return (
    <Container>
      <StyledTable borderless={true} hover={true} responsive={true}>
        <thead>
          <tr>
            <th>{firstTitle}</th>
            {secondTitle && <th>{secondTitle}</th>}
            {thirdTitle && <th>{thirdTitle}</th>}
            {fourthTitle && <th>{fourthTitle}</th>}
            {fifthTitle && <th>{fifthTitle}</th>}
            {sixthTitle && <th>{sixthTitle}</th>}
            <th colSpan={2}>Ações</th>
          </tr>
        </thead>

        <tbody>{children}</tbody>
      </StyledTable>

      <Pagination {...meta} />
    </Container>
  );
};

export default AdminListTable;
