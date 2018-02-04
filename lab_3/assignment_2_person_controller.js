var personModel = new PersonModel();
registerListeners();
personModel.loadDataIfExists();

function addPerson() {
  var nameInput = elID('name');

  personModel.addNewPerson(nameInput.value);

  nameInput.value = '';
}

function onKeyPressInput(e) {
  // If user press Enter
  if (e.keyCode === 13) {
    addPerson();
  }
}

function registerListeners() {
  personModel.addNewListener(updatePersonList);
}
