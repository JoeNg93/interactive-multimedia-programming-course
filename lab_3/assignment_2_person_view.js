function elID(id) {
  return document.getElementById(id);
}

var randomColorClasses = [
  'is-black',
  'is-dark',
  'is-primary',
  'is-link',
  'is-success',
  'is-warning',
  'is-danger'
];

function updatePersonList() {
  // Clear old content
  while (persons.firstChild) {
    persons.removeChild(persons.firstChild);
  }

  personModel.allPersons.forEach(function (personName) {
    var persons = elID('persons');
    var spanElement = document.createElement('span');
    spanElement.className =
      'tag ' +
      randomColorClasses[Math.floor(Math.random() * randomColorClasses.length)];

    var content = document.createTextNode(personName);
    spanElement.appendChild(content);

    persons.appendChild(spanElement);
  })
}
