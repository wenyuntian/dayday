import React, { Component } from 'react';
import moment from "moment";
import { Link } from 'react-router-dom';
import './style.less';

class Article extends Component {

  render() {
    const { title, tag, origin, summary, time, url } = this.props.article;
    return (
      <article className="article">
        <header className="article-header">
          <div className="article-heaer-tag">
            <span className="article-source">{Boolean(origin) ? "原" : "译"}</span>
            { tag.map((item, index) => {
              return <a href="" key={index}>{ item }</a>
            }) }
          </div>
          <Link to={ url }>
            <h2 className="article-title">{ title }</h2>
          </Link>
          <time className="aiticle-time" dateTime={ moment(time).format("YYYY-MM-DD") }>{ moment(time).format("YYYY-MM-DD") }</time>
        </header>
        <p className="article-content">
          {summary.length>125 ? summary.slice(0, 125)+"..." : summary}
        </p>
        <div className="look-more">
          <Link to={ url }>阅读全文>></Link>
        </div>
      </article>
    );
  }
}

export default Article;
