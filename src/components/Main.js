import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BiRightArrowCircle } from 'react-icons/bi';
import Header from './Header';
import { fetchCompanies } from '../redux/companies/companies';
import images from '../assets/images';

const Main = () => {
  const dispatch = useDispatch();

  const selectMarket = (market) => {
    dispatch(fetchCompanies(market));
  };

  const state = useSelector((state) => state.stockmarketReducer);
  return (
    <div data-testid="main-component">
      <Header title="market" count={state.totalCap} filter="STOCK" />
      <ul className="categories">
        {state.markets.map((market, index) => (
          <li
            key={market.name}
            className={index % 2 === 0 ? 'category' : 'category dark-bg'}
            style={{ backgroundImage: `url('${images[market.name]}')` }}
          >
            <NavLink to="/details" onClick={() => selectMarket(market.name)} className="link">
              <BiRightArrowCircle />
              <div className="exchange">
                <h2>{market.name}</h2>
                <div className="marketCap">
                  $
                  {market.marketCap}
                  B
                </div>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
