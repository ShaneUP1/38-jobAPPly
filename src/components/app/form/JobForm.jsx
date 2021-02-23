/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const JobForm = ({ company, appliedDate, responseDate, url, notes, onSubmit, onChange }) => (
  <form onSubmit={onSubmit}>
    <label htmlFor="company">Company</label>
    <input id="company" name="company" type="string" value={company} onChange={onChange} />
  
    <div className="form-dates">
      <label htmlFor="appliedDate">Date Applied</label>
      <input id="appliedDate" name="appliedDate" type="date" value={appliedDate} onChange={onChange} />
      
      <label htmlFor="responseDate">Response Date</label>
      <input id="responseDate" name="responseDate" type="date" value={responseDate} onChange={onChange} />
    </div>

    <label htmlFor="url">Job Posting URL</label>
    <input id="url" name="url" type="string" value={url} onChange={onChange} />
    
    <label htmlFor="notes">Notes</label>
    <textarea id="notes" name="notes" value={notes} onChange={onChange} rows="10" cols="20"/>
    
    <button>Submit</button>
  </form>
);

JobForm.propTypes = {
  company: PropTypes.string.isRequired,
  appliedDate: PropTypes.string.isRequired,
  responseDate: PropTypes.string,
  url: PropTypes.string.isRequired,
  notes: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default JobForm;
