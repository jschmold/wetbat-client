import React from 'react';
import { useDestinationState } from 'features/destinations/hooks';
import { useAllQuotes } from 'features/quotes/hooks';
import { IQuote } from 'types/quote';

import './styles.scss';

interface IListItem {
  oid: string;
  id: number;
  name: string;
  destination: string;
  amount: string;
}

function mapListings(all: IQuote[]): IListItem[] {
  const destinations = useDestinationState();
  const getDest = (a: IQuote) =>
    destinations.entities[a.destinationId]?.name ?? '';

  return all
    .sort((a, b) => b.id - a.id)
    .map((q) => ({
      oid: q.oid,
      id: q.id,
      name: q.name,
      destination: getDest(q),
      amount: `$ ${q.amount ?? 0}`,
    }));
}

export default function PendingQuotes() {
  const quotes = mapListings(useAllQuotes());

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
    <tr className="pending-quote" key={arg.oid}>
      <td>{arg.id}</td>
      <td>{arg.name.slice(0, 40)}</td>
      <td>{arg.destination}</td>
      <td>{arg.amount}</td>
    </tr>
  );
}
