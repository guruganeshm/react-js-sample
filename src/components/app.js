import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Overview from './overview';
import AppBody from './appBody';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Header />
            <main className="mdl-layout__content">
              <AppBody />
              <Footer />
            </main>
          </div>
        </Router>
      </div>
    );
  }
}
