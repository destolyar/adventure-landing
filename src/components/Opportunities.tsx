import React from "react";
import '../styles/components/opportunities.scss'

export const Opportunities: React.FunctionComponent = () => {
  return(
      <section className="opportunities">
        <div className="opportunities__decorate-circle"></div>
        <h2 className="opportunities__title">How it works</h2>
        <div className="opportunities__content">
          <div className="opportunities__content__item" id="first-item">
            <img className="opportunities__content__item__image" src="./img/illustration2.png" alt="" />
            <div className="opportunities__content__item__number-container">
              <p className="opportunities__content__item__number-container__number">1</p>
            </div>
            <h3 className="opportunities__content__item__subtitle">Sign Up</h3>
            <p className="opportunities__content__item__description">Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata.</p>
          </div>
          <div className="opportunities__content__item" id="second-item">
            <img className="opportunities__content__item__image" src="./img/illustration3.png" alt="" />
            <div className="opportunities__content__item__number-container">
              <p className="opportunities__content__item__number-container__number">2</p>
            </div>
            <h3 className="opportunities__content__item__subtitle">Track leads</h3>
            <p className="opportunities__content__item__description">Craven omni memoria patriae zombieland clairvius narcisse religionis sunt diri undead historiarum.</p>
          </div>
          <div className="opportunities__content__item" id="third-item">
            <img className="opportunities__content__item__image" src="./img/illustration4.png" alt="" />
            <div className="opportunities__content__item__number-container">
              <p className="opportunities__content__item__number-container__number">3</p>
            </div>
            <h3 className="opportunities__content__item__subtitle">Increase Sales</h3>
            <p className="opportunities__content__item__description">Sicut spargit virus ad impetum, qui supersumus flesh eating. </p>
          </div>
        </div>
      </section>
  )
}