import HttpService from './HttpService';

class TrelloService {

  static getBoards() {
    let url = 'boards';
    let options = { method: 'GET', url };
    return HttpService.request(options);
  }

  static addBoard(board) {
    let url = 'boards';
    let options = { method: 'POST', url, body: board };
    return HttpService.request(options);
  }
}

export default TrelloService;
