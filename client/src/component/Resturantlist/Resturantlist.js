import React from 'react'
import './Resturantlist.scss'
import {Link,Router} from 'react-router-dom'


class Resturantlist extends React.Component{
    

    render(){
        console.log(this.props)
        return(
        // <Link to="/ProductDetails" className="Your-Resturant">
        <section className="Your-Resturant">
          <h2 className="Resturant">{this.props.data.RestaurantName}</h2>
          <div className="Resturant-box"> <span className="Rating">{this.props.data.Aggregaterating}</span><span className="Cuisine">{this.props.data.Cuisines}</span></div>
          </section>
        // </Link>
        )
    }
}

export default Resturantlist ;