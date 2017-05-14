import React from 'react';

class Technology extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      color:false
    }
  }
  render() {
    return (
      <section>
        <div className="mdl-layout__tab-panel" id="features">
          <section className="section--center mdl-grid mdl-grid--no-spacing">
            <div className="mdl-cell mdl-cell--12-col">
              <h4> Hello from Technology section!</h4>
              <h5>You have clicked <span className={this.state.color ? 'active' : 'inactive'}> {this.state.count}</span> times</h5>
            </div>
            <div className="mdl-cell mdl-cell--12-col btn-section">
              <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" onClick={event=> this.setState({count: this.state.count + 1, color:true})}>Click Me</button>
              <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" onClick={event=> this.setState({count: 0, color: false })}>Reset</button>
            </div>
          </section>
        </div>
      </section>
    );
  };
};
export default Technology;
