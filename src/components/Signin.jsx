import { Link } from "react-router-dom"
import signImg from "../assets/sign_account.jpg"

function Signin() {
    return (
        <>
            <div className="wrap-box wrap-light">
                <div className="box-layer box-double box-cut-bottom">
                    <div className="layer-content">
                        <h2>Sing in to your account</h2>
                        <p>Please sign in to access your account and enjoy a seamless shopping experience.</p>
                        <form>
                            <input type="email" name="email" id="email" placeholder="Your email" />
                            <input type="password" name="password" id="password" placeholder="Your password" />
                            <button type="submit">Sign in</button>
                        </form>
                    </div>
                    <div className="layer-showcase">
                        <figure>
                            <img src={signImg} alt="Signin" />
                        </figure>
                    </div>
                </div>
                <div className="box-layer box-single box-cut-top">
                    <div className="layer-content">
                        <ul>
                            <li><Link to="/signup">New user? Sign up</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin