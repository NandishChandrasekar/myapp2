import React from 'react';
import './LoanList.css'; // Make sure to create a corresponding CSS file

const loanTypes = [
  {
    id: 1,
    name: 'Personal Loan',
    description: 'A loan for personal expenses, often unsecured.',
    amount: '$10,000',
    interest: '8%',
    status: 'Approved',
  },
  // Add more loan types as needed
];

const LoanCard = ({ id, name, description, amount, interest, status }) => (
  <div className="card">
    <div className="card-content">
      <h2>{name}</h2>
      <p>{description}</p>
      <div className="loan-details">
        <p className="bold-text">Loan Amount:</p>
        <p>{amount}</p>
        <p className="bold-text">Interest Rate:</p>
        <p>{interest}</p>
        <p className="bold-text">Status:</p>
        <p className={status === 'Pending' ? 'pending-status' : (status === 'Approved' ? 'approved-status' : 'rejected-status')}>{status}</p>
      </div>
    </div>
  </div>
);

const LoanList = () => (
  <div className="container">
    <div className="nav-bar-placeholder" /> {/* Space for nav bar */}
    <div className="loan-list">
      {loanTypes.map(loan => (
        <LoanCard
          key={loan.id}
          id={loan.id}
          name={loan.name}
          description={loan.description}
          amount={loan.amount}
          interest={loan.interest}
          status={loan.status}
        />
      ))}
    </div>
  </div>
);

export default LoanList;
