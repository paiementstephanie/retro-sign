var $svg = $('svg');

$('.btn').on('click', function () {
  if ($svg.hasClass('is-engaged')) {
    $svg.addClass('is-disengaged');
    $svg.removeClass('is-engaged');
  } else {
    $svg.addClass('is-engaged');
    $svg.removeClass('is-disengaged');
  }
});
