import React, { Component } from 'react';
import './style.less';
import './icon.css';

class Loading extends Component {
  render() {
    return (
      <div className="loading-bar">
        <h1><i className="icon-spinner3"></i>加载中...</h1>
      </div>
    );
  }
}

export default Loading;
