import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Utils from "../../utils/utils";
import ReactMarkdown from 'react-markdown';
import Markdown from "../../components/Markdown";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import headerImg from "../../images/header.png";
import authorImg from "../../images/head.jpg";
import './style.less';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: "",
      tagList: ""
    }
  }

  componentDidMount() {
    this.getArticle().then((v) => {
      this.setState({
        article: v
      })
    })
  }

  getArticle = async () => { 
    return await Utils.getData("/article.md");
  }

  render() {
    return (
      <div className="article-page">
        <Nav />
        <div className="article-header">
          <div className="article-header-bg" style={ {backgroundImage: `url(${headerImg})`}}></div>
          <div className="article-header-title">
            <div className="aritcle-tag">
              <span className="article-source">原</span>
              <a href="#">JavaScript</a>
              <a href="#">ubuntu</a>
              <a href="#">CSS</a>
            </div>
            <h1>程序员偷懒指南 -- 使用 chrome 扩展实现前端资讯推送</h1>
            
          </div>
          <div className="article-header-author">
            <div className="author-infor">
              <div>
                <Link to="#" >daydayUp的日志</Link>
              </div>
              <time className="aiticle-time" dateTime="2018-04-14">2018-04-14</time>
            </div>
            <img src={authorImg} alt="daydayUp" />
          </div>
        </div>
        <article className="md-content">
          {this.state.article 
          ? <Markdown source={this.state.article}/> 
          : <h2>加载中...</h2>}
        </article>
        <Footer />
      </div>
    );
  }
}

export default Article;
