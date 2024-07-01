import React from "react";
import Container from "../Container/Container";
import './home.css'
import ProductList from "../ProductList/ProductList";
import Footer from "../Footer/Footer";
import banner from "../../assets/bg.jpg"

function Home() {
    return(
        <>
          <Container>
           <div className="home" style={{backgroundImage:{banner}}}>
            <div className="content">
                <h1>Always Be <br /> Original</h1>
                <h5>New Arrivals Are Here</h5>
                <button>Shop Now</button>
            </div>
            </div> 
            </Container>  
        </>
    )
}


export default Home;