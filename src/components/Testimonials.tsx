import React from "react";
import '../styles/components/testimonials.scss'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export const Testimonials: React.FunctionComponent = () => {
  return(
      <section className="testimonials">
        <div className="testimonials__slider">
          <Carousel swipeable={true} emulateTouch={true} autoPlay={true} interval={3000}>
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
          </Carousel>
        </div>
      </section>
  )
}