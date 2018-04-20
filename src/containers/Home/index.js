import React, { Component } from 'react';
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Article from "../../components/Article";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";
import { getArticleList } from "../../action/action.js"
import './style.less';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleList: ""
    }
  }

  componentDidMount() {
    getArticleList().then((list) => {
      this.setState({
        articleList: list
      })
    })
  }

  render() {
    return (
      <div className="home-page">
        <Nav />
        <Header page="dayday's Blog"/>
        <div className="article-list">
          { this.state.articleList
          ? this.state.articleList.map((item, index) => {
            return <Article key={index} article={item}/>
          })
          : <Loading></Loading>
          }
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
