import React from 'react'
import './Main.scss'
import Resturantlist from '../Resturantlist/Resturantlist'
import dataOne from '../../data/data-one.json'
import dataTwo from '../../data/data-two.json';
import dataThree from '../../data/data-three.json'

import Hero from '../Hero/Hero'


class Main extends React.Component{
    state={
        list:[],
        show:false
    }
    clickHandler=(name)=>{
     
        if (name ==="Gurgaon"){
            this.setState({list:dataTwo ,show:true})
        }else if (name === "Noida"){
            this.setState({list:dataThree ,show:true})
        }else if (name === "New Delhi"){
            this.setState({list:dataOne ,show:true})
        }
    }


    componentDidMount(){
        this.setState({list:dataOne})
    }

    render(){
        return(
        <section>
        <Hero clickHandler={this.clickHandler}/>
        {this.state.show? 
        <><h1 className="Chefe">Chefe</h1>
         <section className="resturant-section">
             <p className="Your-Best-Restaurant">Your Best Restaurant List</p>
             {this.state.list.map(resturant=>{return  <Resturantlist data={resturant}/>})}
             </section> </>: null}
         </section>
    
        )
    }
}

export default Main;