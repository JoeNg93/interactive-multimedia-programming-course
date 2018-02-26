var connection = new WebSocket('wss://obscure-waters-98157.herokuapp.com');

var messageElements = [];

connection.onopen = function() {
  setConnectionStatus('Connected');
};

connection.onerror = function(error) {
  setConnectionStatus('Error');
};

connection.onmessage = function(e) {
  console.log(e.data);
  var msgContainer = document.createElement('div');
  var msg = document.createTextNode(e.data);
  msgContainer.appendChild(msg);
  msgContainer.className = 'pl3 pb2 pt2 pr3 bg-light-gray mt3 mb3 br4';
  messageElements.push(msgContainer);
  renderMessages();
};

function setConnectionStatus(status) {
  var statusMsgEl = elID('status-msg');
  statusMsgEl.innerHTML = status;
}

function elID(id) {
  return document.getElementById(id);
}

function onKeyPressInput(evt) {
  if (evt.keyCode === 13) {
    sendMessage();
  }
}

function sendMessage() {
  var messageEl = elID('message');
  connection.send(messageEl.value);
  messageEl.value = '';
}

function renderMessages() {
  clearChatContent();
  var chatContentEl = elID('chat-content');
  messageElements.forEach(function(element) {
    chatContentEl.appendChild(element);
  });
}

function clearChatContent() {
  var chatContentEl = elID('chat-content');
  while (chatContentEl.firstChild) {
    chatContentEl.removeChild(chatContentEl.firstChild);
  }
}
