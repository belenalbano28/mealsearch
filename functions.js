
$( document ).ready(function() {
    $('#alert').css('display','none');

        letter=generateRandomLetter();
        recetasletra(letter);
 
});

function recetasletra(letter){
    
    url="https://www.themealdb.com/api/json/v1/1/search.php?f="+letter
    fetch(url).then(function(response) {
       return response.json();
      }).then(function(data) {
        data = JSON.stringify(data);
       var array= new Array(JSON.parse(data));
       var y;
       var recetas=document.getElementById('recetas');
       recetas.innerHTML='';

        for (let index = 0; index < array[0].meals.length; index++) {
            var z=$('#recetas').html();
            var idMeal=array[0].meals[index].idMeal;
            var nombre=array[0].meals[index].strMeal;
            var foto=array[0].meals[index].strMealThumb;
            var video=array[0].meals[index].strYoutube;
            if(index%3==0){
                y=index;
                //primera vez,multiplo de 3. 0,3,6,9
                var x='';
               x='<div class="row people"><div class="col-md-6 col-lg-4 item" onclick="pasardatos('+idMeal+')" ><div class="box"><img class="rounded-circle" src="'+foto+'"><h3 class="name">'+nombre+'</h3><a class="title" href="'+video+'">Youtube Video here</a></div></div>';
               if(index==array[0].meals.length-1){
                recetas.innerHTML = z+x+'</div>';
             }
            }else if(index==y+1){
                //segundo item 
                x+='<div class="col-md-6 col-lg-4 item" onclick="pasardatos('+idMeal+')" ><div class="box"><img class="rounded-circle" src="'+foto+'"><h3 class="name">'+nombre+'</h3><a class="title" href="'+video+'">Youtube Video here</a></div></div>';
                if(index==array[0].meals.length-1){
                    recetas.innerHTML = z+x+'</div>' ;
                }
            }else if(index==y+2){
                //el ultimo item
                x+='<div class="col-md-6 col-lg-4 item" onclick="pasardatos('+idMeal+')" ><div class="box"><img class="rounded-circle" src="'+foto+'"><h3 class="name">'+nombre+'</h3><a class="title" href="'+video+'">Youtube Video here</a></div></div></div>';
                recetas.innerHTML = x+z;
            }
    
           }
           return true;
      
       
      }).catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
}

function generateRandomLetter() {
    const alphabet = "abcdefghijklmnoprstuv"
  
    return alphabet[Math.floor(Math.random() * alphabet.length)]
  }

  function search(){
    x=document.getElementById('buscar').value;
    if(x.length==1){
        recetasletra(x);

        if($('#recetas').html()==''){
            setTimeout(function(){
                $('#alert').css('display','none'); 
            }, 3000);
            $('#alert').css('display','block');
                $('#alert').html('Oops, we do not find recepies starting with '+x+'. Try another one.');
          }
    }else{
         var val=x.indexOf(' ');
        if(val==-1){ 
         recetasnombre(x); 
          if($('#recetas').html()==''){
            setTimeout(function(){
                $('#alert').css('display','none'); 
            }, 6000);
            $('#alert').css('display','block');
                $('#alert').html('Oops, we do not find recepies for: '+x+'. Try another one.');
          }
        }else{
            setTimeout(function(){
                $('#alert').css('display','none'); 
            }, 3000);
            $('#alert').css('display','block');
                $('#alert').html('Only one word for names! Try again.');
        }
    }
  }

function recetasnombre(n){
    url="https://www.themealdb.com/api/json/v1/1/search.php?s="+n
    fetch(url).then(function(response) {
       return response.json();
      }).then(function(data) {
        data = JSON.stringify(data);
       var array= new Array(JSON.parse(data));
       var y;
       var recetas=document.getElementById('recetas');
       recetas.innerHTML='';
        for (let index = 0; index < array[0].meals.length; index++) {
            var z=$('#recetas').html();
            var idMeal=array[0].meals[index].idMeal;
            var nombre=array[0].meals[index].strMeal;
            var foto=array[0].meals[index].strMealThumb;
            var video=array[0].meals[index].strYoutube;
            if(index%3==0){
                y=index;
                //primera vez,multiplo de 3. 0,3,6,9
                var x='';
               x='<div class="row people"><div class="col-md-6 col-lg-4 item" onclick="pasardatos('+idMeal+')" ><div class="box"><img class="rounded-circle" src="'+foto+'"><h3 class="name">'+nombre+'</h3><a class="title" href="'+video+'">Youtube Video here</a></div></div>';
               if(index==array[0].meals.length-1){
                recetas.innerHTML = z+x+'</div>';
             }
            }else if(index==y+1){
                //segundo item 
                x+='<div class="col-md-6 col-lg-4 item" onclick="pasardatos('+idMeal+')" ><div class="box"><img class="rounded-circle" src="'+foto+'"><h3 class="name">'+nombre+'</h3><a class="title" href="'+video+'">Youtube Video here</a></div></div>';
                if(index==array[0].meals.length-1){
                    recetas.innerHTML = z+x+'</div>' ;
                }
            }else if(index==y+2){
                //el ultimo item
                x+='<div class="col-md-6 col-lg-4 item" onclick="pasardatos('+idMeal+')" ><div class="box"><img class="rounded-circle" src="'+foto+'"><h3 class="name">'+nombre+'</h3><a class="title" href="'+video+'">Youtube Video here</a></div></div></div>';
                recetas.innerHTML = x+z;
            }
    
           }
           return true;
       
      
       
      }).catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
}