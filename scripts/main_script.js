var dialog = document.querySelector('dialog');
document.querySelector('#show').onclick = function() {
  dialog.show();
};
document.querySelector('#close').onclick = function() {
  dialog.close();
};

function changeSlideMix(obj,block,li){
  $(obj).parent().find(block+' '+li).stop(true,true);
  if($(obj).hasClass('slider-prevmix')){
  liLast=$(obj).parent().find(block+' '+li+':last');
  liLast.prependTo(liLast.parent()).css('margin-left','-'+liLast.width()+'px').animate({marginLeft:0});}
  else {
  liFirst=$(obj).parent().find(block+' '+li+':eq(0)');
  liFirst.animate({marginLeft:0-liFirst.width()},function(){
  liFirst.css('margin-left',0).appendTo(liFirst.parent());
  }); } }
  $(document).ready(function(){
  setInterval(function(){changeSlideMix('.slider-nextmix', '.horizontal-slidermix','.slide-itemmix')}, 2000);
  });