function PersonModel() {
  this.allPersons = [];
  this.changeListeners = [];
}

PersonModel.prototype.addNewPerson = function (name) {
  this.allPersons.push(name);
  this.saveData();
  this.notifyChange();
};

PersonModel.prototype.notifyChange = function () {
  this.changeListeners.forEach(function (listener) {
    listener();
  });
};

PersonModel.prototype.addNewListener = function (listener) {
  this.changeListeners.push(listener);
};

PersonModel.prototype.saveData = function () {
  localStorage.setItem('persons', JSON.stringify(this.allPersons));
};

PersonModel.prototype.loadDataIfExists = function () {
  var personsAsJSON = localStorage.getItem('persons');
  if (personsAsJSON) {
    this.allPersons = JSON.parse(personsAsJSON);
    this.notifyChange();
  }
};
