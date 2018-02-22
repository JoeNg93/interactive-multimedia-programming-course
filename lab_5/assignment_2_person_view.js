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
  var persons = $('#persons');
  persons.children('span').remove();

  personModel.allPersons.forEach(function (personName) {
    var spanElement = $('<span/>', {
      html: personName,
      "class": 'tag ' +
      randomColorClasses[Math.floor(Math.random() * randomColorClasses.length)]
    });

    spanElement.appendTo(persons);
  })
}
