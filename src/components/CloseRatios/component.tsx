import React from 'react';

import './styles.scss';

export default function CloseRatios() {
  return (
    <div className="dash-card with-actions close-ratios">
      <div className="actions">
        <i className="icon material-icons">business_center</i>
        <h3 className="title">Close Ratios</h3>
        <div className="extras">
          <i className="icon material-icons">more_vert</i>
        </div>
      </div>
      <div className="content">
        <div className="percentage">
          <h3>73%</h3>
        </div>
      </div>
    </div>
  );
}
