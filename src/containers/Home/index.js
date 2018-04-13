import React, { Component } from 'react';
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import './style.less';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
      </div>
    );
  }
}

export default Home;
