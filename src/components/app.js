import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Overview from './overview';
import AppBody from './appBody';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter baseName="overview">
          <div>
            <Header />
            <main className="mdl-layout__content">
              <AppBody />
              <Footer />
            </main>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
