// client-side js


var img = document.getElementById("catty");
var i = 0 ; img.addEventListener('click', function(e){ i += 1; document.getElementById('counter').innerText = (i) });