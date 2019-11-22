import React from 'react'
import '../Hero/Hero.scss'

class Hero extends React.Component{

     onSubmit=(event)=>{
        event.preventDefault();
        let name=event.target.name.value
        this.props.clickHandler(name)
     }
    render(){
        return(
            <div className="hero">
                <h1 className="hero__header">Chefe</h1>
                <p className="hero__header-description">Find your seat at the table.</p>
                <form  onSubmit={this.onSubmit}>
                    <div className="hero__search-container">
                        <p className="hero__search-description">Where would you like to eat?</p>
                        <textarea name="name" className="hero__search-bar" placeholder="Enter location"></textarea>
                    </div>
                    <button className="hero__button">Take Me There</button>
                </form>
            </div>
        )
    }
}


export default Hero