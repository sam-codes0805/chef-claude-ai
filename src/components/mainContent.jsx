import React from "react"
import Ingredientslist from "./ingredients.jsx"
import RecipeGenerator from "../components/recipe.jsx"

export default function MainContent() {

    // const ingredientsList = ["oregano", "bread", "garlic", "butter", "common spices"]
    const [ingredients, setIngredients] = React.useState([])
    
    function eventHandler(formData) {
        if(formData.get("ingredient") != "") {
            const nextIngred = formData.get("ingredient")
            setIngredients(prevIngredients => ([...prevIngredients, nextIngred]))
        }       
    }

    const list = ingredients.map((item, index) => (
        <li key={index}>{item}</li>
    ))




    return (
        <main>

            <div className="m-2">
                <form action={eventHandler} className="mt-5 flex justify-center gap-2">
                    <input 
                        id="ingio"
                        className="w-2/4 border rounded-md px-2 py-0.5" 
                        type="text"  
                        name="ingredient"
                        placeholder="eg. Oregano" 
                    />
                    <button className="cursor-pointer bg-black text-white px-2 py-0.5 rounded-md" /*type="submit"*/>+ Add Ingredient</button>
                </form>
                </div>

        {ingredients.length < 4 && (
            <div className="text-center font-light">
                <h4>** Add at least 4 ingredients to generate a recipe **</h4>
            </div>
        )}
            
        <Ingredientslist list={list} />
                

        <RecipeGenerator 
        ingred = {ingredients}/>

        </main>
    )
}  