import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './Header';

const Main = () => (
  <div>
    <Header title="Remote" count="758" />
    <ul className="categories">
      <li><NavLink to="/details">Finance</NavLink></li>
    </ul>
  </div>
);

export default Main;
