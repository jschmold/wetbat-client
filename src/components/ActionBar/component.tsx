import React from 'react';
import Avatar from '../Avatar';

import './styles.scss';

export default function ActionBar() {
  return (
    <div className="action-bar">
      <div className="logo">
        <i className="icon material-icons">dashboard</i>
        <h4>Wet Bat</h4>
      </div>
      <div className="search-bar"></div>
      <div className="nav-controls"></div>
      <Avatar />
    </div>
  );
}
