import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Forkme from "../../images/git-hub.png";
import navList from "../../nav.json";
import './style.less';

class Nav extends Component {
  render() {
    console.log(navList)
    return (
      <div className="nav-bar">
        <a href="https://github.com/wenyuntian">
          <img className="fork-me" src={ Forkme } alt="fork me" />
        </a>
        <ul className="nav-list">
          {navList.map((item, index) => (
            <Link to={item.href}  key={index} >
              <li>{item.title}</li>
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}

export default Nav;
