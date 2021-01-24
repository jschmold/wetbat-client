/**
 * This is the top navigation bar. Users can access their profile, their settings, and search
 * the app via this component.
 */
import React from 'react';
import Avatar from '../Avatar';
import SearchField from '../SearchField';

import './styles.scss';

export default function ActionBar() {
  return (
    <div className="action-bar">
      <div className="logo">
        <i className="icon material-icons">dashboard</i>
        <h4>Wet Bat</h4>
      </div>

      <SearchField />

      <ul className="nav-controls">
        <li className="notifications">
          <i className="material-icons">notifications</i>
        </li>
        <li className="messages">
          <i className="material-icons">mode_comment</i>
        </li>
        <li className="settings">
          <i className="material-icons">settings</i>
        </li>
      </ul>

      <Avatar />
    </div>
  );
}
