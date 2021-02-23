const BE_URL = process.env.BE_URL;

export const createJob = (jobDataObj) => {
  console.log(JSON.stringify(jobDataObj));
  return fetch(`${BE_URL}/api/v1/jobs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(jobDataObj)
  })
    .then(res => res.json());
};
