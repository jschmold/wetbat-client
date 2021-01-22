import React from 'react';

import './styles.scss';

export default function SideBar() {
  return (
    <nav className="side-bar">
      <ul className="nav-items">
        <li className="nav-item">
          <i className="icon material-icons">home</i>
          <span>Home</span>
        </li>

        <li className="nav-item">
          <i className="icon material-icons">attach_money</i>
          <span>Quotes</span>
        </li>

        <li className="nav-item">
          <i className="icon material-icons">filter_list</i>
          <span>Leads</span>
        </li>

        <li className="nav-item">
          <i className="icon material-icons">style</i>
          <span>Tours</span>
        </li>

        <span className="divider"></span>

        <li className="nav-item">
          <i className="icon material-icons">insert_drive_file</i>
          <span>Invoices</span>
        </li>

        <li className="nav-item">
          <i className="icon material-icons">insert_chart</i>
          <span>Analytics</span>
        </li>

        <li className="nav-item">
          <i className="icon material-icons">people</i>
          <span>Team</span>
        </li>

        <li className="nav-item">
          <i className="icon material-icons">settings</i>
          <span>Admin</span>
        </li>

        <li className="nav-item">
          <i className="icon material-icons">help</i>
          <span>Support</span>
        </li>

        <div className="divider"></div>

        <li className="footer-item">
          <p className="copyright">Allright received by wetbat 2020 ©</p>
        </li>
      </ul>
    </nav>
  );
}
