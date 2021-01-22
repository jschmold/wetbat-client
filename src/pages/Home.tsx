import React from 'react';
import ActionBar from '../components/ActionBar';
import SideBar from '../components/Sidebar';
import DashCard from '../components/DashCard';

import './Home.scss';

export function HomePage() {
  return (
    <div className="home page">
      <ActionBar />
      <SideBar />
      <div className="page-content">
        <div className="cards">
          <DashCard>
            <h3>Yeet</h3>
          </DashCard>

          <DashCard>
            <h3>Yeet</h3>
          </DashCard>

          <DashCard>
            <h3>Yeet</h3>
          </DashCard>

          <DashCard>
            <h3>Yeet</h3>
          </DashCard>

          <DashCard>
            <h3>Yeet</h3>
          </DashCard>

          <DashCard>
            <h3>Yeet</h3>
          </DashCard>
        </div>
      </div>
    </div>
  );
}
