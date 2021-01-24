import React from 'react';
import { useQuotes } from '../../features/quotes/hooks';
import { IQuote } from '../../types/quote';

import './styles.scss';

export default function PendingQuotes() {
  const quotes = useQuotes();
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

function quoteRow(arg: IQuote) {
  return (
    <tr key={arg.oid}>
      <td>{arg.id}</td>
      <td>{arg.name.slice(0, 40)}</td>
      <td>{arg.destinationId}</td>
      <td>{arg.amount}</td>
    </tr>
  );
}
