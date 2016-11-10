// client-side js


var img = document.getElementsByTagName('img');
var count = 0;

function updatecounter  (e){ count += 1; document.getElementById('counter').innerText = (count) }

for (i = 0; i < img.length; i ++){
  img[i].addEventListener('click', updatecounter);
}
