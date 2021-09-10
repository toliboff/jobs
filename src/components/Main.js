import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BiRightArrowCircle } from 'react-icons/bi';
import Header from './Header';
import { fetchCompanies } from '../redux/companies/companies';
import images from '../assets/images';
import Filter from './Filter';

const Main = () => {
  const dispatch = useDispatch();

  const selectMarket = (market) => {
    dispatch(fetchCompanies(market));
  };

  const state = useSelector((state) => state.stockmarketReducer);

  const [marketState, setMarketState] = useState(state.markets);
  useEffect(() => {
    setMarketState(state.markets);
  }, [state]);

  return (
    <div data-testid="main-component">
      <Header title="market" count={state.totalCap} filter="STOCK" />
      <Filter state={state.markets} markets={marketState} setMarket={setMarketState} />
      <ul className="categories">
        {marketState && marketState.map((market, index) => (
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
