/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoMdMic, IoIosArrowBack } from 'react-icons/io';
import { GoGear } from 'react-icons/go';

const Header = ({ title, count }) => (
  <div className="header">
    <div className="navigation">
      <NavLink to="/"><IoIosArrowBack /></NavLink>
      <span>
        {title}
        &nbsp;capitalisation
      </span>
      <IoMdMic />
      <GoGear />
    </div>
    <div className="metrics-title">
      <h1>
        {title}
      </h1>
      <div className="metrics">
        $
        <span className="count">{count}</span>
        <span>B</span>
      </div>
    </div>
    <div className="stats">
      STATS BY&nbsp;
      {title}
    </div>
  </div>
);

export default Header;
