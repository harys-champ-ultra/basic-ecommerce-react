import productList from "../data/products"
import PropTypes from "prop-types";
import { useEffect, useState } from "react"

function Products(props) {
    const [searchInput, setSearchInput] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const { quantity, isBtn } = props
    function handleChange(event) {
        setSearchInput(event.target.value)
    }
    useEffect(() => {
        const results = productList.filter((product) => (
            product.product_name.toLowerCase().includes(searchInput.toLowerCase())
        ));
        setSearchResults(results)
    }, [searchInput])
    return (
        <>
            <header className="dark">
                <nav className="search">
                    <ul>
                        <li><input type="search" value={searchInput} onChange={handleChange} placeholder="Search Products" /></li>
                    </ul>
                </nav>
            </header>
            <div className="wrap-box wrap-dark">
                <div className="box-layer box-cut-bottom">
                    <div className="layer-content">
                        <h2>Our Products</h2>
                        <p>Check out these popular products that are loved by our customers. Get your hands on these top picks to elevate your fashion game.</p>
                        {isBtn ? <button onClick={() => (window.location.href = "/products")}>View All</button> : null}
                    </div>
                </div>
                <div className="box-layer box-tetra box-cut-top">
                    {searchResults.length > 0 ? (
                        searchResults.slice(0, quantity).map((product) => (
                            <div key={product.product_id} className="layer-showcase layer-clickable" onClick={() => (window.location.href = `../products/${product.product_id}`)}>
                                <figure>
                                    <img src={product.product_img} alt={product.product_name} />
                                </figure>
                                <div className="showcase-row">
                                    <span className="row-title">{product.product_name}</span>
                                    <span className="row-price">${product.product_price}</span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="layer-content">
                            <h2>Not Found</h2>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

Products.propTypes = {
    quantity: PropTypes.number.isRequired,
    isBtn: PropTypes.bool.isRequired
};

export default Products