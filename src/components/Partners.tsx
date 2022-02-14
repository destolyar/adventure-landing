import React from "react";
import '../styles/components/partners.scss'


export const Partners: React.FunctionComponent = () => {
  return(
      <section className="partners">
        <h2 className="partners__title">Partners we’ve work with</h2>
        <div className="partners__items">
          <img className="partners__items__item" src="./img/partners/reddit.png" alt="" />
          <img className="partners__items__item" src="./img/partners/at.png" alt="" />
          <img className="partners__items__item" src="./img/partners/linkedin.png" alt="" />
          <img className="partners__items__item" src="./img/partners/zendesk.png" alt="" />
        </div>
      </section>
  )
}