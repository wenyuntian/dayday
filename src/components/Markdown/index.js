import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import CodeBlock from './components/CodeBlock';
import ImageRenderer from './components/ImageRender';
export class Markdown extends Component {

  static propTypes = {
    source: PropTypes.string.isRequired,
  };

  render() {
    return (
      <ReactMarkdown
        source={this.props.source}
        renderers={
          {
          code:CodeBlock,
          image: ImageRenderer
          }
        }
      />
    );
  }
}

export default Markdown;
