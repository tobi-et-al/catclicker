// client-side js

$(function(){
  var model = { 
    init: function() {
        if(!localStorage.cats){
          localStorage.cats = JSON.stringify([{name: 'cute cat',url: 'https://cdn.hyperdev.com/aeb5754d-bad1-46c1-a5cc-af80febef884%2Funnamed.jpg',count:0 },
          {name: 'aww cat',url: 'https://cdn.hyperdev.com/aeb5754d-bad1-46c1-a5cc-af80febef884%2Funnamed%20(1).jpg',count:0 },
          {name: 'nuke cat',url: 'https://cdn.hyperdev.com/aeb5754d-bad1-46c1-a5cc-af80febef884%2F0EvP5vXn.jpeg',count:0 },
          {name: 'booboo cat',url: 'https://cdn.hyperdev.com/aeb5754d-bad1-46c1-a5cc-af80febef884%2F3beb3e1f33a163269e0afc088113901c.jpg',count:0 },
          {name: 'bae cat',url: 'https://cdn.hyperdev.com/aeb5754d-bad1-46c1-a5cc-af80febef884%2Funnamed%20(2).jpg',count:0 }]);
        }

    },
    updateAllCats: function(id){
      var cats = JSON.parse(localStorage.cats);
      cats[id].count += 1;
      localStorage.cats = JSON.stringify(cats);

    },
    
    getAllCats: function(){
      return JSON.parse(localStorage.cats);
    }

  };
 var octopus = {
   init: function(){
     model.init();
     view.init();
     $('.note').on('click', function(e){
       octopus.updateCatRecords($(this).data('id'));
       octopus.getCat();
       view.renderMain($(this).data('id'));
     });
   },        
   getCats: function() {
      return model.getAllCats();
   },      
   getCat: function(id) {
      return model.getAllCats()[id];
   },
   updateCatRecords: function(id){
      model.updateAllCats(id);
   }
   
 };
 
 var view = {
   init: function(){
     this.renderlist();
     this.renderMain(0);
   },
   renderlist: function(){
     var htmlStr = '';
     octopus.getCats().forEach(function(cat, i){
         htmlStr += '<div><a href="#" class="note" data-id="'+ i +'">' + cat.name +'</a></div>';
      });
     $('#thumb').html(htmlStr);

   },
   renderMain: function(id){
     var htmlStr = '';
     cat = octopus.getCat(id);
     htmlStr += "<h1><span id='cattitle'>"+ cat.name + '😻</span>'+
        '<span id="counter">'+ cat.count +'</span></h1>' +
        '<div>' + '</div><img width="200" src="' + cat.url +'"/>' +'</div>';
     $('#area').html(htmlStr);     
   }
   
 };
 octopus.init();
});