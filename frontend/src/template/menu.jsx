import React from 'react'

export default props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <a className="navbar-brand" href="#">
        <i className="far fa-calendar-alt" /> TodoApp
      </a>
    </div>

    <div id="navbar" className="navbar-collapse collapse">
      <ul className="nav navbar-nav">
        <li>
          <a href="#/todos">Tasks</a>
        </li>
        <li>
          <a href="#/about">About</a>
        </li>
      </ul>
    </div>
  </nav>
);