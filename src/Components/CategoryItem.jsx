import { Link } from "react-router-dom";

function CategoryItem(props) {
    const { 
            strCategoryThumb,
            strCategoryDescription,
            strCategory,
         } = props;


    return <div className="card">
                <div className="card-image">
                    <img src={strCategoryThumb} alt={strCategory}/>
                </div>
                <div className="card-content">
                    <span className="card-title">{strCategory}</span>
                    <span className="description">{strCategoryDescription.slice(0, 60)}...</span>
                </div>
                <div className="card-action">
                  <Link to={`/category/${strCategory}`} className="btn" >Watch category</Link>
                </div>
            </div>

}



export {
    CategoryItem
}