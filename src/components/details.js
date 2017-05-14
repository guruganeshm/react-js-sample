import React, { Component } from 'react';

export default class Details extends Component {
    constructor(props){
      super(props);
      this.handleLogin = this.handleLogin.bind(this);
      this.handleLogout = this.handleLogout.bind(this);
      this.state = {
        inputTerm:'',
        isLoggedIn: false
       }
    }
    handleLogin() {
      this.setState({isLoggedIn: true});
    }

    handleLogout() {
      this.setState({isLoggedIn: false});
    }

    render() {

      const UserGreeting = () => {
        return (
          <span>
            <h5>Welcome back!</h5>
            <p>The secret code is <b>PRFT!!</b></p>
          </span>
        );
    }
    const GuestGreeting = () => {
      return <h5>Sign up to see your secret code.</h5>;
    }
    const Greeting = (props) =>  {
      const isLoggedIn = props.status;
      if (isLoggedIn) {
        return <UserGreeting />;
      }
      return <GuestGreeting />;
    }
    const LoginBtn = (props) => {
      return (
        <button className ="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" onClick={props.onClick}>
          Login
        </button>
      );
    }
    const LogoutBtn = (props) => {
      return (
        <button className ="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" onClick={props.onClick}>
          Logout
        </button>
      );
    }
    const isLoggedIn = this.state.isLoggedIn;
    let actionBtn = null;
    if (isLoggedIn) {
      actionBtn = <LogoutBtn onClick={this.handleLogout} />;
    } else {
      actionBtn = <LoginBtn onClick={this.handleLogin} />;
    }


    return (
      <section>
        <div className="mdl-layout__tab-panel" id="features">
          <section className="section--center mdl-grid mdl-grid--no-spacing">
            <div className="mdl-cell mdl-cell--12-col">
              <h4>Sample Reactive Input uses "state" in a class based component</h4>
              <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input
                  className="mdl-textfield__input"
                  value={this.state.inputTerm}
                  onChange={event => this.setState({inputTerm: event.target.value})}
                  placeholder="Type something here.."
                />
                <br />
                <label
                  className="">
                  Value we type on Input box is :
                  <br />
                  <span className="valueColor">{this.state.inputTerm}</span>
                </label>
              </div>
            </div>
            <br />
            <div className="mdl-cell mdl-cell--12-col">
              <Greeting status={isLoggedIn} />
              {actionBtn}
            </div>
          </section>
        </div>
      </section>
    );
  };
};
