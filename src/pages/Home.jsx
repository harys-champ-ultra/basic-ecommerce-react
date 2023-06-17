import Header from "../components/Header"
import Hero from "../components/Hero"
import Featured from "../components/Featured"
import Categories from "../components/Categories"
import Products from "../components/Products"
import Footer from "../components/Footer"

function HomePage() {
    return (
        <>
            <Header />
            <Hero />
            <Featured />
            <Categories />
            <Products quantity={4} isBtn={true} />
            <Footer />
        </>
    )
}

export default HomePage