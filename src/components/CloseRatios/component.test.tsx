import CloseRatios from './component';
import React from 'react';

import { render, RenderResult } from '@testing-library/react';

describe('CloseRatios Component', () => {
  let fixture: RenderResult;
  let host: Element;

  beforeEach(() => {
    fixture = render(<CloseRatios />);
    host = fixture.container;
  });

  it('has the correct percentage', () => {
    const el = host.querySelector('.close-ratios .content .percentage');
    expect(el).toBeTruthy();
    expect(el?.textContent?.trim()).toEqual('73%');
  });
});
