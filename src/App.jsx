import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import ProductsPage from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import CategoriesProductsPage from './pages/Categories'
import Signin from './pages/Signin'
import Signup from './pages/Signup'

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='products' element={<ProductsPage />} />
                <Route path='products/:id' element={<ProductDetails />} />
                <Route path='categories/:id' element={<CategoriesProductsPage />} />
                <Route path='signin' element={<Signin />} />
                <Route path='signup' element={<Signup />} />
            </Routes>
        </>
    )
}

export default App