import React from "react";
import SlideHome from "./ziffHomeComp/SliceHome";
import WhatWeDo from "./ziffHomeComp/WhatWeDo";
import Products from "./ziffHomeComp/ProductsComp";

const Home = () => {
    return(
        <div>
            <SlideHome />
            <WhatWeDo />
            <Products />    
        </div>
    )
}
export default Home;