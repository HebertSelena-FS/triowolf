import React from 'react';
import API from '../components/api/API';
import QuoteHeader from '../components/thoughts/QuoteHeader';
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import "./quote.css"

const QuotePage = () => {
  return (
    <div>
      <Header/>


<header className='beta'>Still in Development</header>
      {/* <QuoteHeader />
      <API /> */}
      <div>
        <Footer/>
      </div>
    </div>    
  );
};

export default QuotePage;