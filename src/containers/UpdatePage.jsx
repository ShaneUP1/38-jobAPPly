/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import JobForm from '../components/app/form/JobForm';
import { getJobToUpdate, updateJob } from '../services/jobApplyBe';

const UpdatePage = ({ match }) => {
  const [company, setCompany] = useState('');
  const [appliedDate, setAppliedDate] = useState('');
  const [responseDate, setResponseDate] = useState('');
  const [url, setUrl] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    getJobToUpdate(match.params.id)
      .then(job => {
        setCompany(job.company);
        setAppliedDate(job.appliedDate);
        setResponseDate(job.responseDate);
        setUrl(job.url);
        setNotes(job.notes);
      });
  }, []);

  const handleChange = ({ target }) => {
    const value = target.value;
    if(target.name === 'company') setCompany(value);
    if(target.name === 'appliedDate') setAppliedDate(value);
    if(target.name === 'responseDate') setResponseDate(value);
    if(target.name === 'url') setUrl(value);
    if(target.name === 'notes') setNotes(value);
  };
  
  const handleSubmit = e => {
    e.preventDefault();
    console.log();
    updateJob(match.params.id, ({ company, appliedDate, responseDate, url, notes }));


    // createJob({ company, appliedDate, responseDate, url, notes })
    //   .then(job => setJobsList(jobs => [...jobs, job]));
  };


  return (
    <>
      <JobForm
        company={company}
        appliedDate={appliedDate}
        responseDate={responseDate}
        url={url}
        notes={notes}
        onSubmit={handleSubmit}
        onChange={handleChange}
      />
      
    </>
  );
};

export default UpdatePage;

UpdatePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  }).isRequired
};

