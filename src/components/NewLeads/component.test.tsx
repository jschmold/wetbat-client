import Component from './component';
import React from 'react';

import { render, RenderResult } from '@testing-library/react';
import { defaultLeads } from './constants';

describe('NewLeads Component', () => {
  let fixture: RenderResult;
  let host: Element;

  beforeEach(() => {
    fixture = render(<Component />);
    host = fixture.container;
  });

  // NOTE: this will BREAK once you connect this to state, so update it!
  it('has a leads list', () => {
    const leads = host.querySelector('.new-leads .leads');
    expect(leads).toBeTruthy();
    expect(leads?.children.length).toEqual(defaultLeads.length);
  });

  it('has valid leads', () => {
    const lead = host.querySelector('.new-leads .lead-item');
    expect(lead).toBeTruthy();

    const avatar = lead?.querySelector('.avatar');
    expect(avatar).toBeTruthy();

    const name = lead?.querySelector('.lead-name');
    expect(name).toBeTruthy();

    const timestamp = lead?.querySelector('.timestamp');
    expect(timestamp).toBeTruthy();
  });
});
