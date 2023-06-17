import heroImg from "../assets/fashion.jpg"

function Hero() {
    return (
        <>
            <div className="wrap-box wrap-light">
                <div className="box-layer">
                    <div className="layer-content">
                        <h1>Discover the Latest Fashion Trends</h1>
                        <br />
                            <figure>
                                <img src={heroImg} alt="Fashion" />
                            </figure>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero