import { useState } from "react"
import categoryList from "../data/categories"
import { Link } from "react-router-dom"

function Header() {
    const [menuBar, setMenuBar] = useState(-1)
    const [itemsBar, setItemsBar] = useState(-1)
    function handleMenuBar() {
        setMenuBar((menuBar) => menuBar + 1)
    }
    function handleItemsBar() {
        setItemsBar((itemsBar) => itemsBar + 1)
    }
    const necessaries = [
        {
            "id": 1,
            "name": "Wishlist",
            "link": "#"
        },
        {
            "id": 2,
            "name": "Account",
            "link": "signin"
        },
        {
            "id": 3,
            "name": "Bag",
            "link": "#"
        }
    ]
    return (
        <>
            <header className="dark">
                <nav className="web">
                    <ul>
                        <li><Link to="/" className="logo">Ecommerce&reg;</Link></li>
                    </ul>
                    <ul>
                        <li><a onClick={handleItemsBar}>Categories</a></li>
                    </ul>
                    <ul>
                        <li><Link to="/products">Search</Link></li>
                        {necessaries.map((necessary) => (
                            <li key={necessary.id}><Link to={`/${necessary.link}`}>{necessary.name}</Link></li>
                        ))}
                    </ul>
                </nav>
                <nav className="mobile">
                    <ul>
                        <li><Link to="/" className="logo">Ecommerce&reg;</Link></li>
                    </ul>
                    <ul>
                        <li><Link to="/products">Search</Link></li>
                        <li><a onClick={handleMenuBar} className="menu">Menu</a></li>
                    </ul>
                </nav>
                <nav className="items" style={{ display: itemsBar % 2 === 0 ? "flex" : "none" }}>
                    <ul>
                        {categoryList.map((category) => (
                            <li key={category.category_id}><Link to={`/categories/${category.category_id}`}>{category.category_name}</Link></li>
                        ))}
                    </ul>
                </nav>
                <nav className="tray" style={{ display: menuBar % 2 === 0 ? "flex" : "none" }}>
                    <ul>
                        {categoryList.map((category) => (
                            <li key={category.category_id}><Link to={`/categories/${category.category_id}`}>{category.category_name}</Link></li>
                        ))}
                        {necessaries.map((necessary) => (
                            <li key={necessary.id}><Link to={`/${necessary.link}`}>{necessary.name}</Link></li>
                        ))}
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header