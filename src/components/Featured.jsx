import productList from "../data/products"

function Featured() {

    // get random index from 0 to last
    const randomIndex = Math.floor(Math.random() * (productList.length - 1));

    return (
        <>
            <div className="wrap-box wrap-light">
                <div className="box-layer box-triple">
                    <div className="layer-content">
                        <h2>Stay Stylish with Our Fashion Collection</h2>
                        <p>Explore our wide range of fashionable clothing, accessories, and beauty products. Stay ahead in style with our trendy and high-quality products.</p>
                        <button onClick={() => (window.location.href="/products")}>View All</button>
                    </div>
                    {/* only 2 indexes from product array */}
                    {productList.slice(randomIndex, randomIndex + 2).map((product) => (
                        <div key={product.product_id} className="layer-showcase layer-clickable" onClick={() => (window.location.href=`products/${product.product_id}`)}>
                            <figure>
                                <img src={product.product_img} alt={product.product_name} />
                            </figure>
                            <div className="showcase-row">
                                <span className="row-title">{product.product_name}</span>
                                <span className="row-price">${product.product_price}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Featured