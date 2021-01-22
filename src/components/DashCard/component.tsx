import React from 'react';

export interface IDashCardProps {
  children?: React.ReactNode;
}

export default function DashCard(props: IDashCardProps) {
  return (
    <div className="dash-card">
      <div className="actions"></div>
      <div className="content">{props.children}</div>
    </div>
  );
}
