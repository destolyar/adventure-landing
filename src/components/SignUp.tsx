import React from "react";
import '../styles/components/signup.scss'

export const SignUp: React.FunctionComponent = () => {
  return(
      <section className="signup">
        <div className="signup__background">
          <img className="signup__background__first-cloud" src="/img/background-cloud-2.png" alt="" />
          <img className="signup__background__second-cloud" src="/img/background-cloud-2.png" alt="" />
          <img className="signup__background__third-cloud" src="/img/background-cloud-2.png" alt="" />
        </div>
        <div className="signup__content">
          <h2 className="signup__content__title">Sign up to our newsletter!</h2>
          <p className="signup__content__description">When you need to stay focused and alert on the right deals, our CRM is here to support you.</p>
          <div className="signup__content__subscribe-form">
            <input className="signup__content__subscribe-form__input" type="text" placeholder="email adress"/>
            <button className="signup__content__subscribe-form__button">Subscribe</button>
          </div>
        </div>
      </section>
  )
}