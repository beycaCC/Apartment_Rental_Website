import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function HomePage() {

    return (
        <div>
            <div className="Home-Page">
                <Navbar></Navbar>
                {/*<img src={homeIMG2} className="home-background" alt='apt background'/>*/}
                <div className="Home-text">CC's Apartment Rental Web</div>
            </div>

            {/*<body className="home-body">*/}
            {/*    <h1> This is the body part. </h1>*/}
            {/*</body>*/}

            <footer className="responsive-footer">
                <Footer/>
            </footer>
        </div>
    )
}

export default HomePage