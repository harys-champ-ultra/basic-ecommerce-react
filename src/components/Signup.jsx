import { Link } from "react-router-dom"
import signImg from "../assets/sign_account.jpg"

function Signup() {
    return (
        <>
            <div className="wrap-box wrap-light">
                <div className="box-layer box-double box-cut-bottom">
                    <div className="layer-content">
                        <h2>Sing up to create your account</h2>
                        <p>Join our growing community and get exclusive access to exciting deals and offers. Sign up now to start your shopping journey!</p>
                        <form>
                            <input type="text" name="name" id="name" placeholder="Your name" />
                            <input type="email" name="email" id="email" placeholder="Your email" />
                            <input type="tel" name="phone" id="phone" placeholder="Your Phone" />
                            <input type="password" name="password" id="password" placeholder="Your password" />
                            <input type="password" name="cpassword" id="cpassword" placeholder="Confirm password" />
                            <button type="submit">Sign up</button>
                        </form>
                    </div>
                    <div className="layer-showcase">
                        <figure>
                            <img src={signImg} alt="Signup" />
                        </figure>
                    </div>
                </div>
                <div className="box-layer box-single box-cut-top">
                    <div className="layer-content">
                        <ul>
                            <li><Link to="/signin">Already user? Sign in</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup