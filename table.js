import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import './Table.css';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Table = ({ data, itemsPerPage, onPageChange }) => {
  const [sortedField, setSortedField] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');
  const [filterValue, setFilterValue] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [FilteredAndSortedData,setFilteredAndSortedData] = useState("");

  const handleSort = (field) => {
    if (field === sortedField) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortedField(field);
      setSortDirection('asc');
    }
  };

  const handleFilter = (event) => {
    const inputValue = event.target.value;
    setFilterValue(inputValue);
    setCurrentPage(0); // Reset current page when filtering
  
    if (!inputValue) {
      setFilteredAndSortedData(sortedAndFilteredData);
    } else {
      const filteredData = sortedAndFilteredData.filter((item) =>
        item.regId.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredAndSortedData(filteredData);
    }
  };

  const sortedAndFilteredData = [...data]
    .filter((item) => !filterValue || item.status === filterValue)
    .sort((a, b) => {
      if (!sortedField) return 0;
      const aValue = a[sortedField];
      const bValue = b[sortedField];
      if (sortDirection === 'asc') {
        return aValue.localeCompare(bValue);
      } else {
        return bValue.localeCompare(aValue);
      }
    });

  const pageCount = Math.ceil(sortedAndFilteredData.length / itemsPerPage);
  const startIndex = itemsPerPage * currentPage;
  const endIndex = Math.min(startIndex + itemsPerPage, sortedAndFilteredData.length);
  const currentPageData = sortedAndFilteredData.slice(startIndex, endIndex);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
    onPageChange(selected); // Pass the selected page to the parent component if needed
  };

  return (
    <main className="list-queue">
      <section className="table-header">
        <div className="table-heading">
          <h1>Loan History</h1>
        </div>
        <div className="input-group">
          <input
            type="search"
            placeholder="Search Reg ID..."
            onChange={handleFilter}
            value={filterValue}
          />
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </section>
      <section className="table-body">
        <table className="table">
          <thead>
            <tr>
              <th onClick={() => handleSort('name')}>Name</th>
              <th onClick={() => handleSort('regId')}>Reg ID</th>
              <th onClick={() => handleSort('loanAmount')}>Loan Amount</th>
              <th onClick={() => handleSort('loanType')}>Loan Type</th>
              <th onClick={() => handleSort('annualIncome')}>Annual Income</th>
              <th onClick={() => handleSort('requestDate')}>Request Date</th>
              <th onClick={() => handleSort('status')}>Status</th>
            </tr>
          </thead>
          <tbody>
            {currentPageData.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.regId}</td>
                <td>{item.loanAmount}</td>
                <td>{item.loanType}</td>
                <td>{item.annualIncome}</td>
                <td>{item.requestDate}</td>
                <td className={`status-cell status_${item.status.toLowerCase()}`}>
                  <p className={`status_delivered ${item.status.toLowerCase()}`}>
                    {item.status}
                  </p>
                </td>
                <td><FontAwesomeIcon icon={faEdit} /></td>
              </tr>
            ))}
          </tbody>
        </table>
        <ReactPaginate
          previousLabel={''}
          nextLabel={''}
          breakClassName={'break-me'}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName={'pagination'}
          activeClassName={'active'}
          pageCount={pageCount}
        />
      </section>
    </main>
  );
};

export default Table;
