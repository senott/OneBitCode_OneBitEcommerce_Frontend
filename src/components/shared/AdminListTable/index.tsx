import React from 'react';
import Button from '../Button';
import { Container, StyledTable } from './styles';

interface AdminListTableProps {
  firstTitle: string;
  secondTitle?: string;
  thirdTitle?: string;
  fourthTitle?: string;
  fifthTitle?: string;
  sixthTitle?: string;
}

const AdminListTable: React.FC<AdminListTableProps> = ({
  firstTitle,
  secondTitle,
  thirdTitle,
  fourthTitle,
  fifthTitle,
  sixthTitle,
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

      <div className="pagination justify-content-end">
        <div className="pagination">
          <Button action="<" type="blue" />
          <Button action="1" type="blue" />
          <Button action="2" type="blue" />
          <Button action="3" type="blue" />
          ...
          <Button action="31" type="blue" />
          <Button action=">" type="blue" />
        </div>
      </div>
    </Container>
  );
};

export default AdminListTable;
