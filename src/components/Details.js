import React from 'react';
import { useSelector } from 'react-redux';
import { BiRightArrowCircle } from 'react-icons/bi';
import Header from './Header';

const Details = () => {
  const state = useSelector((state) => state.companiesReducer);
  return (
    <div data-testid="details-component">
      <Header title="company" count={String(state.totalCap)} filter={state.filter} />
      <ul className="companies">
        {state.companies.map((company) => (
          <li key={company.symbol} className="company">
            <span>{company.name}</span>
            <div className="companyCap">
              $
              {company.marketCap}
              <span>&nbsp;billion</span>
              <BiRightArrowCircle className="arrow" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Details;
