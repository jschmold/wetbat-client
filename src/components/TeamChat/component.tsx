import React, { useState } from 'react';

import './styles.scss';

interface IChatMessage {
  avatar: string;
  active: boolean;
  name: string;
  message: string;
  id: number;
}

const defaultMessages: IChatMessage[] = [
  {
    avatar: 'https://www.placecage.com/126/126',
    active: true,
    name: 'Nick Cage',
    message: 'Customer service available',
    id: 0,
  },
  {
    avatar: 'https://www.placecage.com/128/128',
    active: true,
    name: 'Nikki Cage',
    message: 'Customer service available',
    id: 1,
  },
  {
    avatar: 'https://www.placecage.com/127/127',
    active: true,
    name: 'Nicholas Cage',
    message: 'Customer service available',
    id: 2,
  },
  {
    avatar: 'https://www.placecage.com/123/123',
    active: true,
    name: 'Nicolas Cage',
    message: 'Customer service available',
    id: 3,
  },
  {
    avatar: 'https://www.placecage.com/124/124',
    active: true,
    name: 'Nick-o-lass Cage',
    message: 'Customer service available',
    id: 4,
  },
];

export default function TeamChat() {
  const [messages] = useState(defaultMessages);

  return (
    <div className="dash-card with-actions team-chat">
      <div className="actions">
        <i className="icon material-icons">chat_bubble_outline</i>
        <h3 className="title">Team Chat</h3>
        <div className="extras">
          <i className="icon material-icons">more_vert</i>
        </div>
      </div>
      <div className="content">{messages.map(chatItem)}</div>
    </div>
  );
}

function chatItem(arg: IChatMessage) {
  const indicatorClass = `indicator ${arg.active ? 'online' : 'offline'}`;

  return (
    <div className="chat-item" key={arg.id}>
      <div className="avatar">
        <img src={arg.avatar} />
        <div className={indicatorClass}></div>
      </div>

      <div className="message-area">
        <h4 className="sender">{arg.name}</h4>
        <p className="message">{arg.message}</p>
      </div>

      <i className="icon material-icons open-chat">chat</i>
    </div>
  );
}
