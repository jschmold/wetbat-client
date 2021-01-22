import React from 'react';
import ActionBar from '../components/ActionBar';
import SideBar from '../components/Sidebar';

import StatBanner from '../components/InfoBanner';
import QuickQuote from '../components/QuickQuote';

import './Home.scss';

export function HomePage() {
  return (
    <div className="home page">
      <ActionBar />
      <SideBar />
      <div className="page-content">
        <div className="cards">
          <StatBanner />
          <QuickQuote />
        </div>
      </div>
    </div>
  );
}
