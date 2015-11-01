$(function(){
  $('#ticker__items').webTicker({
    speed: 100, //pixels per second
    direction: 'left', //if to move left or right
    // moving: true, //weather to start the ticker in a moving or static position
    startEmpty: true, //weather to start with an empty or full ticker
    duplicate: false, //if there is less items then visible on the ticker you can duplicate the items to make it continuous
    // updatetype: 'swap', //how the update would occur options are 'reset' or 'swap'
    hoverpause: true //pause the ticker when hovered
  });

  $('#stop').click(function(){
    $('#ticker__items').webTicker('stop');
  });

  $('#continue').click(function(){
    $('#ticker__items').webTicker('cont');
  });

  var counter = 1;

  setInterval(function () {
    $('#ticker__items').webTicker(
      'update',
      '<li class="ticker__item"><span class="ticker__item__title">New news headline number ' + counter + '!</span><span class="ticker__item__source">15 seconds ago</span></li>',
      'swap')
    counter++;
  }, 5000)

});
