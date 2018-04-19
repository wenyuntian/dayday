import React, { Component } from 'react';
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WorkItem from "../../components/WorkItem"
import './style.less';

class Works extends Component {
  render() {
    return (
      <div className="works-page">
        <Nav />
        <Header page="works"/>
        <div className="works-content">
          <WorkItem />
          <WorkItem />
          <WorkItem />
          <WorkItem />
          <WorkItem />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Works;
