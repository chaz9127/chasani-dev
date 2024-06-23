// src/pages/Contact.jsx
import React from 'react';
import workHistory from './workHistory.js';
import Job from '../../components/Job/Job.jsx';

const Resume = () => {
  return (
    <div>
      <h1>📄Resume Page</h1>
      <p>
        Well-rounded Fullstack Engineer with over 12 years of experience building customer-facing and internal tools. Primarily
        focused in React accompanied by strong professional backend experience in backend languages such as Ruby on Rails and
        Python.
      </p>
      <div className="resume-container">
        {workHistory.map((job, idx) => {
          return <Job key={idx} idx={idx} job={job} />
        })}
      </div>
    </div>
  );
};

export default Resume;
