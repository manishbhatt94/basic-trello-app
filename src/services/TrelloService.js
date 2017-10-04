import HttpService from './HttpService';

class TrelloService {
  constructor() {}

  static getBoards() {
    let url = 'boards';
    let options = { method: 'GET', url };
    return HttpService.request(options);
  }
}

export default TrelloService;
