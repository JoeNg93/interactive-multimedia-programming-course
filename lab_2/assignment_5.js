var randomColorClasses = [
  'is-black',
  'is-dark',
  'is-primary',
  'is-link',
  'is-success',
  'is-warning',
  'is-danger'
];

function elID(id) {
  return document.getElementById(id);
}

function addPerson() {
  var nameInput = elID('name');
  var persons = elID('persons');

  var spanElement = document.createElement('span');
  spanElement.className =
    'tag ' +
    randomColorClasses[Math.floor(Math.random() * randomColorClasses.length)];

  var content = document.createTextNode(nameInput.value);
  spanElement.appendChild(content);

  persons.appendChild(spanElement);

  nameInput.value = '';
}

function onKeyPressInput(e) {
  // If user press Enter
  if (e.keyCode === 13) {
    addPerson();
  }
}
