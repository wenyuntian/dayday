import React, { Component } from 'react';
import headImg from "../../images/head.jpg";
import './style.less';
import "./icon.css"

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-contents">
          <div className="author-infor">
            <div className="author-head">
              <img src={headImg} alt="daydayUp"/>
            </div>
            <div className="author-title">
              <div className="aritcle-count">{this.props.page==="blog" ? "12篇文章" : "12个作品"}</div>
              <h1>dayday的日志</h1>
              <ul className="link-list">
                <li>
                  <a href="#">
                    <i className="icon-github"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-facebook-square"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-wechat"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-envelope-o"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
