import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from "moment";
import './style.less';

class ArchiveItem extends Component {
  render() {
    const archive = this.props.archive;

    return (
      <div className="archive">
        <h1 className="archive-year">{ archive[0] }</h1>
        <ul className="archive-list">
          {
            archive[1].map((item, index) => {
              return <li className="archive-item" key={index}>
                <time time-data="2015">{moment(item.time).format("MM-DD")}</time>
                <Link className="item-name" to={item.url}>
                  {item.title}
                </Link>
              </li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default ArchiveItem;
