import React, { useState } from 'react';
import JobForm from '../components/app/form/JobForm';
import { createJob } from '../services/jobApplyBe';

const Main = () => {
  const [company, setCompany] = useState('');
  const [appliedDate, setAppliedDate] = useState('');
  const [responseDate, setResponseDate] = useState('');
  const [url, setUrl] = useState('');
  const [notes, setNotes] = useState('');

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
    createJob({ company, appliedDate, responseDate, url, notes });
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

export default Main;
