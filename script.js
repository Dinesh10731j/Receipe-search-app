const receipeSearch = document.querySelector("#receipe-search");

const receipeName = document.querySelector(".receipe-name");

const displayreceipeImage = document.querySelector("#receipe-image");

const ingredientsList = document.querySelector("#ingredients-list");

const instructionList = document.querySelector("#instruction-display-list");

const displayreceipeData = (image, ingredients, instructions, receipename) => {
  // Update the code to display the recipe data as needed;
  
  receipeName.innerHTML = `Receipe:${receipename} 😊`;

  const createingredientList = document.createElement("li");

  const createinstructionList = document.createElement("li");

  createinstructionList.innerHTML = instructions;

  createinstructionList.classList.add('instruction-color')

  createingredientList.classList.add('ingredient-color')

createingredientList.innerHTML= ingredients;

ingredientsList.appendChild(createingredientList);

instructionList.appendChild(createinstructionList)


  displayreceipeImage.src =image;
  displayreceipeImage.alt = receipename;

  

  
};



const getReceipe = async (val) => {
  try {
    const data = await fetch(`https://dummyjson.com/recipes/search?q=${val}`);

    const res = await data.json();

    console.log(res);

   

    // Check if any recipes are returned
    if (res.total > 0) {
      const recipe = res.recipes[0]; // Access the first recipe
      displayreceipeData(
        recipe.image,
        recipe.ingredients ,
        recipe.instructions,
        recipe.name,
      );
    } 
    
    else {
     
      receipeName.innerHTML=`Receipe not found 🥺`
  
    }
  } catch (error) {
    // Handle fetch or JSON parsing errors
    receipeName.innerHTML("Error fetching recipe data:", error);
  }
};

receipeSearch.addEventListener("keyup", (e) => {
  getReceipe(e.target.value.trim());
});
