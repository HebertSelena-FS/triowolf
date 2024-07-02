import React from 'react';
import API from '../components/api/API';
import QuoteHeader from '../components/thoughts/QuoteHeader';

const QuotePage = () => {
  return (
    <>
      <QuoteHeader />
      <API />
    </>    
  );
};

export default QuotePage;