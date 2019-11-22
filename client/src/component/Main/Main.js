import React from 'react'
import './Main.scss'
import Hero from '../Hero/Hero'
import ProductDetails from '../ProductDetails/ProductDetails'

class Main extends React.Component{


    render(){
        return(
            <>
            {/* <Hero/> */}
            <ProductDetails/>
            </>
        )
    }
}

export default Main;