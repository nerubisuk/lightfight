import React, { Component } from 'react';

import './Footer.scss';
export default class Footer extends Component {
  render() {
    return (
      <div className="fixed-bottom footer-section">
        <ul className="nav nav-pills nav-pills-icons d-flex justify-content-around rounded-0" role="tablist">
          <li className="nav-item">
            <a className="nav-link" href="#dashboard-1" role="tab" data-toggle="tab">
              <i className="material-icons">home</i> Overview
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#tasks-1" role="tab" data-toggle="tab">
              <i className="material-icons">add_circle</i> Start New Fight
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#schedule-1" role="tab" data-toggle="tab">
              <i className="material-icons">grade</i> Favorites
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#tasks-1" role="tab" data-toggle="tab">
              <i className="material-icons">info</i> About
            </a>
          </li>
        </ul>
        {/* <nav className="navbar navbar-light rounded-0 mb-0">
          <a className="navbar-brand" href="#">Fixed bottom</a>
        </nav> */}
      </div>

    );
  }
}

