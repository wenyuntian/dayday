import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { hybrid } from 'react-syntax-highlighter/styles/hljs';

export class CodeBlock extends Component {

  render() {
    const cls = `language-${this.props.language}`;
    var html = {__html:this.props.value};
    return (
      <SyntaxHighlighter language={cls} style={hybrid}>{html.__html}</SyntaxHighlighter>    
    );
  }
}

export default CodeBlock;
