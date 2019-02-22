function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

const options = {
  mode: 'cors',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};

/**
 * Requests a URL, returning a promise.
 */
export default {
  get: (url, params, option) =>
    fetch(`${url}?${params ? new URLSearchParams(params).toSting() : ''}`, {
      ...options,
      ...option,
    }).then(res => res.json()).catch(checkStatus),
  post: (url, body, option) =>
    fetch(url, {
      ...options,
      ...option,
      method: 'POST',
      body: JSON.stringify(body),
    }).then(res => res.json()).catch(checkStatus),
};
