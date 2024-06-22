import React from 'react';
import PropTypes from 'prop-types';
import './Pill.scss';

const Project = (props) => {
    const {text} = props;

    return (
        <div className="pill">
            <span>{text}</span>
        </div>
    );
};

Project.propTypes = {
    text: PropTypes.string,
}

export default Project;
