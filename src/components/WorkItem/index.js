import React, { Component } from 'react';
import './style.less';

class WorkItem extends Component {
  render() {
    const {title, tag, codeSrc, viewSrc, thumbSrc} = this.props.workItem;

    return (
      <article className="work-item">
        <a className="work-thumb" href={codeSrc}>
          <img src={thumbSrc} alt="作品缩略图" />
        </a>
        <div className="work-infor">
          <ul className="work-tag">
            {tag
            ? tag.map((p, index) => {
              return <li key={index}><a href="qwew">{p}</a></li>
            })
            : ""
            }
          </ul>
          <h2 className="work-title"><a href={codeSrc}>{title.length>50 ? `${title.slice(0,50)}...` : title}</a></h2>
          <div className="work-link">
            {viewSrc
            ? <a className="preview" href={viewSrc}>预览</a>
            : ""
            }
            <a className="preview" href={codeSrc}>源码</a>
          </div>
        </div>
      </article>
    );
  }
}

export default WorkItem;
