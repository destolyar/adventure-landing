import React from "react";
import '../styles/components/footer.scss'

export const Footer: React.FunctionComponent = () => {
  return(
      <section className="footer">
        <div className="footer__logo">
          <img className="footer__logo__image" src="/img/logo.svg" alt="" />
          <p className="footer__logo__tagline">&mdash; Your tagline</p>
        </div>
        <div className="footer__links-page">
          <div className="footer__links-page__container">
            <div className="footer__links-page__container__second-container">
              <a className="footer__links-page__container__second-container__item" href="#Home">Home</a>
              <a className="footer__links-page__container__second-container__item" href="#FAQ">Popular</a>
              <a className="footer__links-page__container__second-container__item" href="#About">About</a>
              <a className="footer__links-page__container__second-container__item" href="#SignUp">Contact</a>
            </div>
          </div>
          <div className="footer__links-page__container">
            <div className="footer__links-page__container__second-container">
              <a className="footer__links-page__container__second-container__item" href="#Home">Home</a>
              <a className="footer__links-page__container__second-container__item" href="#FAQ">Popular</a>
              <a className="footer__links-page__container__second-container__item" href="#About">About</a>
              <a className="footer__links-page__container__second-container__item" href="#SignUp">Contact</a>
            </div>
          </div>
          <div className="footer__links-page__container">
            <div className="footer__links-page__container__second-container">
              <a className="footer__links-page__container__second-container__item" href="#Home">Home</a>
              <a className="footer__links-page__container__second-container__item" href="#FAQ">Popular</a>
              <a className="footer__links-page__container__second-container__item" href="#About">About</a>
              <a className="footer__links-page__container__second-container__item" href="#SignUp">Contact</a>
            </div>
          </div>
        </div>
        <div className="footer__links-social">
          <a className="footer__links-social__link" href="">Follow Us</a>
          <div className="footer__links-social__icons">
            <img className="footer__links-social__icons__item" src="img/icons/twitter.png" alt="" />
            <img className="footer__links-social__icons__item" src="img/icons/facebook.png" alt="" />
            <img className="footer__links-social__icons__item" src="img/icons/google.png" alt="" />
            <img className="footer__links-social__icons__item" src="img/icons/insta.png" alt="" />
          </div>
        </div>
      </section>
  )
}