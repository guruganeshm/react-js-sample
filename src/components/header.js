import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
  render () {
    return (
      <section>
        <header className="mdl-layout__header mdl-layout__header--scroll mdl-color--primary">
          <div className="mdl-layout--large-screen-only mdl-layout__header-row">
          </div>
          <div className="mdl-layout--large-screen-only mdl-layout__header-row">
            <h3>React Web Project</h3>
          </div>
          <div className="mdl-layout--large-screen-only mdl-layout__header-row">
          </div>
          <div className="mdl-layout__tab-bar mdl-js-ripple-effect mdl-color--primary-dark">
            <NavLink activeClassName="is-active" to="/overview" className="mdl-layout__tab">Overview</NavLink>
            <NavLink activeClassName="is-active" to="/features" className="mdl-layout__tab">Features</NavLink>
            <NavLink activeClassName="is-active" to="/details" className="mdl-layout__tab">Details</NavLink>
            <NavLink activeClassName="is-active" to="/technology" className="mdl-layout__tab">Technology</NavLink>
            <NavLink activeClassName="is-active" to="/faq" className="mdl-layout__tab">FAQ</NavLink>
            <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored mdl-shadow--4dp mdl-color--accent" id="add">
              <i className="material-icons" role="presentation">add</i>
              <span className="visuallyhidden">Add</span>
            </button>
          </div>
        </header>
      </section>
    );
  }
};
