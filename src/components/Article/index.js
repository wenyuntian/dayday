import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.less';

class Article extends Component {
  render() {
    return (
      <article className="article">
        <header className="article-header">
          <div className="article-heaer-tag">
            <span className="article-source">原</span>
            <a href="#">JavaScript</a>
            <a href="#">ubuntu</a>
            <a href="#">CSS</a>
          </div>
          <h2 className="article-title">
            程序员偷懒指南 -- 使用 chrome 扩展实现前端资讯推送
          </h2>
          <time className="aiticle-time" dateTime="2018-04-14">2018-04-14</time>
        </header>
        <p className="article-content">
          这不再是一个 实验性的 API ，并且它更符合工程化的理念，目前它已成为 React 一级棒的 API 。 ⚠️ ：大家可以通过 newsletter 获取我最新的资讯，我一般每两周通过邮件发送一次，大家可以通过自己的收件箱获取更多的内容。 React 中的 context API 相信大家都知道吧，可能跟大伙一样，当看到 React…
        </p>
        <div className="look-more">
          <Link to="">阅读全文>></Link>
        </div>
      </article>
    );
  }
}

export default Article;
