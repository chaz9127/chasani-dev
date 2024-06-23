import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import './Job.scss';
const Job = (props) => {
    const { idx } = props;
    const { company, title, dateRange, bulletPoints } = props.job;
    const [displayJob, setDisplayJob] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setDisplayJob(true)
        }, 500*(idx*0.5) );
    }, []);

    return (
        <div className={`${displayJob ? "display-job" : ""} job-container`}>
            <div className="date-range">{dateRange}</div>
            <div className="job-details">
                <h2 className="title">{title}</h2>
                <strong className="company">{company}</strong>
                {bulletPoints.map((point, idx) => {
                    return (<div key={idx} className="bullet-point">
                        <i className='bx bxs-check-circle'></i>
                        <span>{point}</span>
                    </div>)
                })}
            </div>
        </div>
    )
}

Job.propTypes = {
    job: PropTypes.object,
    idx: PropTypes.number,
}

export default Job;