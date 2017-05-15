import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Overview from './overview';
import Features from './features';
import Details from './details';
import Technology from './technology';
import Faq from './faq';

export default class appBody extends Component {
  render() {
    return (
      <div>
        <switch>
          <Route exact path="/" render={() => (
            <Redirect to="/overview"/>
          )}/>
          <Route path="/overview" component={Overview} />
          <Route path="/features" component={Features} />
          <Route path="/details" component={Details} />
          <Route path="/technology" component={Technology} />
          <Route path="/faq" component={Faq} />
        </switch>
        <Route path="/overview" component={Overview} />
        <Route path="/features" component={Features} />
        <Route path="/details" component={Details} />
        <Route path="/technology" component={Technology} />
        <Route path="/faq" component={Faq} />
      </div>
    );
  }
}
