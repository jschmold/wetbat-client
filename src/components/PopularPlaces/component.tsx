import React, { useState } from 'react';

import './styles.scss';

const defaultListings = [
  { name: 'Lorem ipsum dolor sit', color: '#A4D4AE', amount: 0.2 },
  { name: 'Lorem ipsum dolor sit', color: '#34B1D6', amount: 0.3 },
  { name: 'Lorem ipsum dolor sit', color: '#79C514', amount: 0.4 },
  { name: 'Lorem ipsum dolor sit', color: '#FFB124', amount: 0.6 },
  { name: 'Lorem ipsum dolor sit', color: '#D593FF', amount: 0.8 },
  { name: 'Lorem ipsum dolor sit', color: '#FF93CF', amount: 1.0 },
];

interface IListItem {
  name: string;
  color: string;
  amount: number;
}

export default function PopularPlaces() {
  // placeholder for future useListings hook or redux state
  const [listings] = useState(defaultListings);

  return (
    <div className="medium dash-card with-actions popular-places">
      <div className="actions">
        <i className="icon material-icons">airplanemode_active</i>
        <h3 className="title">Popular places and packages</h3>
        <div className="extras">
          <i className="icon material-icons">more_vert</i>
        </div>
      </div>
      <div className="content">
        <div className="listing">{listings.map(listItem)}</div>
        <div className="map">
          <div className="placeholder">
            <h4>MAP GOES HERE</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

function listItem({ color, amount, name }: IListItem) {
  const barStyle = {
    backgroundColor: color,
    width: `${amount * 100}%`,
  };

  return (
    <div className="list-item">
      <span className="name">{name}</span>
      <div className="bar">
        <div className="inner-bar" style={barStyle}></div>
      </div>
    </div>
  );
}
