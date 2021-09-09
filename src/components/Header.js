import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IoMdMic, IoIosArrowBack } from 'react-icons/io';
import { GoGear } from 'react-icons/go';
import images from '../assets/images';

const Header = ({ title, count, filter }) => (
  <div className="header">
    <div className="navigation">
      <NavLink to="/"><IoIosArrowBack className="controls" /></NavLink>
      <span>
        {title}
        &nbsp;capitalisation
      </span>
      <div>
        <IoMdMic className="controls" />
        <GoGear className="controls" />
      </div>
    </div>
    <div
      className="metrics-title"
      style={{ backgroundImage: `url('${images[filter]}')` }}
    >
      <div />
      <div>
        <h1>
          {filter}
        </h1>
        <div className="metrics">
          $
          <span className="count">{count}</span>
          <span>B</span>
        </div>
      </div>
    </div>
    <div className="stats">
      STATS BY&nbsp;
      {title}
    </div>
  </div>
);

export default Header;

Header.propTypes = {
  title: PropTypes.string,
  count: PropTypes.string,
  filter: PropTypes.string,
};

Header.defaultProps = {
  title: 'company',
  count: '0',
  filter: 'Stock',
};
