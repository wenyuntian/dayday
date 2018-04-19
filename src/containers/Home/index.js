import React, { Component } from 'react';
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Article from "../../components/Article";
import Footer from "../../components/Footer";
import './style.less';

class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <Nav />
        <Header page="blog"/>
        <div className="article-list">
          <Article />
          <Article />
          <Article />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
