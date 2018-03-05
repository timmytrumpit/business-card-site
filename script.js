$('#web').on('mouseover', function(){
  $('#background').addClass('web-active');
  $('#background').removeClass('ui-active');
  $('#background').removeClass('graphic-active');
})
// $('#web').on('mouseout', function(){
//   $('#background').removeClass('web-active');
//   $('#background').removeClass('graphic-active');
// })



$('#ui').on('mouseover', function(){
  $('#background').addClass('ui-active');
  $('#background').removeClass('web-active');
  $('#background').removeClass('graphic-active');
})
// $('#ui').on('mouseout', function(){
//   $('#background').removeClass('ui-active');
// })



$('#graphic').on('mouseover', function(){
  $('#background').addClass('graphic-active');
  $('#background').removeClass('web-active');
  $('#background').removeClass('ui-active');
})
// $('#graphic').on('mouseout', function(){
  // $('#background').removeClass('graphic-active');
// })
