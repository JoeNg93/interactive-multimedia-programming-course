function elID(id) {
  return document.getElementById(id);
}

function addPerson() {
  var nameInput = elID('name');
  var shoppingList = elID('shoppingList');

  var listElement = document.createElement('li');
  var listContent = document.createTextNode(nameInput.value);
  listElement.appendChild(listContent);

  shoppingList.appendChild(listElement);

  nameInput.value = '';
}
