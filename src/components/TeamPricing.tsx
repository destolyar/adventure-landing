import React from "react";
import '../styles/components/team-pricing.scss'

export const TeamPricing: React.FunctionComponent = () => {
  return(
      <section className="team-pricing">
        <div className="team-pricing__background">
          <img className="team-pricing__background__first-airplane" src="./img/airplane.png" alt="" />
          <img className="team-pricing__background__second-airplane" src="./img/airplane.png" alt="" />
          <img className="team-pricing__background__first-cloud" src="./img/background-cloud.png" alt="" />
          <img className="team-pricing__background__second-cloud" src="./img/background-cloud.png" alt="" />
        </div>
        <div className="team-pricing__content">
          <div className="team-pricing__content__team">
            <h2 className="team-pricing__content__team__title">Team</h2>
            <div className="team-pricing__content__team__cards">
              <div className="team-pricing__content__team__cards__item">
                <img className="team-pricing__content__team__cards__item__image" src="./img/characters/character1.png" alt="" />
                <p className="team-pricing__content__team__cards__item__name">Anthony Adams</p>
                <p className="team-pricing__content__team__cards__item__status">Client</p>
              </div>
              <div className="team-pricing__content__team__cards__item">
                <img className="team-pricing__content__team__cards__item__image" src="./img/characters/character2.png" alt="" />
                <p className="team-pricing__content__team__cards__item__name">Anthony Adams</p>
                <p className="team-pricing__content__team__cards__item__status">Client</p>
              </div>
              <div className="team-pricing__content__team__cards__item">
                <img className="team-pricing__content__team__cards__item__image" src="./img/characters/character3.png" alt="" />
                <p className="team-pricing__content__team__cards__item__name">Anthony Adams</p>
                <p className="team-pricing__content__team__cards__item__status">Client</p>
              </div>
            </div>
          </div>
          <div className="team-pricing__content__pricing" id="Pricing">
            <h2 className="team-pricing__content__pricing__title">Pricing</h2>
            <div className="team-pricing__content__pricing__cards">
              <div className="team-pricing__content__pricing__cards__item">
                <img className="team-pricing__content__pricing__cards__item__image" src="./img/pricing-icons/palm.png" alt="" />
                <h3 className="team-pricing__content__pricing__cards__item__title">Basic</h3>
                <h3 className="team-pricing__content__pricing__cards__item__price">$10 <span className="team-pricing__content__pricing__cards__item__price__mounth">/MONTH</span></h3>
                <p className="team-pricing__content__pricing__cards__item__description">Singles who are done with dating & ready to find their partner</p>
              </div>
              <div className="team-pricing__content__pricing__cards__item" id="premium-card">
                <img className="team-pricing__content__pricing__cards__item__image" src="./img/pricing-icons/rocket.png" alt="" />
                <h3 className="team-pricing__content__pricing__cards__item__title" id="premium-card-title">Premium</h3>
                <h3 className="team-pricing__content__pricing__cards__item__price" id="premium-card-price">$19 <span className="team-pricing__content__pricing__cards__item__price__mounth">/MONTH</span></h3>
                <p className="team-pricing__content__pricing__cards__item__description" id="premium-card-description">Couples wanting to resolve conflicts that erode their connection”</p>
              </div>
              <div className="team-pricing__content__pricing__cards__item">
                <img className="team-pricing__content__pricing__cards__item__image" src="./img/pricing-icons/fire.png" alt="" />
                <h3 className="team-pricing__content__pricing__cards__item__title">Ultimate</h3>
                <h3 className="team-pricing__content__pricing__cards__item__price">$39 <span className="team-pricing__content__pricing__cards__item__price__mounth">/MONTH</span></h3>
                <p className="team-pricing__content__pricing__cards__item__description">Singles who are done with dating & ready to find their partner</p>
              </div>
            </div>
            <div className="team-pricing__content__pricing__know-more">
              <div className="team-pricing__content__pricing__know-more__text-content">
                <h3 className="team-pricing__content__pricing__know-more__text-content__title">Call to action</h3>
                <p className="team-pricing__content__pricing__know-more__text-content__description">Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata.</p>
                <button className="team-pricing__content__pricing__know-more__text-content__button">Know more</button>
              </div>
              <img className="team-pricing__content__pricing__know-more__image" src="./img/illustration6.png" alt="" />
            </div>
          </div>
        </div>
      </section>
  )
}