import React from 'react';
import { useAllQuotes } from 'features/quotes/hooks';

import './styles.scss';

export default function InfoBanner() {
  const quotes = useAllQuotes().length;

  return (
    <div className="large dash-card info-banner">
      <div className="content">
        <div className="description">
          <h3 className="title">Welcome to your dashboard</h3>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            volutpat tincidunt dignissim. In faucibus ac nisl vel egestas.
            Quisque pharetra neque et feugiat vulputate. Integer ultricies,
            lacus sit amet sollicitudin commodo, risus justo semper nisi, cursus
            lobortis velit purus vitae justo. Duis dapibus porttitor eros.
            Vivamus enim eros, tempor non neque at, dapibus venenatis est. Etiam
            varius, ex et rhoncus tempus, leo lorem placerat ipsum, nec
            pellentesque massa orci sit amet purus.
          </p>
        </div>
        <div className="details">
          <div className="image-container">
            <span>PLACEHOLDER</span>
          </div>

          <ul className="stats">
            <li className="stat-item new-leads">
              <span className="amount">101</span>
              <span className="label">new leads</span>
            </li>
            <li className="stat-item quotes">
              <span className="amount">{quotes}</span>
              <span className="label">quotes created</span>
            </li>
            <li className="stat-item pending-orders">
              <span className="amount">40</span>
              <span className="label">pending orders</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
