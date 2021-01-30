import Component from './component';
import React from 'react';
import configureMockStore from 'redux-mock-store';

import { loremIpsum } from 'lorem-ipsum';
import { render, RenderResult } from '@testing-library/react';
import { IQuote } from 'types/quote';
import { IQuoteState } from 'features/quotes/reducer';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { IDestinationState } from 'features/destinations/reducer';
import { IDestination } from 'types/destination';
import { v4 as uuid } from 'uuid';

function fakeQuote(id: number, destinationId: string): IQuote {
  return {
    id,
    destinationId,
    name: loremIpsum({ count: 2 }),
    oid: uuid(),
  } as IQuote;
}

const fakeDestination = (id: string) =>
  ({ id, name: loremIpsum() } as IDestination);

const mockStore = configureMockStore();

describe('PendingQuotes Component', () => {
  let fixture: RenderResult;
  let host: Element;

  let quotes: IQuoteState;
  let destinations: IDestinationState;

  let store: Store;

  beforeEach(() => {
    destinations = { ids: [], entities: {} };
    for (let i = 0; i < 10; ++i) {
      const id = uuid();

      destinations.ids.push(id);
      destinations.entities[id] = fakeDestination(id);
    }

    quotes = { ids: [], entities: {} };
    for (let k = 0; k < destinations.ids.length; ++k) {
      const id = destinations.ids[k];
      const dest = destinations.entities[id];

      quotes.ids.push(k);
      quotes.entities[k] = fakeQuote(k, dest.id);
    }

    store = mockStore({ destinations, quotes });

    fixture = render(
      <Provider store={store}>
        <Component />
      </Provider>
    );
    host = fixture.container;
  });

  it('has 1 row for every quote', () => {
    const query = '.pending-quotes .content .pending-quote';
    const rows = host.querySelectorAll(query);
    expect(rows).toHaveLength(quotes.ids.length);
  });
});
