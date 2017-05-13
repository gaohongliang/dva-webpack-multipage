import fetch from 'dva/fetch';

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}
/**
 * 解析sword返回的数据
 */
function parseResponseData(data) {
  const result = {
    data: '',
  };
  if (data) {
    data.data.forEach((resp) => {
      if (resp.name === 'jsonresult') {
        result.data = JSON.parse(resp.value);
      }
    });
  }
  return result;
}
function buildRequestPamams(ctrl, params) {
  const postData = {
    tid: '',
    ctrl,
    data: [],
  };
  for (const key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key)) {
      postData.data.push({ name: key, value: params[key], type: 'attr' });
    }
  }
  return `postData=${JSON.stringify(postData)}`;
}
/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(ctrl, query) {
  const url = `/ajax.sword?ctrl=${ctrl}`;
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: buildRequestPamams(ctrl, query),
  };
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then((data) => { return parseResponseData(data); })
    .catch(err => ({ err }));
}
