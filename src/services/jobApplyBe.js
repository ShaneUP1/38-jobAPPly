
const BE_URL = process.env.BE_URL;

export const createJob = (jobDataObj) => {
  return fetch(`${BE_URL}/api/v1/jobs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(jobDataObj)
  })
    .then(res => res.json());
};

export const fetchJobs = () => {
  return fetch(`${BE_URL}/api/v1/jobs`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json());
};

export const getJobToUpdate = (id) => {
  return fetch(`${BE_URL}/api/v1/jobs/update/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json());
};

export const updateJob = (id, jobObj) => {
  console.log(jobObj);
  return fetch(`${BE_URL}/api/v1/jobs/update/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(jobObj)
  })
    .then(res => res.json());
};
