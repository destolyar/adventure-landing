import React from "react";
import '../styles/components/header.scss'

export const Header: React.FunctionComponent = () => {
  return(
    <div className="header">
      <img src="/img/logo.svg" alt="" />
      <div className="header__navigation">
        <input type="checkbox" id="check-menu"/>
        <label className="header__navigation__menu-box" htmlFor="check-menu">
          <div className="header__navigation__menu-box__menu-line"></div>
          <div className="header__navigation__menu-box__menu-line"></div>
        </label>
        <a className="header__navigation__item header__navigation__first-item">Home</a>
        <a className="header__navigation__item header__navigation__second-item">About</a>
        <a className="header__navigation__item header__navigation__third-item">Pricing</a>
        <a className="header__navigation__sign-up-link header__navigation__fourth-item">Sign Up</a>
        <a className="header__navigation__sign-up-button ">Sign Up</a>
      </div>
    </div>
  )
}