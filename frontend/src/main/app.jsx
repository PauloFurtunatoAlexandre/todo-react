import "jquery/dist/jquery.slim.js";
import "popper.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "font-awesome/css/font-awesome.min.css";

import React from 'react'
import Menu from '../template/menu'
import Routes from './routes'

export default props =>
  (
    <div className="container">
      <Menu />
      <Routes />
    </div>
  )
