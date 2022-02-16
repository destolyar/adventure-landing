import React from "react";
import '../styles/components/testimonials.scss'

export const Testimonials: React.FunctionComponent = () => {
  return(
      <section className="testimonials">
        <div className="testimonials__wrapper">
          <input type="radio" name="slide" value='slide1' id="first-slide-control" defaultChecked/>
          <input type="radio" name="slide" value='slide2' id="second-slide-control"/>
          <input type="radio" name="slide" value='slide3' id="third-slide-control"/>
          <input type="radio" name="slide" value='slide4' id="fourth-slide-control"/>
          <div className="testimonials__wrapper__slides">
            <div className="testimonials__wrapper__slides__slide">
              <div className="testimonials__wrapper__slides__slide__client-comment">
                <p className="testimonials__wrapper__slides__slide__client-comment__text">
                “ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim <br/>ad minim veniam, quis nostrud exercitation ullamco laboris nisi.”
                </p>
                <div className="testimonials__wrapper__slides__slide__client-comment__info">
                  <img className="testimonials__wrapper__slides__slide__client-comment__info__photo" src="./img/avatars/client.png" alt="" />
                  <div className="testimonials__wrapper__slides__slide__client-comment__info__personal">
                    <p className="testimonials__wrapper__slides__slide__client-comment__info__personal__name">Janie Adams</p>
                    <p className="testimonials__wrapper__slides__slide__client-comment__info__personal__status">Client</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonials__wrapper__slides__slide">
              <div className="testimonials__wrapper__slides__slide__client-comment">
                <p className="testimonials__wrapper__slides__slide__client-comment__text">
                “ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim <br/>ad minim veniam, quis nostrud exercitation ullamco laboris nisi.”
                </p>
                <div className="testimonials__wrapper__slides__slide__client-comment__info">
                  <img className="testimonials__wrapper__slides__slide__client-comment__info__photo" src="./img/avatars/undefined-avatar.png" alt="" />
                  <div className="testimonials__wrapper__slides__slide__client-comment__info__personal">
                    <p className="testimonials__wrapper__slides__slide__client-comment__info__personal__name">John Sison</p>
                    <p className="testimonials__wrapper__slides__slide__client-comment__info__personal__status">Client</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="testimonials__wrapper__slides__slide">
              <div className="testimonials__wrapper__slides__slide__client-comment">
                <p className="testimonials__wrapper__slides__slide__client-comment__text">
                “ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim <br/>ad minim veniam, quis nostrud exercitation ullamco laboris nisi.”
                </p>
                <div className="testimonials__wrapper__slides__slide__client-comment__info">
                  <img className="testimonials__wrapper__slides__slide__client-comment__info__photo" src="./img/avatars/undefined-avatar.png" alt="" />
                  <div className="testimonials__wrapper__slides__slide__client-comment__info__personal">
                    <p className="testimonials__wrapper__slides__slide__client-comment__info__personal__name">Mike Dorgs</p>
                    <p className="testimonials__wrapper__slides__slide__client-comment__info__personal__status">Client</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonials__wrapper__slides__slide">
              <div className="testimonials__wrapper__slides__slide__client-comment">
                  <p className="testimonials__wrapper__slides__slide__client-comment__text">
                  “ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim <br/>ad minim veniam, quis nostrud exercitation ullamco laboris nisi.”
                  </p>
                  <div className="testimonials__wrapper__slides__slide__client-comment__info">
                    <img className="testimonials__wrapper__slides__slide__client-comment__info__photo" src="./img/avatars/undefined-avatar.png" alt="" />
                    <div className="testimonials__wrapper__slides__slide__client-comment__info__personal">
                      <p className="testimonials__wrapper__slides__slide__client-comment__info__personal__name">Mark Reghens</p>
                      <p className="testimonials__wrapper__slides__slide__client-comment__info__personal__status">Client</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <div className="testimonials__wrapper__controls">
            <label className="testimonials__wrapper__controls__control" id="first-slide-control-label" htmlFor="first-slide-control"></label>
            <label className="testimonials__wrapper__controls__control" id="second-slide-control-label" htmlFor="second-slide-control"></label>
            <label className="testimonials__wrapper__controls__control" id="third-slide-control-label" htmlFor="third-slide-control"></label>
            <label className="testimonials__wrapper__controls__control" id="fourth-slide-control-label" htmlFor="fourth-slide-control"></label>
          </div>
        </div>
      </section>
  )
}