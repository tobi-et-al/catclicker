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
    updateAllCats: function(){
      var cats = JSON.parse(localStorage.cats);
      cats[octopus.getcurrentCat()].count = parseInt(cats[octopus.getcurrentCat()].count) + 1;
      localStorage.cats = JSON.stringify(cats);

    },
    updateSingleCats: function(data){
        var cats = JSON.parse(localStorage.cats);
        cats[octopus.getcurrentCat()] = data;
        localStorage.cats = JSON.stringify(cats);

    },
    
    getAllCats: function(){
      return JSON.parse(localStorage.cats);
    }

  };
 var octopus = {
   init: function(){
     octopus.setcurrentCat(0);
     model.init();
     view.init();
     $('.note').on('click', function(e){
       octopus.updateCatRecords($(this).data('id'));
       octopus.setcurrentCat($(this).data('id'));
       view.renderMain($(this).data('id'));
       admin.renderForm(octopus.getCat($(this).data('id')));
     });
     $('#admin').on('click', function(e){ 
        $('#admin-panel').show();
        admin.renderForm(model.getAllCats()[octopus.getcurrentCat()]);
     });
     $('#cancel').on('click', function(e){ 
        $('#admin-panel').hide();
     });
     
     $('#save').on('click', function(e){  
         // Get all the forms elements and their values in one step
        octopus.updateAllCatRecords({name: $('#admin-panel #name').val(),url: $('#admin-panel #url').val(),count:$('#admin-panel #count').val() });
        $('#admin-panel').hide();
        view.renderMain();
     });
   },        
   getCats: function() {
      return model.getAllCats();
   },      
   getCat: function(id) {
      return model.getAllCats()[id];
   },
   setcurrentCat: function(id){
      this.currentCat = id;
   },
   getcurrentCat: function(){
      return this.currentCat;
   },
   updateCatRecords: function(id){
      model.updateAllCats(id);
   },
   updateAllCatRecords: function(data){
      model.updateSingleCats(data);
   }
   
 };
 
 var view = {
   init: function(){
     this.renderlist();
     this.renderMain(octopus.setcurrentCat(0));
   },
   renderlist: function(){
     var htmlStr = '';
     octopus.getCats().forEach(function(cat, i){
         htmlStr += '<div><a href="#" class="note" data-id="'+ i +'">' + cat.name +'</a></div>';
      });
     $('#thumb').html(htmlStr);

   },
   renderMain: function(){
     var htmlStr = '';
     cat = octopus.getCat(octopus.getcurrentCat());
     htmlStr += "<h1><span id='cattitle'>"+ cat.name + '😻</span>'+
        '<span id="counter">'+ cat.count +'</span></h1>' +
        '<div>' + '</div><img width="400" src="' + cat.url +'"/>' +'</div>';
     $('#area').html(htmlStr);     
   }
   
 };
 var admin = {
   renderForm: function(currentdata){

     $('#admin-panel #name').val(currentdata.name);
     $('#admin-panel #url').val(currentdata.url);
     $('#admin-panel #count').val(currentdata.count);
   }
   
 };
 octopus.init();
});