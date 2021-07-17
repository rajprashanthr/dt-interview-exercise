import React, { useState } from 'react';
import '../../Style/Pagination.css';

const Pagination = ({ pgNumSize, maxDispPgNum = 5, setTablePage }:
  { pgNumSize: number, maxDispPgNum: number, setTablePage: Function }) => {

  const pgNumbers = [];
  const [curPgNum, _setCurPgNum] = useState(1);
  const [page, setPage] = useState(1);

  const setCurPgNum = (pg: number) => {
    _setCurPgNum(pg);
    setTablePage(pg);
  };

  let start = (page * maxDispPgNum) - (maxDispPgNum - 1);
  let end = page * maxDispPgNum;
  const pageSetSize = Math.ceil(pgNumSize / maxDispPgNum);

  if (pgNumSize < maxDispPgNum) {
    start = 1;
    end = pgNumSize;
  }

  if (end > pgNumSize) {
    const diff = end - pgNumSize;
    start = pgNumSize - diff;
    end = pgNumSize;
  }

  for (let i = start; i <= end; i++) {
    pgNumbers.push(
      <span key={i} onClick={() => setCurPgNum(i)} className={i === curPgNum ? 'pgnum active' : 'pgnum'}>
        {i}
      </span>
    )
  }

  return (
    <div className="pagination-container">
      <span
        className={page > 1 ? 'dir' : 'dir disabled'}
        onClick={() => {
          if (page > 1) {
            setCurPgNum((page - 1) * maxDispPgNum);
            setPage(page - 1);
          }
        }}>{'<'}</span>
      {pgNumbers}
      <span
        className={page < pageSetSize ? 'dir' : 'dir disabled'}
        onClick={() => {
          if (page < pageSetSize) {
            setCurPgNum((page * maxDispPgNum) + 1);
            setPage(page + 1);
          }
        }}>{'>'}</span>
    </div >
  )
};

export default Pagination;