import * as apiConstants from '../constants/apiConstants';

class HttpService {
  constructor() {}

  static request(options) {
    let { method, url } = options,
      headers = {
        'Content-Type': 'application/json'
      },
      settings = { method, headers };
    url = apiConstants.baseUrl + url;
    if (options.body) {
      settings.body = options.body;
    }
    return fetch(url, settings)
      .then(response => response.json())
      .catch(error => error);
  }
}

export default HttpService;
