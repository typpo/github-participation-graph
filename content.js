var code = '(' + function() {
  $('.repo-tab canvas.bars')
    .data('color-owner', '#3B5998')
    .data('color-all', '#ccc')
    .each(function() {
      new GitHub.ParticipationGraph($(this).get(0))
    });
} + ')();';

var script = document.createElement('script');
script.textContent = code;
(document.head||document.documentElement).appendChild(script);
script.parentNode.removeChild(script);
