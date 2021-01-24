import React from 'react';

import './styles.scss';

export default function PotentialRevenue() {
  return (
    <div className="dash-card with-actions potential-revenue">
      <div className="actions">
        <i className="icon material-icons">pie_chart_outliend</i>
        <h3 className="title">Potential Revenue</h3>
        <div className="extras">
          <i className="icon material-icons">more_vert</i>
        </div>
      </div>
      <div className="content">
        <h3>Pie graph</h3>
        <h3>Pie graph</h3>
        <h3>Pie graph</h3>
      </div>
    </div>
  );
}
