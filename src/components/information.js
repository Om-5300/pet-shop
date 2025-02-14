import React from 'react';
import './information.css';

const Information = () => {
  return (
    <div className="information">
      <div className="leftinformation">
        <h1>Lorem ipsum dolor sit amet, consectetur.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eros tortor, semper nec sodales at, ullamcorper ut mi. In accumsan arcu ut semper porttitor. Etiam ac purus velit.</p>
        <div className="leftbutton">
          <h2>LOREM IPSUM</h2>
        </div>
      </div>
      <div className="rightinformation">
        {[1, 2, 3, 4].map((num) => (
          <div key={num} className={`right${num}`}>
            <img src={`image/infovector${num}.svg`} alt={`info ${num}`} />
            <h3>Lorem ipsum</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Information;