import React from 'react';

import './styles.scss';

export default function NewLeads() {
  return (
    <div className="dash-card with-actions new-leads sm-medium-expand">
      <div className="actions">
        <i className="icon material-icons">email</i>
        <h3 className="title">New Leads</h3>
        <div className="extras">
          <i className="icon material-icons">refresh</i>
          <i className="icon material-icons">fullscreen</i>
        </div>
      </div>
      <div className="content">
        <ul className="leads">
          <li className="lead-item">
            <img
              className="avatar"
              src="https://www.placecage.com/64/64"
              alt=""
            />
            <h4 className="lead-name">Nicolas Cage</h4>
            <p className="lead-message">
              Hey! I just want to place my package!
            </p>
            <span className="timestamp">15:40pm</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
