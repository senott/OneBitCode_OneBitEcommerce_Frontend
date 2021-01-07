import React, { useEffect, useState } from 'react';
import { Col, InputGroup, Row } from 'react-bootstrap';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import {
  setSearch as setSearchRedux,
  clearSearch,
} from '../../../../store/modules/admin/shared/search/reducer';

import Button from '../../Button';
import { Input } from './styles';
import Link from 'next/link';

interface SearchAndIconProps {
  icon: IconProp;
  newPath: string;
}

const SearchAndIcon: React.FC<SearchAndIconProps> = ({ icon, newPath }) => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(clearSearch());
  }, []);

  const handleSearch = (): void => {
    router.replace(router.pathname, '?page=1');
    dispatch(setSearchRedux(search));
  };

  return (
    <Row>
      <Col lg={9} xs>
        <Row>
          <Col lg={9} xs={10}>
            <InputGroup>
              <Input
                placeholder="Pesquisar"
                value={search}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSearch(e.target.value)
                }
                onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
                  if (e.key.toLocaleLowerCase() === 'enter') {
                    handleSearch();
                  }
                }}
              />
            </InputGroup>
          </Col>

          <Col lg={2} className="mt-1" style={{ cursor: 'pointer' }}>
            <FontAwesomeIcon
              icon={faSearch}
              size="lg"
              color="var(--color-gray-light)"
              className="float-left"
              onClick={handleSearch}
            />
          </Col>
        </Row>
      </Col>

      <Col lg={2} xs={{ span: 3 }}>
        <Link href={newPath}>
          <a>
            <Button icon={icon} buttonType="blue" />
          </a>
        </Link>
      </Col>
    </Row>
  );
};

export default SearchAndIcon;
