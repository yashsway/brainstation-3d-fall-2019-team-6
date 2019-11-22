import React from 'react'
import './Resturantlist.scss'
import {Link} from 'react-router-dom'


class Resturantlist extends React.Component{
    

    render(){
        console.log(this.props.data.RestaurantID)
        return(
        <Link to={`/ProductDetails/${this.props.data.RestaurantID}`} className="Your-Resturant">
          <h2 className="Resturant">{this.props.data.RestaurantName}</h2>
          <div className="Resturant-box"> <span className="Rating">{this.props.data.Aggregaterating}</span><span className="Cuisine">{this.props.data.Cuisines}</span></div>
         
         </Link>
        )
    }
}

export default Resturantlist ;