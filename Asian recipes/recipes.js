
const apiUrl = 'https://api.edamam.com/api/recipes/v2?type=public&q=mexican&app_id=99bcacd8&app_key=742d353ec85cd339808b8950efdd9fbf&mealType=Breakfast&mealType=Dinner&mealType=Lunch&random=true&field=uri&field=label&field=image&field=images&field=source&field=url&field=ingredientLines&field=shareAs';

const button = document.querySelector('#fetchNew');

//Det är denna funktion som ska användas för att öppna sakerna på en gång istället för knappen
    document.addEventListener("DOMContentLoaded", async e => {
    console.log('hej hej!!!');
    
    const response = await fetch(apiUrl);
    console.log('2. got response');
    
    const data = await response.json();
    console.log('3. Nu kanske vi har fått vår data som ett objekt asså!' , data);
    
     const allRecepies = data.hits;
     
     const recipeContainer = document.querySelector('#all_recepies');
     allRecepies.forEach( r => {
         const recipeElement = createRecipeElement(r);
         recipeContainer.appendChild(recipeElement);
         
     });
    });

    // document.querySelector('#overlay').addEventListener('click', () => {
    //     document.querySelector('#overlay').classList.toggle('show');
    // })

 
     function createRecipeElement(recipe) {
        const recipeElement = document.createElement('div');
        recipeElement.className = 'recipe'
   
         const recipeHeading = document.createElement('p');
         recipeHeading.innerHTML = recipe.recipe.label;
         recipeHeading.className = 'title';

         let recipeImage = document.createElement('img'); 
         recipeImage.src = recipe.recipe.images.SMALL.url;
         recipeImage.className = 'recipe_image';

         let ingredientLines = document.createElement('p');
         ingredientLines.innerHTML = recipe.recipe.ingredientLines;
         ingredientLines.className = 'ingredients';

         var a = document.createElement('a'); 

         a.href = recipe.recipe.shareAs; 
          recipeImage.addEventListener('click', function () {
             location.href = a.href;
              console.log('klickat här!', goToLink);
          })
           
         recipeElement.appendChild(recipeHeading);
         recipeElement.appendChild(recipeImage);
         recipeElement.appendChild(ingredientLines);
         recipeElement.appendChild(a);
        return recipeElement

     };

     //    funktionen nedan ska vara openlightbox() istället och öppna ett overlay-fönster med titel, bild och ingredienser. 
     function openOverlay() {

        console.log('overlay????');
           
       
        document.querySelector('#overlay figcaption').innerHTML = recipeHeading;
           document.querySelector('#overlay').classList.toggle('show');
       };
   