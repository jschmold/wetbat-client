import React from 'react';

import './styles.scss';

export default function PendingQuotes() {
  return (
    <div className="dash-card with-actions pending-quotes">
      <div className="actions">
        <i className="icon material-icons">history</i>
        <h3 className="title">Pending quotes</h3>
        <div className="extras">
          <i className="icon material-icons">refresh</i>
          <i className="icon material-icons">fullscreen</i>
        </div>
      </div>
      <div className="content">
        <table>
          <thead>
            <tr>
              <th>ID #</th>
              <th>Name</th>

              <th>Destination</th>
              <th>Price</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1234567</td>
              <td>LOREM IPSUM DOLOR</td>
              <td>Hong Kong, CN</td>
              <td>$ 1,000.00</td>
            </tr>

            <tr>
              <td>1234567</td>
              <td>LOREM IPSUM DOLOR</td>
              <td>Hong Kong, CN</td>
              <td>$ 1,000.00</td>
            </tr>

            <tr>
              <td>1234567</td>
              <td>LOREM IPSUM DOLOR</td>
              <td>Hong Kong, CN</td>
              <td>$ 1,000.00</td>
            </tr>

            <tr>
              <td>1234567</td>
              <td>LOREM IPSUM DOLOR</td>
              <td>Hong Kong, CN</td>
              <td>$ 1,000.00</td>
            </tr>

            <tr>
              <td>1234567</td>
              <td>LOREM IPSUM DOLOR</td>
              <td>Hong Kong, CN</td>
              <td>$ 1,000.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
