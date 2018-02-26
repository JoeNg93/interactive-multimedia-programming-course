$('#btn-show').on('click', function() {
  var photoTag = $('#photo-tag-input').val();
  var flickerAPI =
    'https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';
  $.getJSON(flickerAPI, {
    tags: photoTag,
    tagmode: 'any',
    format: 'json'
  }).done(function(data) {
    $('#photo-container').empty();
    var currentDivRowContainer = $('<div class="columns"></div>');
    currentDivRowContainer.appendTo('#photo-container');
    $.each(data.items, function(i, item) {
      var divContainer = $('<div class="column is-3"></div>');
      $('<img>')
        .attr('class', 'w-100-m')
        .attr('src', item.media.m)
        .appendTo(divContainer);
      divContainer.appendTo(currentDivRowContainer);
      if (i % 4 === 0 && i !== 0) {
        currentDivRowContainer = $('<div class="columns"></div>');
        currentDivRowContainer.appendTo('#photo-container');
      }
    });
  });
});
