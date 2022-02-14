import React from "react";
import '../styles/components/features.scss'

export const Features: React.FunctionComponent = () => {
  return(
      <section className="features">
        <h2 className="features__title">Features</h2>
        <div className="features__features-content">
          <div className="features__features-content__grid">
            <div className="features__features-content__grid__item">
              <img className="features__features-content__grid__item__image" src="./img/icons/puzzle.png" alt="" />
              <div className="features__features-content__grid__item__text">
                <h3 className="features__features-content__grid__item__text__subtitle">Manage leads and deals</h3>
                <p className="features__features-content__grid__item__text__description">Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata.</p>
              </div>
            </div>
            <div className="features__features-content__grid__item">
              <img className="features__features-content__grid__item__image" src="./img/icons/contact.png" alt="" />
              <div className="features__features-content__grid__item__text">
                <h3 className="features__features-content__grid__item__text__subtitle">Track Communication</h3>
                <p className="features__features-content__grid__item__text__description">Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata.</p>
              </div>
            </div>
            <div className="features__features-content__grid__item">
              <img className="features__features-content__grid__item__image" src="./img/icons/guy.png" alt="" />
              <div className="features__features-content__grid__item__text">
                <h3 className="features__features-content__grid__item__text__subtitle">Automate & Grow</h3>
                <p className="features__features-content__grid__item__text__description">Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata.</p>
              </div>
            </div>
            <div className="features__features-content__grid__item">
              <img className="features__features-content__grid__item__image" src="./img/icons/puzzle.png" alt="" />
              <div className="features__features-content__grid__item__text">
                <h3 className="features__features-content__grid__item__text__subtitle">Insights & Reports</h3>
                <p className="features__features-content__grid__item__text__description">Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata.</p>
              </div>
            </div>
          </div>
          <img className="features__features-content__image" src="./img/illustration5.png" alt="" />
        </div>
      </section>
  )
}