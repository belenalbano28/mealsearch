
$( document ).ready(function() {
    letter=generateRandomLetter();
    url="https://www.themealdb.com/api/json/v1/1/search.php?f="+letter
    fetch(url).then(function(response) {
       return response.json();
      }).then(function(data) {
        data = JSON.stringify(data);
       var array= new Array(JSON.parse(data));
       console.log(array);
       var y;
       var recetas=document.getElementById('recetas');
       
       for (let index = 0; index < array[0].meals.length; index++) {
        var z=$('#recetas').html();
        var idMeal=array[0].meals[index].idMeal;
        var nombre=array[0].meals[index].strMeal;
        var foto=array[0].meals[index].strMealThumb;
        var video=array[0].meals[index].strYoutube;
        console.log(array[0].meals.length);
        if(index%3==0){
            y=index;
            //primera vez,multiplo de 3. 0,3,6,9
            var x='';
           x='<div class="row people"><div class="col-md-6 col-lg-4 item" onclick="pasardatos('+idMeal+')" ><div class="box"><img class="rounded-circle" src="'+foto+'"><h3 class="name">'+nombre+'</h3><a class="title" href="'+video+'">Youtube Video here</a></div></div>';
        }else if(index==y+1){
            //segundo item 
            x+='<div class="col-md-6 col-lg-4 item" onclick="pasardatos('+idMeal+')" ><div class="box"><img class="rounded-circle" src="'+foto+'"><h3 class="name">'+nombre+'</h3><a class="title" href="'+video+'">Youtube Video here</a></div></div>';
            if(index==array.length){
                recetas.innerHTML = x+'</div>' +z;
            }
        }else if(index==y+2){
            //el ultimo item
            x+='<div class="col-md-6 col-lg-4 item" onclick="pasardatos('+idMeal+')" ><div class="box"><img class="rounded-circle" src="'+foto+'"><h3 class="name">'+nombre+'</h3><a class="title" href="'+video+'">Youtube Video here</a></div></div></div>';
            if(index==array.length){
                recetas.innerHTML = x+'</div>'+z;
            }
            recetas.innerHTML = x+z;
        }

        
        


       }
       
      }).catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
});


function generateRandomLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
  
    return alphabet[Math.floor(Math.random() * alphabet.length)]
  }

  function pasardatos(idMeal){
    console.log(idMeal);
  }