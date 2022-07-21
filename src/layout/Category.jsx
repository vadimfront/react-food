import { useEffect, useState } from "react";
import { useParams, useNavigate  } from "react-router-dom"
import { getFilteredCategories } from "../api";
import { MealList } from "../Components/MealList";
import { Preloader } from "../Components/Preloader";

function Category() {
    const {name} = useParams();
    const [meals, setMeals] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        console.log(name)
        getFilteredCategories(name)
            .then((data) => setMeals(data.meals))
    },[name]);

    return <>
        <div className="category container">
            <div className="row">
                <button className="btn" onClick={() => navigate(-1)}>
                    Go back
                </button>
                {!meals.length ? <Preloader /> : <MealList meals={meals} />}
            </div>
        </div>
            
    </>

}

export {Category}