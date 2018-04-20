import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from "moment";
import { getArticleByName } from "../../action/action.js";
import Markdown from "../../components/Markdown";
import Nav from "../../components/Nav";
import Loading from "../../components/Loading";
import Footer from "../../components/Footer";
import headerImg from "../../images/header.png";
import authorImg from "../../images/head.jpg";
import './style.less';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: ""
    }
  }

  componentDidMount() {
    const postName = this.props.match.params.postName;
    getArticleByName(postName).then((article) => {
      this.setState({
        article: article
      })
    })
  }

  render() {
    const article = this.state.article;
    const { title, tag, origin, content, time } = article;
    return (
      article ? 
      <div className="article-page">
        <Nav />
        <div className="article-head">
          <div className="article-header-bg" style={ {backgroundImage: `url(${headerImg})`}}></div>
          <div className="article-header-title">
            <div className="aritcle-tag">
              <span className="article-source">{Boolean(origin) ? "原" : "译"}</span>
               {tag.map((item, index) => {
                return <a href="" key={index}>{item}</a>
              })} 
            </div>
            <h1>{title}</h1>
            
          </div>
          <div className="article-header-author">
            <div className="author-infor">
              <div>
                <Link to="#" >daydayUp的日志</Link>
              </div>
              <time className="aiticle-time" dateTime={moment(time).format("YYYY-MM-DD")}>{moment(time).format("YYYY-MM-DD")}</time>
            </div>
            <img src={authorImg} alt="daydayUp" />
          </div>
        </div>
        <article className="md-content">
          <Markdown source={content}/> 
        </article>
        <Footer />
      </div>
      : <Loading></Loading>
    );
  }
}

export default Article;
