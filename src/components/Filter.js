import React from 'react';

// eslint-disable-next-line react/prop-types
const Filter = ({ state, setMarket }) => {
  const filterMarket = (market) => {
    // eslint-disable-next-line react/prop-types
    const filtered = state.filter((marketName) => marketName.name
      .startsWith(market));
    setMarket(filtered);
  };

  return (
    <input type="text" className="filter-input" placeholder="filter by market" onInput={(e) => filterMarket(e.target.value.toUpperCase())} />
  );
};

export default Filter;
