import React, { Component } from 'react';
import { getArchiveList } from "../../action/action";
import Header from "../../components/Header";
import ArchiveItem from "../../components/ArchiveItem";
import Loading from "../../components/Loading";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import './style.less';

class Archive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      archiveList: []
    }
  }

  componentDidMount() {
    getArchiveList().then((p) => {
      this.setState({
        archiveList: [...p]
      })
    })
  }

  render() {
    let archiveList = this.state.archiveList;
    return (
      <div className="archive-page">
        <Nav></Nav>
        <Header page="归档"></Header>
        <div className="archive-content">
           {
            archiveList.length
            ? archiveList.map((item, index) => {
              return <ArchiveItem key={index} archive={item}></ArchiveItem>
            })
            : <Loading></Loading>
          } 
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Archive;
