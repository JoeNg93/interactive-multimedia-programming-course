$(document).ready(function() {
  $('#loadPersonsBtn').click(function() {
    $.ajax({
      url:
        'https://imp-portfolio-demonstration.herokuapp.com/json/persons.jsonp',
      type: 'GET',
      dataType: 'jsonp'
    });
  });
});

function jsonCallback(response) {
  // Clear old data
  var personsEl = $('#persons');
  personsEl.children('div').remove();

  response.forEach(function(response) {
    var el = $(
      `<div>${response.name} email: <a href="mailto:${response.email}">${response.email}</a></div>`
    );
    el.appendTo(personsEl);
  });
}
