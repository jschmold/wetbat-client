import Avatar from './component';
import React from 'react';
import * as componentConstants from './constants';

import { render, RenderResult } from '@testing-library/react';

describe('Avatar Component', () => {

  let fixture: RenderResult;
  let host: Element;

  beforeEach(() => {
    fixture = render( <Avatar />);
    host = fixture.container;
  });

  it('shows the correct avatar', () => {
    const el: HTMLImageElement = host.querySelector('.avatar-bubble img') as HTMLImageElement;
    expect(el).toBeTruthy();

    expect(el.src).toEqual(componentConstants.defaultAvatar);
  });
  
});
