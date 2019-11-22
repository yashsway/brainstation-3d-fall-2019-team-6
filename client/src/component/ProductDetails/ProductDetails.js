import React from 'react'
import '../ProductDetails/ProductDetails.scss'

class ProductDetails extends React.Component {
    render (){
        return(
            <div className="detail">
                <div className="detail__header-container">
                    <h1 className="detail__header">Restuarant 1</h1>
                </div>
                <div className="detail__container">
                    <aside className="detail__side-menu">
                        <ul className="detail__side-menu__list">
                            <li className="detail__side-menu__list__item-grey">Rating</li>
                            <li className="detail__side-menu__list__item">5 Stars</li>
                            <li className="detail__side-menu__list__item-grey">Cusine</li>
                            <li className="detail__side-menu__list__item">Sushi</li>
                            <li className="detail__side-menu__list__item-grey">Availablilty</li>
                            <li className="detail__side-menu__list__item">Open</li>
                        </ul>
                    </aside>
                    <section className="detail__info">
                        <p className="detail__info__address">123 Fake Street</p>
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