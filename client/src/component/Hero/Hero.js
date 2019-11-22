import React from 'react'
import '../Hero/Hero.scss'

class Hero extends React.Component{
    render(){
        return(
            <div className="hero">
                <h1 className="hero__header">Chefe</h1>
                <p className="hero__header-description">Find your seat at the table.</p>
                <form>
                    <div className="hero__search-container">
                        <p className="hero__search-description">Where would you like to eat?</p>
                        <textarea className="hero__search-bar" placeholder="Enter location"></textarea>
                    </div>
                    <button className="hero__button">Take Me There</button>
                </form>
            </div>
        )
    }
}


export default Hero