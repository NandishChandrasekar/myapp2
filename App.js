import React, { useState } from 'react';
import './App.css';
import Table from './table';


const App = () => {
  const data = [
    {
      name: 'John Doe',
      regId: 'REG001',
      loanAmount: '$10,000',
      loanType: 'Personal Loan',
      annualIncome: '$50,000',
      requestDate: '2023-08-15',
      status: 'Pending',
    },
    {
      name: 'Alice Smith',
      regId: 'REG002',
      loanAmount: '$15,000',
      loanType: 'Mortgage',
      annualIncome: '$75,000',
      requestDate: '2023-08-16',
      status: 'Approved',
    },
    {
      name: 'Bob Johnson',
      regId: 'REG003',
      loanAmount: '$5,000',
      loanType: 'Auto Loan',
      annualIncome: '$40,000',
      requestDate: '2023-08-17',
      status: 'Rejected',
    },
    {
      name: 'Eva Williams',
      regId: 'REG004',
      loanAmount: '$8,000',
      loanType: 'Education Loan',
      annualIncome: '$30,000',
      requestDate: '2023-08-18',
      status: 'Pending',
    },
    {
      name: 'David Anderson',
      regId: 'REG005',
      loanAmount: '$20,000',
      loanType: 'Home Loan',
      annualIncome: '$60,000',
      requestDate: '2023-08-19',
      status: 'Approved',
    },
    {
      name: 'Linda Martinez',
      regId: 'REG006',
      loanAmount: '$12,000',
      loanType: 'Personal Loan',
      annualIncome: '$45,000',
      requestDate: '2023-08-20',
      status: 'Pending',
    },
    {
      name: 'Michael Brown',
      regId: 'REG007',
      loanAmount: '$7,500',
      loanType: 'Auto Loan',
      annualIncome: '$42,000',
      requestDate: '2023-08-21',
      status: 'Approved',
    },
    {
      name: 'Sophia Davis',
      regId: 'REG008',
      loanAmount: '$18,000',
      loanType: 'Mortgage',
      annualIncome: '$90,000',
      requestDate: '2023-08-22',
      status: 'Pending',
    },
    {
      name: 'James Wilson',
      regId: 'REG009',
      loanAmount: '$9,000',
      loanType: 'Auto Loan',
      annualIncome: '$35,000',
      requestDate: '2023-08-23',
      status: 'Rejected',
    },
    {
      name: 'Olivia Moore',
      regId: 'REG010',
      loanAmount: '$25,000',
      loanType: 'Personal Loan',
      annualIncome: '$55,000',
      requestDate: '2023-08-24',
      status: 'Approved',
    },
    // Add more data entries as needed
  ];

  const itemsPerPage = 5; // Number of items to show per page
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const goToPrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div className="app">
      <Table
        data={currentData}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
      <div className="pagination-buttons">
        <button
          onClick={goToPrevPage}
          disabled={currentPage === 0}
        >
          Previous
        </button>
        <button
          onClick={goToNextPage}
          disabled={endIndex >= data.length}
        >
          Next
        </button>
      </div>
      <div className="page-info">
        Showing {startIndex + 1} to {Math.min(endIndex, data.length)} of {data.length} entries
      </div>
    </div>
  );
};

export default App;
