import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoMdMic, IoIosArrowBack } from 'react-icons/io';
import { GoGear } from 'react-icons/go';

const Header = () => (
  <div className="header">
    <div className="navigation">
      <NavLink to="/"><IoIosArrowBack /></NavLink>
      <span>title</span>
      <IoMdMic />
      <GoGear />
    </div>
    <div className="metrics-title">
      <h1>
        All
      </h1>
      <div className="metrics">
        <span className="count">785</span>
        <span>jobs</span>
      </div>
    </div>
    <div className="stats">STATS BY CATEGORY</div>
  </div>
);

export default Header;
