import productList from "../data/products"
import { useParams } from "react-router-dom"

function CategoriesProducts() {
    const { id } = useParams()
    const products = productList.filter((product) => product.category_id === Number(id));
    return (
        <>
            {products ? (
                <div className="wrap-box wrap-dark">
                    <div className="box-layer box-cut-bottom">
                        <div className="layer-content">
                            <h2>Our Products</h2>
                            <p>Check out these popular products that are loved by our customers. Get your hands on these top picks to elevate your fashion game.</p>
                        </div>
                    </div>
                    <div className="box-layer box-tetra box-cut-top">
                        {products.map((product) => (
                            <div key={product.product_id} className="layer-showcase layer-clickable" onClick={() => (window.location.href = `../products/${product.product_id}`)}>
                                <figure>
                                    <img src={`../${product.product_img}`} alt={product.product_name} />
                                </figure>
                                <div className="showcase-row">
                                    <span className="row-title">{product.product_name}</span>
                                    <span className="row-price">${product.product_price}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="wrap-box wrap-dark">
                    <div className="box-layer box-cut-bottom">
                        <div className="layer-content">
                            <h2>Not Found</h2>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default CategoriesProducts