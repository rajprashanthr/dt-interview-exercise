import React, { ReactChild, ReactChildren } from 'react';
import '../../Style/Section.css';

export default (props: {
  children: ReactChild | ReactChildren
  heading?: () => JSX.Element
  actions?: () => JSX.Element
  footer?: () => JSX.Element
}) => {
  return (
    <div className="section">
      <div className="row-space-between section-header">
        {
          props.heading &&
          <div className="heading">{props.heading()}</div>
        }
        {
          props.actions &&
          <div className="actions">{props.actions()}</div>
        }
      </div>
      <div className="body">{props.children}</div>
      {
        props.footer &&
        <div className="footer">{props.footer()}</div>
      }

    </div>
  )
};