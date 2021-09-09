import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';

const Details = () => {
  const state = useSelector((state) => state.companiesReducer);
  return (
    <div>
      <Header title="Company" count={state.totalCap} />
      <ul className="companies">
        {state.companies.map((company) => (
          <li key={company.name}>
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
