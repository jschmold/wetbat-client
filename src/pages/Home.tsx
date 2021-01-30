import React from 'react';
import ActionBar from 'components/ActionBar';
import SideBar from 'components/Sidebar';

import StatBanner from 'components/InfoBanner';
import QuickQuote from 'components/QuickQuote';
import PendingQuotes from 'components/PendingQuotes';
import NewLeads from 'components/NewLeads';
import PopularPlaces from 'components/PopularPlaces';
import TeamChat from 'components/TeamChat';
import Revenue from 'components/Revenue';
import PotentialRevenue from 'components/PotentialRevenue';
import CloseRatios from 'components/CloseRatios';

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
          <PendingQuotes />
          <NewLeads />
          <PopularPlaces />
          <TeamChat />
          <Revenue />
          <PotentialRevenue />
          <CloseRatios />
        </div>
      </div>
    </div>
  );
}
