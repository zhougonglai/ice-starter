import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

export default class Logo extends PureComponent {
  render() {
    return (
      <div className="logo">
        <Link to="/" className="logo-text">
          <svg className="icon pointer" aria-hidden="true">
            <use xlinkHref="#icon-logo1" />
          </svg>
        </Link>
      </div>
    );
  }
}
