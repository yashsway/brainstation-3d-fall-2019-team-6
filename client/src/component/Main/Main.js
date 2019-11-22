import React from 'react'
import './Main.scss'
import Resturantlist from '../Resturantlist/Resturantlist'
import dataOne from '../../data/data-one.json'

class Main extends React.Component{
    state={
        list:[]
    }
    // clickHandler=(name)=>{
    //     if (name==)
    // }


    componentDidMount(){
        this.setState({list:dataOne})
    }

    render(){
        return(
        <>
         <h1 className="Chefe">Chefe</h1>
         <section className="resturant-section">
             <p className="Your-Best-Restaurant">Your Best Restaurant List</p>
             {this.state.list.map(resturant=>{return  <Resturantlist data={resturant}/>})}
         </section>
         </>
        )
    }
}

export default Main;