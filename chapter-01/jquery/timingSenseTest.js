$(function() {
  var startTime;

  $('#hold-me').mousedown(function() {
    startTime = new Date();
  })

  $('#hold-me').mouseup(function() {
    if (startTime) {
      const elapsedMilliseconds = (new Date() - startTime);

      startTime = null;
      $('#hold-time').text(elapsedMilliseconds);

      $.ajax('https://timing-sense-score-board.herokuapp.com/score/' + elapsedMilliseconds).done((res) => {
        $('#rank').text('你超过了' + res.rank + '% 的用户');
      });
    }
  })
})
