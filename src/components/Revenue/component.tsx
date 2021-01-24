import React from 'react';

import './styles.scss';

export default function Revenue() {
  return (
    <div className="dash-card with-actions revenue">
      <div className="actions">
        <i className="icon material-icons">trending_up</i>
        <h3 className="title">Revenue</h3>
        <div className="extras">
          <i className="icon material-icons">more_vert</i>
        </div>
      </div>
      <div className="content">
        <h3>Revenue graph here</h3>
      </div>
    </div>
  );
}
