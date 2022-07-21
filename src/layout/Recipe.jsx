import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getMealById } from "../api";

function Recipe() {

    const {id} = useParams();


    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        getMealById(id)
            .then(data => setRecipe(() => data.meals[0]))
            .then(data => console.log(recipe))
            .catch(err => console.log(err))
    },[id])

    const {strMealThumb, strMeal, strInstructions, strYoutube} = recipe;


    return <div className="container recipe">
                <div className="row">
                    <div className="col s12">
                        <div className="recipeInstraction">
                            <img className="recipeImg" src={strMealThumb} alt={strMeal} />
                            <h4>How to cook this dish?</h4>
                            {strInstructions}
                        </div>
                        <div className="ingredient s12 m12 l6">
                            <table className="centered">
                                <thead>
                                    <tr>
                                        <th>Ingredient</th>
                                        <th>Measure</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.keys(recipe).map(key => {
                                        if(key.includes('Ingredient') && recipe[key]) {
                                            return (
                                                <tr key={key}>
                                                    <td>{recipe[key]}</td>
                                                    <td>
                                                        {
                                                            recipe[
                                                                `strMeasure${key.slice(13)}`
                                                            ]
                                                        }
                                                    </td>
                                                </tr>
                                            )
                                        }
                                        return null;
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <div className="ytbRecipe">
                            {recipe.strYoutube ? (
                                    <div className="row">
                                        <h5>Vide Recipe</h5>
                                        <iframe 
                                            title={id}
                                            src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`}
                                            allowFullScreen />
                                    </div>
                                ) : null
                            }
                    </div>
                    </div>
                </div>
            </div>

}

export {Recipe}