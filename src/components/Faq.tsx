import React from "react";
import '../styles/components/faq.scss'

export const Faq: React.FunctionComponent = () => {
  return(
      <section className="faq" id="FAQ">
        <h2 className="faq__title">FAQ</h2>
        <p className="faq__description">Craven omni memoria patriae zombieland clairvius narcisse religionis sunt diri undead historiarum.</p>
        <div className="faq__info-block">
          <input name="fcheck" type="checkbox" id="faq-first-checkbox"/>
          <label htmlFor="faq-first-checkbox" className="faq__info-block__item" id="faq-first-block">
              <div className="faq__info-block__item__header">
                <h1 className="faq__info-block__item__header__title">Manage leads and deals</h1>
                <p className="faq__info-block__item__header__arrow">&#9660;</p>
              </div>
              <div className="faq__info-block__item__main">
                <p className="faq__info-block__item__main__text">Craven omni memoria patriae zombieland clairvius narcisse religionis
                   sunt diri undead historiarum. Golums, zombies unrelenting et Raimi fascinati beheading.</p>
              </div>
          </label>

          <input type="checkbox" id="faq-second-checkbox"/>
          <label htmlFor="faq-second-checkbox" className="faq__info-block__item" id="faq-second-block">
            <div className="faq__info-block__item__header">
                <h1 className="faq__info-block__item__header__title">Track  Communication</h1>
                <p className="faq__info-block__item__header__arrow">&#9660;</p>
              </div>
              <div className="faq__info-block__item__main">
                <p className="faq__info-block__item__main__text">Craven omni memoria patriae zombieland clairvius narcisse religionis
                   sunt diri undead historiarum. Golums, zombies unrelenting et Raimi fascinati beheading.</p>
              </div>
          </label>

          <input type="checkbox" id="faq-third-checkbox"/>
          <label htmlFor="faq-third-checkbox" className="faq__info-block__item" id="faq-third-block">
            <div className="faq__info-block__item__header">
              <h1 className="faq__info-block__item__header__title">Automate & Grow</h1>
              <p className="faq__info-block__item__header__arrow">&#9660;</p>
            </div>
            <div className="faq__info-block__item__main">
              <p className="faq__info-block__item__main__text">Craven omni memoria patriae zombieland clairvius narcisse religionis
                   sunt diri undead historiarum. Golums, zombies unrelenting et Raimi fascinati beheading.</p>
            </div>
          </label>

          <input type="checkbox" id="faq-fourth-checkbox"/>
          <label htmlFor="faq-fourth-checkbox" className="faq__info-block__item" id="faq-fourth-block">
            <div className="faq__info-block__item__header">
              <h1 className="faq__info-block__item__header__title">Insights & Reports</h1>
              <p className="faq__info-block__item__header__arrow">&#9660;</p>
            </div>
            <div className="faq__info-block__item__main">
              <p className="faq__info-block__item__main__text">Craven omni memoria patriae zombieland clairvius narcisse religionis
                   sunt diri undead historiarum. Golums, zombies unrelenting et Raimi fascinati beheading.</p>
            </div>
          </label>
        </div>
      </section>
  )
}