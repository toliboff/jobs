import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';

const Details = () => {
  const state = useSelector((state) => state.companiesReducer);
  return (
    <div>
      <Header title="company" count={state.totalCap} />
      <ul className="companies">
        {state.companies.map((company) => (
          <li key={company.symbol}>
            <span>{company.name}</span>
            <div>
              $
              {company.marketCap}
              <span>B</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Details;
