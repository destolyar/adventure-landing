import React from "react";
import '../styles/components/welcome-section.scss'

export const WelcomeSection: React.FunctionComponent = () => {
  return(
    <section className="welcome" id="Home">
      <div className="welcome__text-content">
        <img className="welcome__text-content__birds" src="./img/birds.png"></img>
        <h1 className="welcome__text-content__title">Designed and built<br/>to keep you selling</h1>
        <p className="welcome__text-content__description">When you need to stay focused and alert on the right deals, our CRM is here to support you.</p>
        <div className="welcome__text-content__controls">
          <button className="welcome__text-content__controls__try-btn">Try it for free</button>
          <button className="welcome__text-content__controls__play-btn">
            <img src="./img/play-btn.png" alt="" />
          </button>
        </div>
      </div>
      <img className="welcome__illustration" src="./img/illustration1.png" alt=""/>
    </section>
  )
}