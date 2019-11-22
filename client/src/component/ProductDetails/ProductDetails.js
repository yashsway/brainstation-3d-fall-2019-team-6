import React from 'react'
import '../ProductDetails/ProductDetails.scss'
import dataOne from '../../data/data-one.json'
import dataTwo from '../../data/data-two.json';
import dataThree from '../../data/data-three.json'

class ProductDetails extends React.Component {
    data = [...dataOne, ...dataTwo, ...dataThree]
    state = {
        rest: {}
    }

    componentDidMount() {
    
       this.data.find(element => {
            if (this.props.match.params.id == element.RestaurantID) {
                this.setState({rest:element})
            }

        });



    }
    
    render() {
        return (
            <div className="detail">
                <div className="detail__header-container">
                    <h1 className="detail__header">{this.state.rest.RestaurantName}</h1>
                </div>
                <div className="detail__container">
                    <aside className="detail__side-menu">
                        <ul className="detail__side-menu__list">
                            <li className="detail__side-menu__list__item-grey">ranking</li>
                            <li className="detail__side-menu__list__item">{this.state.rest.Aggregaterating}</li>
                            <li className="detail__side-menu__list__item-grey">Cusine</li>
                            <li className="detail__side-menu__list__item">{this.state.rest.Cuisines}</li>
                            <li className="detail__side-menu__list__item-grey">Availablilty</li>
                            <li className="detail__side-menu__list__item">Open</li>
                        </ul>
                    </aside>
                    <section className="detail__info">
                        <p className="detail__info__address">{this.state.rest.Address}</p>
                        <p className="detail__info__phone">+99 91 191919191</p>
                        <p className="detail__info__description">
                            Indian Accent has been featured in the World's 50 Best Restaurants 2019. It has been awarded the San Pellegrino Best Restaurant Award in India by Asia's 50 Best Restaurants 2019 for the sixth consecutive year. It has also been rated as the No.1 Restaurant in India by TripAdvisor for 2014, 2015, 2016, 2017, 2018 and 2019.
                        </p>
                        <div>
                            <div className="detail__info__background-img"></div>
                        </div>
                        <button className="detail__info__button">Make a Reservation</button>
                    </section>
                </div>
            </div>
        )
    }
}

export default ProductDetails