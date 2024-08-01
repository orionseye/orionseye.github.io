
$(function(){

  $('.typewriter-text').removeClass('start'); // in case the editor cached the class..remove it
  $('.typewriter-text').isInViewport(function (status) {
    if (status === 'entered') {
	  $(this).addClass('start');
	  // start animation at viewport by adding class 'start', animation css available at acustom.css
    }else{
	  $(this).removeClass('start');
	}
  })

});