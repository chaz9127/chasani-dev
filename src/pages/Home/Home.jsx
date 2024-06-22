// src/pages/Home.jsx
import React from 'react';
import './Home.scss';
import Project from '../../components/Project/Project';
import { projects } from '../../constants/projects'

const Home = () => {

  return (
    <>
      <div className="bio">
        <h2>🖖Hi there, I&apos;m Chasani!</h2>
        <p>But you can call me CJ. I&apos;m a <span className="highlight">Fullstack developer</span> looking
          to make tools that improve the life of yourself and your company.</p>
        <p>I&apos;ve been a developer for 12 years and specialize in <span className="highlight">building web apps</span> that are optimized for performance, user experience, and scalability.</p>
      </div>
      <div className="work">
        <h3 className="work-heading">What I&apos;ve been up to</h3>
        <div className="projects-container">
          {projects.map((project, idx) => {
            return (
              <Project
                key={idx}
                idx={idx}
                url={project.url}
                title={project.title}
                thumbnailUrl={project.thumbnailUrl}
                description={project.description}
                technologies={project.technologies}
              />
            )
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
