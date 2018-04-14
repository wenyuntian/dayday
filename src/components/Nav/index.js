import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Forkme from "../../images/git-hub.png";
import BackImage from "../../images/back.png";
import SliderImage from "../../images/slider.png";
import navList from "../../nav.json";
import './style.less';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { sliderNav: false };
  }

  handClick = () => {
    console.log("aaa")
    this.setState(preState => ({
      sliderNav: !preState.sliderNav,
    }));
  }
  render() {
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
        <img className="slider-icon" src={SliderImage} alt="菜单" onClick={this.handClick} /> 
        <ul 
          className="slider-nav-list" 
          style={this.state.sliderNav ? {left: 0, right: 0} : {}}
        >
          <li>
            <img src={BackImage} alt="close" onClick={this.handClick} />
          </li>
          <li>
            <h3 className="slider-title">导航</h3>
          </li>
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
