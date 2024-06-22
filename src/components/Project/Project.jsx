// src/pages/Contact.jsx
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Pill from '../Pill/Pill'
import './Project.scss';

const Project = (props) => {
    const {thumbnailUrl, title, description, technologies, idx, url} = props;
    const [display, setDisplay] = useState(false);
    
    useEffect(() => {
        setTimeout(() => {
            setDisplay(true);
            console.log('test', idx)
        }, 300*(idx*.5));
    }, [])

    const goTo = () => {
        window.open(url, '_blank').focus();
    }
    return (
        <div onClick={goTo} className={`project-card ${display ? 'display' : ''}`}>
            <div className="project-card-thumbnail">
                <img src={thumbnailUrl} alt={title} />
            </div>
            <div className="project-card-details">
                <div>
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
                <div className="pill-container">
                    {technologies.map(tech => {
                        return <Pill key={tech} text={tech} />
                    })}
                </div>
            </div>
            <div className="arrow-container">
                <i className='bx bxs-chevrons-right'></i>
            </div>
        </div>
    );
};

Project.propTypes = {
    thumbnailUrl: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    technologies: PropTypes.array,
    idx: PropTypes.number,
    url: PropTypes.string,

}

export default Project;
