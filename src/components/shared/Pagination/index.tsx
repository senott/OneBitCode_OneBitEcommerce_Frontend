import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Meta from '../../../dtos/Meta';
import PaginationService from '../../../util/PaginationService';
import Button from '../Button';

const Pagination: React.FC<Meta> = ({ page, length, total, totalPages }) => {
  const [pagination, setPagination] = useState(['1']);
  const router = useRouter();

  useEffect(() => {
    setPagination(PaginationService.execute(totalPages, page));
  }, [totalPages]);

  const handlePageClick = (page: string): void => {
    router.push(`${router.pathname}?page=${page}`);
  };

  const handleNextPageClick = (): void => {
    if (page < totalPages) {
      router.push(`${router.pathname}?page=${page + 1}`);
    }
  };

  const handlePreviousPageClick = (): void => {
    if (page > 1) {
      router.push(`${router.pathname}?page=${page - 1}`);
    }
  };

  return (
    <div className="pagination justify-content-end">
      <div className="pagination">
        <Button
          action="<"
          buttonType="blue"
          onClick={() => handlePreviousPageClick()}
        />

        {pagination.map((item, index) =>
          item === '...' ? (
            item
          ) : (
            <Button
              key={index}
              action={item}
              buttonType="blue"
              disabled={page === Number(item)}
              onClick={() => handlePageClick(item)}
            />
          ),
        )}

        <Button
          action=">"
          buttonType="blue"
          onClick={() => handleNextPageClick()}
        />
      </div>
    </div>
  );
};

export default Pagination;
