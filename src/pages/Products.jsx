import Header from "../components/Header"
import ProductsComponent from "../components/Products"
import Footer from "../components/Footer"
import productQuantities from "../data/products"

function Products() {
    const quantities = productQuantities.length
    return (
        <>
            <Header />
            <ProductsComponent quantity={quantities} isBtn={false} />
            <Footer />
        </>
    )
}

export default Products