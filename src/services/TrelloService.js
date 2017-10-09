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

  static deleteBoard(boardId) {
    let url = `boards/${boardId}`;
    let options = { method: 'DELETE', url };
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

  static editList(data) {
    let url = `lists/${data.listId}`;
    let options = { method: 'PATCH', url, body: JSON.stringify(data.payload) };
    return HttpService.request(options);
  }

  static deleteList(listId) {
    let url = `lists/${listId}`;
    let options = { method: 'DELETE', url };
    return HttpService.request(options);
  }

  static addCard(card) {
    let url = 'cards';
    let options = { method: 'POST', url, body: JSON.stringify(card) };
    return HttpService.request(options);
  }

  static editCard(data) {
    let url = `cards/${data.cardId}`;
    let options = { method: 'PATCH', url, body: JSON.stringify(data.payload) };
    return HttpService.request(options);
  }

  static deleteCard(cardId) {
    let url = `cards/${cardId}`;
    let options = { method: 'DELETE', url };
    return HttpService.request(options);
  }
}

export default TrelloService;
