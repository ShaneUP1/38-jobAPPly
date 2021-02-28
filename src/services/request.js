const API_URL = process.env.BE_URL;
const WITHOUT_BODY_HEADERS = ['GET', 'DELETE'];

const request = (path, method, body = null) => {
  const headers = WITHOUT_BODY_HEADERS.includes(method)
    ? {}
    : {
      'Content-Type': 'application/json'
    };

  return fetch(`${API_URL}${path}`, {
    method,
    headers,
    credentials: 'include',
    body: JSON.stringify(body)
  })
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });
};

export const post = (path, body) => request(path, 'POST', body);
export const get = path => request(path, 'GET');
export const put = (path, body) => request(path, 'PUT', body);
export const del = path => request(path, 'DELETE');
