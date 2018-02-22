var personModel = new PersonModel();
registerListeners();
personModel.loadDataIfExists();

function addPerson() {
  var nameInput = $('#name');

  personModel.addNewPerson(nameInput.val());

  nameInput.val('');
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
