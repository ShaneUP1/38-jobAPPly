/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const JobPost = ({ id, company, appliedDate, responseDate, url, notes, updateClick }) => (
  <>
    <h3>{company}</h3>
    <p>Application Date: {appliedDate}</p>
    <a href={url}>
      <p>{url}</p>
    </a>
    {responseDate
      ? <p>Response Date: {responseDate} </p>
      : <p>Response Date: NA</p>
    }
    {notes
      ? <p>Notes: {notes}</p>
      : <p>Notes: NA</p>
    }
    <button value={id} onClick={updateClick}>Update</button>
  </>
);

JobPost.propTypes = {
  id: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  appliedDate: PropTypes.string.isRequired,
  responseDate: PropTypes.string,
  url: PropTypes.string.isRequired,
  notes: PropTypes.string,
  updateClick: PropTypes.func.isRequired
};

export default JobPost;
