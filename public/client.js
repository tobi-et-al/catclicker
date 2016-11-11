// client-side js


var images = [['https://cdn.hyperdev.com/aeb5754d-bad1-46c1-a5cc-af80febef884%2Funnamed.jpg','cute cat'],
              ['https://cdn.hyperdev.com/aeb5754d-bad1-46c1-a5cc-af80febef884%2Funnamed%20(1).jpg','aww cate'],
              ['https://cdn.hyperdev.com/aeb5754d-bad1-46c1-a5cc-af80febef884%2F0EvP5vXn.jpeg','nuke cate'],
              ['https://cdn.hyperdev.com/aeb5754d-bad1-46c1-a5cc-af80febef884%2F3beb3e1f33a163269e0afc088113901c.jpg','booboo cate'],
              ['https://cdn.hyperdev.com/aeb5754d-bad1-46c1-a5cc-af80febef884%2Funnamed%20(2).jpg','bae cate']];
$('#thumb').html();
for (i = 0; i < images.length; i++){ 
  $('#thumb').append("<img width='150' src='"+ images[i][0]+"'/>");
  
  var num = i;
}
var count = 0;

 imgs = document.getElementsByTagName('img');
 for(i=0; i < imgs.length; i++){
  imgs[i].addEventListener('click', (function(i, images){
    return function(){
        $('#area').html("<img width='400' src='"+ images[i][0]+ "'/>");
        count += 1; document.getElementById('counter').innerText = (count) 
        document.getElementById('cattitle').innerText = (images[i][1]) 
    };
  })(i, images));
 }