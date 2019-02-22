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
};

/**
 * Requests a URL, returning a promise.
 */
export default {
  get: (url, params, option) =>
    fetch(`${url}?${params ? new URLSearchParams(params).toSting() : ''}`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Token: sessionStorage.Token,
      },
      ...options,
      ...option,
    }).then(res => res.json()).catch(checkStatus),
  auth: (url, body, option) =>
    fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      ...options,
      ...option,
      method: 'POST',
      body: JSON.stringify(body),
    }).then(res => res.json()).catch(checkStatus),
  post: (url, body, option) =>
    fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Token: sessionStorage.Token,
      },
      ...options,
      ...option,
      method: 'POST',
      body: JSON.stringify(body),
    }).then(res => res.json()).catch(checkStatus),
};
