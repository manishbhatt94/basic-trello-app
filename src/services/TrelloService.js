import HttpService from './HttpService';

class TrelloService {

  static getBoards() {
    let url = 'boards';
    let options = { method: 'GET', url };
    return HttpService.request(options);
  }

  static addBoard(board) {
    let url = 'boards';
    let options = { method: 'POST', url, body: JSON.stringify(board) };
    return HttpService.request(options);
  }

  static getLists(boardId) {
    let url = `boards/${boardId}/lists`;
    let options = { method: 'GET', url };
    return HttpService.request(options);
  }

  static getCards(listId) {
    let url = `lists/${listId}/cards`;
    let options = { method: 'GET', url };
    return HttpService.request(options);
  }

  static addList(list) {
    let url = 'lists';
    let options = { method: 'POST', url, body: JSON.stringify(list) };
    return HttpService.request(options);
  }

  static addCard(card) {
    let url = 'cards';
    let options = { method: 'POST', url, body: JSON.stringify(card) };
    return HttpService.request(options);
  }
}

export default TrelloService;
