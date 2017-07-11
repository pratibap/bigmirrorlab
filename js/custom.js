$(document).ready(function() {
  var date;
  $.getJSON('https://private-f3b4b-interview2.apiary-mock.com/data', function(data) {
      $.each(data, function(index, element) {
        date = new Date(parseInt(element.timestamp,10)); 
        $('.container').append($('<div class="row user" data-color="'+element.secret+'"><div class="col-md-2"><img src='+element.image+' /></div><div class="col-md-10"><h1>'+element.name+'</h1><p class="date">'+date.toLocaleDateString()+'</p></div>'));
      });
  });

  $('.container').on('click', '.user', (function () {
    var bgcolor = $(this).data('color');
    $('#color').css('background-color', bgcolor);
    $('#color').css('color', 'white');
    $('#color').text(bgcolor);
  }));

  $('#reset').click(function () {
    $('#color').removeAttr('style');
    $('#color').text('???');
  });

});