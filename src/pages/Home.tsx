import React from 'react';
import ActionBar from '../components/ActionBar';
import SideBar from '../components/Sidebar';

import './Home.scss';

export function HomePage() {
  return (
    <div className="home page">
      <ActionBar />
      <SideBar />
      <div className="page-content">
        <div></div>
      </div>
    </div>
  );
}
