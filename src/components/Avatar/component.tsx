import React from 'react';
import * as constants from './constants';

import './styles.scss';

export interface IAvatarProps {
  avatar?: string;
}

export default function Avatar(props: IAvatarProps) {
  const image = props.avatar ?? constants.defaultAvatar;

  return (
    <div className="avatar-bubble">
      <img src={image} alt="" />
    </div>
  );
}
