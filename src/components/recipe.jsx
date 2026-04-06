import { GoogleGenAI } from "@google/genai"
import { useState } from "react";
import React from "react"


const RecipeGenerator = (props) => {
        const [recipe, setRecipe] = useState(null);
        const [loading, setLoading] = useState(false);
        const recipeSection = React.createRef(null);
        console.log(recipeSection);

        React.useEffect(() => {
            if (recipe !== null && recipeSection.current !== null) {
                recipeSection.current.scrollIntoView({ behavior: "smooth" });
            }
        }, [recipe]);
        
        
        const generateRecipe = async () => {
            
            setLoading(true);
            try {
                const ai = new GoogleGenAI({
                    apiKey: import.meta.env.VITE_API_KEY,
                });
                const prompt = `You are a master chef. Create a creative recipe using these ingredients: ${props.ingred.join(", ")}. 
                Assume the user has basic staples like salt, water, and oil.`;
                const result = await ai.models.generateContent({
                    model: "gemini-2.5-flash",
                    contents: [
                        {
                            role: "user",
                            parts: [{text: prompt}]
                        }
                    ],
                    config: {
                        responseMimeType: "application/json",
                        responseSchema: {
                            type: "object",
                            properties: {
                                Title: { type: "string" },
                                prepTime: { type: "string" },
                                ingredientsWithAmounts: { 
                                    type: "array",
                                    items: { type: "string" }
                                },
                                steps: {
                                    type: "array",
                                    items: { type: "string" }
                                }
                            },
                            required: ["Title", "prepTime", "ingredientsWithAmounts", "steps"]
                        }
                    }
                })
    
                const data = JSON.parse(result.text);
                setRecipe(data);
            } catch (error) {
                console.error("Error: ", error);
            }
            setLoading(false);
    
            };
            return (
                <div>
                    {props.ingred.length > 3 && <div className="my-4 mx-8 px-2 py-4 place-items-center rounded-lg bg-gray-100 flex" ref = {recipeSection}>
                        <div className="ml-1.5 w-3/4">
                            <h1 className="font-semibold text-xl">Ready for the recipe?</h1>
                            <p className="text-sm">Generate a recipe from your list of ingredients.</p>
                        </div>
                        <div className="mr-2 w-1/4 justify-end flex">
                            <button onClick={generateRecipe} disabled={loading} target="#recipe"className="bg-black cursor-pointer text-white font-semibold text-sm rounded-md p-2">{loading ? "Chef is cooking..." : "Get a Recipe"}</button>
                        </div>
                    </div>}
        
                    {recipe && (
                        <div className="mx-8 px-2 py-4 rounded-lg bg-gray-100" id="recipe">
                            <h1 className="font-bold uppercase text-2xl">{recipe.Title}</h1><br />
                            <p className="text-sm">Time: {recipe.prepTime}</p><br />
                            <h3 className="font-semibold">Ingredients:</h3>
                            <ul className="px-5 py-2">
                                {recipe.ingredientsWithAmounts.map((item, i) => <li className="py-0.5" key={i}>{item}</li>)}
                            </ul>
                            <h3 className="font-semibold">Instructions:</h3>
                                 <ol className="px-5 py-2">
                                    {recipe.steps.map((step, i) => <li className="py-1" key={i}>{step}</li>)}
                                </ol>
                     </div>
                    )}
        
                </div>
            );
    }; 

export default RecipeGenerator;

