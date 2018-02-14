import React from "react";
import Grid from '../template/grid'
import IconButton from "../template/iconButton.jsx";

export default props => (
  <div role="form" className="todoForm">
    <Grid cols="12 9 10">
      <input
        id="description"
        className="form-control"
        placeholder="Add a task"
        onChange={this.props.changeDescription}
        onKeyUp={this.keyHandler}
        value={this.props.description}
      />
    </Grid>
    <Grid cols="12 3 2">
      <IconButton
        style="primary"
        icon="plus"
        onClick={() => add(description)}
      />
      <IconButton style="info" icon="search" onClick={search} />
      <IconButton style="default" icon="close" onClick={this.props.clear} />
    </Grid>
  </div>
);
