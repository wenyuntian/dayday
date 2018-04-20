import React, { Component } from 'react';

export class ImageRenderer extends Component {

  render() {
    return <img src={this.props.src} alt={this.props.src} />;
  }
}

export default ImageRenderer;
