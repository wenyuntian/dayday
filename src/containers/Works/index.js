import React, { Component } from 'react';
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";
import WorkItem from "../../components/WorkItem";
import { getWorkList } from "../../action/action";
import './style.less';

class Works extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workList: ""
    }
  }

  componentDidMount() {
    getWorkList().then((list) => {
      this.setState({
        workList: list
      })
    })
  }

  render() {
    const workList = this.state.workList;

    return (
      <div className="works-page">
        <Nav />
        <Header page="作品"/>
        <div className="works-content">
          {workList
          ? workList.map((item, index) => {
            return <WorkItem key={index} workItem = {item}/>
          })
          : <Loading></Loading>
          }
        </div>
        <Footer />
      </div>
    );
  }
}

export default Works;
