import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import JobForm from '../components/app/form/JobForm';
import Login from '../components/auth/Login';
import Signup from '../components/auth/Signup';
import JobPostList from '../components/jobs/JobPostList';
import { createJob, fetchJobs } from '../services/jobApplyBe';

const Main = () => {
  const [company, setCompany] = useState('');
  const [appliedDate, setAppliedDate] = useState('');
  const [responseDate, setResponseDate] = useState('');
  const [url, setUrl] = useState('');
  const [notes, setNotes] = useState('');
  const [jobsList, setJobsList] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetchJobs()
      .then(jobs => setJobsList(ls => [...ls, ...jobs]));
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
    createJob({ company, appliedDate, responseDate, url, notes })
      .then(job => setJobsList(jobs => [...jobs, job]));
    setCompany('');
    setAppliedDate('');
    setResponseDate('');
    setUrl('');
    setNotes('');
  };

  const updateClick = ({ target }) => {
    history.push(`/update/${target.value}`);
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
      <JobPostList jobs={jobsList} updateClick={updateClick} />
    </>
  );
};

export default Main;
