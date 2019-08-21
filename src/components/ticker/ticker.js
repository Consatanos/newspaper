import React from 'react';
import { Link } from 'react-router-dom';

const Ticker = (props) => {
  const { messageText, messageUrl } = props;
  return (
    <div className="ticker">
      <ul>
        <li>
          <Link to={messageUrl}>{messageText}</Link>
        </li>
      </ul>
    </div>
  )
};

export default Ticker;