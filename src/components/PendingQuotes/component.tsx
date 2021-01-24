import React, { useState } from 'react';

import './styles.scss';

interface IListItem {
  id: string;
  name: string;
  destination: string;
  amount: string;
}

const defaultQuotes: IListItem[] = [
  {
    id: '1234567',
    name: 'LOREM IPSUM DOLOR',
    destination: 'Honk Kong, CN',
    amount: '$ 1,000.00',
  },
  {
    id: '1234567',
    name: 'LOREM IPSUM DOLOR',
    destination: 'Honk Kong, CN',
    amount: '$ 1,000.00',
  },
  {
    id: '1234567',
    name: 'LOREM IPSUM DOLOR',
    destination: 'Honk Kong, CN',
    amount: '$ 1,000.00',
  },
  {
    id: '1234567',
    name: 'LOREM IPSUM DOLOR',
    destination: 'Honk Kong, CN',
    amount: '$ 1,000.00',
  },
  {
    id: '1234567',
    name: 'LOREM IPSUM DOLOR',
    destination: 'Honk Kong, CN',
    amount: '$ 1,000.00',
  },
];

export default function PendingQuotes() {
  const [quotes] = useState(defaultQuotes);

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

          <tbody>{quotes.map(quoteRow)}</tbody>
        </table>
      </div>
    </div>
  );
}

function quoteRow(arg: IListItem) {
  return (
    <tr>
      <td>{arg.id}</td>
      <td>{arg.name}</td>
      <td>{arg.destination}</td>
      <td>{arg.amount}</td>
    </tr>
  );
}
