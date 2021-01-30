import Component from './component';
import React from 'react';
import configureMockStore from 'redux-mock-store';

import { Store } from 'redux';
import { Provider } from 'react-redux';
import { render, RenderResult } from '@testing-library/react';
import { IQuoteState } from 'features/quotes/reducer';
import { IQuote } from 'types/quote';

const mockStore = configureMockStore();

function fakeQuote(id: number): IQuote {
  return { id } as any;
}

describe('InfoBanner component', () => {
  let fixture: RenderResult;
  let host: Element;
  let store: Store;

  let quotes: IQuoteState;

  beforeEach(() => {
    quotes = { ids: [], entities: {} };

    for (let i = 0; i < 10; ++i) {
      const q = fakeQuote(i);
      quotes.ids.push(q.id);
      quotes.entities[q.id] = q;
    }

    store = mockStore({ quotes });

    fixture = render(
      <Provider store={store}>
        <Component />
      </Provider>
    );

    host = fixture.container;
  });

  it('has a leads item', () => {
    const el = host.querySelector('.info-banner .details .new-leads');
    expect(el).toBeTruthy();
  });

  it('has a pending orders item', () => {
    const el = host.querySelector('.info-banner .details .pending-orders');
    expect(el).toBeTruthy();
  });

  it('shows the correct quote amount', () => {
    const el = host.querySelector('.info-banner .details .quotes');
    expect(el).toBeTruthy();

    const amt = el?.querySelector('.amount');
    expect(amt).toBeTruthy();
    expect(amt?.textContent).toEqual(quotes.ids.length.toString());
  });
});
