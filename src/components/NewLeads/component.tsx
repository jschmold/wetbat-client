import React from 'react';
import moment from 'moment-timezone';

import { defaultLeads } from './constants';
import { ILeadItem } from './types';

import './styles.scss';

export default function NewLeads() {
  const leads = defaultLeads;

  return (
    <div className="dash-card with-actions new-leads sm-medium-expand">
      <div className="actions">
        <i className="icon material-icons">email</i>
        <h3 className="title">New Leads</h3>
        <div className="extras">
          <i className="icon material-icons">refresh</i>
          <i className="icon material-icons">fullscreen</i>
        </div>
      </div>
      <div className="content">
        <ul className="leads">{leads.map(leadItem)}</ul>
      </div>
    </div>
  );
}

function leadItem(lead: ILeadItem) {
  const timestamp = moment(new Date(lead.timestamp)).format('MMM DD h:mma');
  const maxLength = 40;
  const maxEllipLength = 37;

  let message = lead.message.slice(0, maxLength);
  if (lead.message.length > maxEllipLength) {
    message = `${message.slice(0, maxEllipLength)}...`;
  }

  return (
    <li className="lead-item" key={lead.id}>
      <img className="avatar" src={lead.avatar} alt="" />
      <h4 className="lead-name">{lead.name}</h4>
      <p className="lead-message">{message}</p>
      <span className="timestamp">{timestamp}</span>
    </li>
  );
}
