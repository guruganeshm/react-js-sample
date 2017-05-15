import React from 'react';
import listOfFaqs from './faqsAsked';

class Faq extends React.Component {

  render () {
    const quesAsked = listOfFaqs.map((quest)=>
      <span key={quest.id}>
        <li><h6>{quest.ques}</h6></li>
        <p>- {quest.ans}</p>
      </span>
    );
    return (
      <section>
        <div className="mdl-layout__tab-panel" id="features">
          <section className="section--center mdl-grid mdl-grid--no-spacing">
            <div className="mdl-cell mdl-cell--12-col">
              <h4> Hello from Faq section!</h4>
              <p><i>Questions and Answers are populated from array of objects</i></p>
              <ol>{quesAsked}</ol>
            </div>
          </section>
        </div>
      </section>
    );
  };
};
export default Faq;
