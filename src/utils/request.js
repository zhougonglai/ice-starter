import qs from 'qs';

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
  * @desc get请求序列化
  */
const searchParams = query =>
  ((typeof query === 'object')
    ? `?${new URLSearchParams(query).toString()}`
    : '');


/**
 * Requests a URL, returning a promise.
 */
export default {
  get: (url, params, option) =>
    fetch(`${url}${searchParams(params)}`, {
      headers: {
        Token: sessionStorage.Token,
      },
      ...options,
      ...option,
    }).then(res => res.json()).catch(checkStatus),
  post: (url, body, option) =>
    fetch(url, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      ...options,
      ...option,
      method: 'POST',
      body: qs.stringify(body),
    }).then(res => res.json()).catch(checkStatus),
  auth: (url, body, option) =>
    fetch(url, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Token: sessionStorage.Token,
      },
      ...options,
      ...option,
      method: 'POST',
      body: qs.stringify(body),
    }).then(res => res.json()).catch(checkStatus),
};
