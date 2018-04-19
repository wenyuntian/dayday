import React, { Component } from 'react';
import imgSrc from "../../images/header.png"
import './style.less';

class WorkItem extends Component {
  render() {
    return (
      <article className="work-item">
        <a className="work-thumb" href="#">
          <img src={imgSrc} alt="作品缩略图" />
        </a>
        <div className="work-infor">
          <ul className="work-tag">
            <li><a href="#">CSS</a></li>
            <li><a href="#">ubuntu</a></li>
            <li><a href="#">前端</a></li>
            <li><a href="#">工具</a></li>
          </ul>
          <h2 className="work-title"><a href="#">程序员偷懒指南 -- 使用 chrome 扩展实现前端资讯推送</a></h2>
          <div className="work-link">
            <a className="preview" href="#">预览</a>
            <a className="preview" href="#">源码</a>
          </div>
        </div>
      </article>
    );
  }
}

export default WorkItem;
