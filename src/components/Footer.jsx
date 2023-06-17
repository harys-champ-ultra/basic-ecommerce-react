import { Link } from "react-router-dom"

function Footer() {
    return (
        <>
            <footer className="light">
                <nav className="flex">
                    <ul>
                        <li><Link to="/" className="logo">Ecommerce&reg;</Link></li>
                    </ul>
                    <ul>
                        <li><a href="https://github.com/harys-champ-ultra" target="_blank" rel="noreferrer">Github</a></li>
                        <li><a href="https://www.linkedin.com/in/haryschampultra" target="_blank" rel="noreferrer">LinkedIn</a></li>
                        <li><a href="https://www.instagram.com/harys_champ_ultra" target="_blank" rel="noreferrer">Instagram</a></li>
                    </ul>
                </nav>
            </footer>
        </>
    )
}

export default Footer