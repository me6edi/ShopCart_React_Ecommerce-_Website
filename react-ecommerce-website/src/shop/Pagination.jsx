import React from 'react';

const Pagination = ({ productsPerPage, totalProducts, paginate, activePage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className='default-pagination lab-ul'>
      {pageNumbers.map((number) => (
        <li key={number} className={`page-item ${number === activePage ? "bg-warning" : ""}`}>
          <button bg-transparent border px-3 py-1 rounded onClick={() => paginate(number)} className='bg-transparent'>
            {number}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
