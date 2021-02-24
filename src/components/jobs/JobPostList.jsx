import React from 'react';
import PropTypes from 'prop-types';
import JobPost from './JobPost';

const JobPostList = ({ jobs, updateClick }) => {
  const jobElements = jobs.map(job => (
    <li
      key={job.id}
      style={{ listStyleType: 'none' }}
    >
      <JobPost {...job} updateClick={updateClick} />
    </li>
  ));
  
  return (
    <ul>
      {jobElements}
    </ul>
  );
};

JobPostList.propTypes = {
  jobs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    appliedDate: PropTypes.string.isRequired,
    responseDate: PropTypes.string,
    url: PropTypes.string.isRequired,
    notes: PropTypes.string
  })).isRequired,
  updateClick: PropTypes.func.isRequired
};

export default JobPostList;
