import categoryList from "../data/categories"
import imgCategory from "../assets/categories.jpg"
import { Link } from "react-router-dom"

function Categories() {
    return (
        <>
            <div className="wrap-box wrap-light">
                <div className="box-layer box-double">
                    <div className="layer-content">
                        <h2>Find Your Style</h2>
                        <p>Explore our categories to find the perfect fashion items that suit your style and preferences.</p>
                        {categoryList.length === 0 && <p>Empty List</p>}
                        <ul>
                            {categoryList.map((category) => (
                                <li key={category.category_id}><Link to={`/categories/${category.category_id}`}>{category.category_name}</Link></li>
                            ))}
                        </ul>
                    </div>
                    <div className="layer-showcase">
                        <figure>
                            <img src={imgCategory} alt="Categories" />
                        </figure>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Categories