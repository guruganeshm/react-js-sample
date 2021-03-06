import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Overview extends Component {
  render () {
    return (
      <section>
        <div className="mdl-layout__tab-panel" id="overview">
          <section className="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
            <header className="section__play-btn mdl-cell mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--4-col-phone mdl-color--teal-100 mdl-color-text--white">
              <i className="material-icons">play_circle_filled</i>
            </header>
            <div className="mdl-card mdl-cell mdl-cell--9-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone">
              <div className="mdl-card__supporting-text">
                <h4>Features</h4>
                Dolore ex deserunt aute fugiat aute nulla ea sunt aliqua nisi cupidatat eu. Nostrud in laboris labore nisi amet do dolor eu fugiat consectetur elit cillum esse.
              </div>
              <div className="mdl-card__actions">
                <Link to="/features" className="mdl-button">Read our features</Link>
              </div>
            </div>
            <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" id="btn1">
              <i className="material-icons">more_vert</i>
            </button>
            <ul className="mdl-menu mdl-js-menu mdl-menu--bottom-right" htmlhtmlFor="btn1">
              <li className="mdl-menu__item">Lorem</li>
              <li className="mdl-menu__item" disabled>Ipsum</li>
              <li className="mdl-menu__item">Dolor</li>
            </ul>
          </section>
          <section className="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
            <div className="mdl-card mdl-cell mdl-cell--12-col">
              <div className="mdl-card__supporting-text mdl-grid mdl-grid--no-spacing">
                <h4 className="mdl-cell mdl-cell--12-col">Details</h4>
                <div className="section__circle-container mdl-cell mdl-cell--2-col mdl-cell--1-col-phone">
                  <div className="section__circle-container__circle mdl-color--primary"></div>
                </div>
                <div className="section__text mdl-cell mdl-cell--10-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone">
                  <h5>Lorem ipsum dolor sit amet</h5>
                  Dolore ex deserunt aute fugiat aute nulla ea sunt aliqua nisi cupidatat eu. Duis nulla tempor do aute et eiusmod velit exercitation nostrud quis <a href="#">proident minim</a>.
                </div>
                <div className="section__circle-container mdl-cell mdl-cell--2-col mdl-cell--1-col-phone">
                  <div className="section__circle-container__circle mdl-color--primary"></div>
                </div>
                <div className="section__text mdl-cell mdl-cell--10-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone">
                  <h5>Lorem ipsum dolor sit amet</h5>
                  Dolore ex deserunt aute fugiat aute nulla ea sunt aliqua nisi cupidatat eu. Duis nulla tempor do aute et eiusmod velit exercitation nostrud quis <a href="#">proident minim</a>.
                </div>
                <div className="section__circle-container mdl-cell mdl-cell--2-col mdl-cell--1-col-phone">
                  <div className="section__circle-container__circle mdl-color--primary"></div>
                </div>
                <div className="section__text mdl-cell mdl-cell--10-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone">
                  <h5>Lorem ipsum dolor sit amet</h5>
                  Dolore ex deserunt aute fugiat aute nulla ea sunt aliqua nisi cupidatat eu. Duis nulla tempor do aute et eiusmod velit exercitation nostrud quis <a href="#">proident minim</a>.
                </div>
              </div>
              <div className="mdl-card__actions">
                <Link to="/details" className="mdl-button">Read our features</Link>
              </div>
            </div>
            <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" id="btn2">
              <i className="material-icons">more_vert</i>
            </button>
            <ul className="mdl-menu mdl-js-menu mdl-menu--bottom-right" htmlFor="btn2">
              <li className="mdl-menu__item">Lorem</li>
              <li className="mdl-menu__item" disabled>Ipsum</li>
              <li className="mdl-menu__item">Dolor</li>
            </ul>
          </section>
          <section className="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
            <div className="mdl-card mdl-cell mdl-cell--12-col">
              <div className="mdl-card__supporting-text">
                <h4>Technology</h4>
                Dolore ex deserunt aute fugiat aute nulla ea sunt aliqua nisi cupidatat eu. Nostrud in laboris labore nisi amet do dolor eu fugiat consectetur elit cillum esse. Pariatur occaecat nisi laboris tempor laboris eiusmod qui id Lorem esse commodo in. Exercitation aute dolore deserunt culpa consequat elit labore incididunt elit anim.
              </div>
              <div className="mdl-card__actions">
                <Link to="/technology" className="mdl-button">Read our features</Link>
              </div>
            </div>
            <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" id="btn3">
              <i className="material-icons">more_vert</i>
            </button>
            <ul className="mdl-menu mdl-js-menu mdl-menu--bottom-right" htmlFor="btn3">
              <li className="mdl-menu__item">Lorem</li>
              <li className="mdl-menu__item" disabled>Ipsum</li>
              <li className="mdl-menu__item">Dolor</li>
            </ul>
          </section>
          <section className="section--footer mdl-color--white mdl-grid">
            <div className="section__circle-container mdl-cell mdl-cell--2-col mdl-cell--1-col-phone">
              <div className="section__circle-container__circle mdl-color--accent section__circle--big"></div>
            </div>
            <div className="section__text mdl-cell mdl-cell--4-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone">
              <h5>Lorem ipsum dolor sit amet</h5>
              Qui sint ut et qui nisi cupidatat. Reprehenderit nostrud proident officia exercitation anim et pariatur ex.
            </div>
            <div className="section__circle-container mdl-cell mdl-cell--2-col mdl-cell--1-col-phone">
              <div className="section__circle-container__circle mdl-color--accent section__circle--big"></div>
            </div>
            <div className="section__text mdl-cell mdl-cell--4-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone">
              <h5>Lorem ipsum dolor sit amet</h5>
              Qui sint ut et qui nisi cupidatat. Reprehenderit nostrud proident officia exercitation anim et pariatur ex.
            </div>
          </section>
        </div>
      </section>
    );
  }
};
