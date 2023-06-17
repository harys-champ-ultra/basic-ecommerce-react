import productList from "../data/products"
import { useParams } from "react-router-dom"

function ProductDetails() {
    const { id } = useParams()
    const product = productList.find(product => product.product_id === Number(id))
    return (
        <>
            <div className="wrap-box wrap-light">
                {product ? (
                    <div className="box-layer box-double">
                        <div className="layer-content">
                            <h2>{product.product_name}</h2>
                            <p>{product.product_description}</p>
                            <br />
                            <p>${product.product_price}</p>
                            <button>Add to Basket</button>
                        </div>
                        <div className="layer-showcase">
                            <figure>
                                <img src={`/${product.product_img}`} alt={product.product_name} />
                            </figure>
                        </div>
                    </div>
                ) : (
                    <div className="box-layer box-double">
                        <div className="layer-content">
                            <h2>Not Found</h2>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default ProductDetails