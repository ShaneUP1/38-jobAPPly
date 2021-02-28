/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './JobForm.module.css';

const JobForm = ({ company, appliedDate, responseDate, url, notes, onSubmit, onChange }) => (
  <form onSubmit={onSubmit} className={styles.form}>
    <label htmlFor="company">
      Company
    </label>
    <input
      id="company"
      name="company"
      type="string"
      value={company}
      onChange={onChange}
      required
    />
    <div className="form-dates">
      <label htmlFor="appliedDate">
        Date Applied
      </label>
      <input
        id="appliedDate"
        name="appliedDate"
        type="date"
        value={appliedDate}
        onChange={onChange}
        required
      />
      <label htmlFor="responseDate">
        Response Date
      </label>
      <input
        id="responseDate"
        name="responseDate"
        type="date"
        value={responseDate}
        onChange={onChange}
      />
    </div>
    <label htmlFor="url">
      Job Posting URL
    </label>
    <input
      id="url"
      name="url"
      type="url"
      placeholder="https://example.com"
      style={{ width: '30em' }}
      value={url}
      onChange={onChange}
      required
    />
    <label htmlFor="notes">
      Notes
    </label>
    <textarea
      id="notes"
      name="notes"
      value={notes}
      onChange={onChange}
      rows="20"
      cols="40"
    />
    <button>
      Submit
    </button>
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
