import Component from './component';
import React from 'react';

import { render, RenderResult } from '@testing-library/react';

describe('ActionBar component', () => {
  let fixture: RenderResult;
  let host: Element;

  beforeEach(() => {
    fixture = render(<Component />);
    host = fixture.container;
  });

  it('has a logo', () => {
    const el = host.querySelector('.action-bar .logo');
    expect(el).toBeTruthy();
  });

  it('has a search bar', () => {
    const el = host.querySelector('.action-bar .search-field');
    expect(el).toBeTruthy();
  });

  it('has a notifications button', () => {
    const el = host.querySelector('.action-bar .notifications');
    expect(el).toBeTruthy();
  });

  it('has a settings button', () => {
    const el = host.querySelector('.action-bar .settings');
    expect(el).toBeTruthy();
  });

  it('has a chat button', () => {
    const el = host.querySelector('.action-bar .messages');
    expect(el).toBeTruthy();
  });
});
