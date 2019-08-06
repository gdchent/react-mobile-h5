import qs from 'qs'
import config from '../config/serviceConfig'
function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default async function request({
    method = 'GET',
    url,
    data }) {
    let options = {}
    if (method == 'GET') {
        options = {
            headers: {
                //'user-agent': 'Mozilla/4.0 MDN Example',
                //'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Type': 'application/json; charset=utf-8',
                //'Content-Type': 'form-data',
            },
            method: method,
            body: JSON.stringify(data),
            //mode: 'no-cors', // no-cors, cors, *same-origin
        }
        url = `${'' + url}${data ? `?${qs.stringify(data)}` : ''}`
    } else if (method == 'POST') {
        options = {
            headers: {
                //'user-agent': 'Mozilla/4.0 MDN Example',
                //'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Type': 'application/json; charset=utf-8',
                //'Content-Type': 'form-data',
            },
            method: method,
            body: JSON.stringify(data),
            //mode: 'no-cors', // no-cors, cors, *same-origin
        }
    }
    console.log('url', config.base + url)
    console.log('options', options)
    //注意配置代理这里不用加base的url
    const response = await fetch(url, options);
    checkStatus(response);
    return await response.json();
}