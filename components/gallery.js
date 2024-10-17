import React from 'react'

import PropTypes from 'prop-types'

const Gallery = (props) => {
  return (
    <>
      <div
        className={`gallery-gallery3 thq-section-padding ${props.rootClassName} `}
      >
        <div className="gallery-max-width">
          <div className="gallery-container">
            <div className="gallery-content">
              <div
                data-thq="slider"
                data-navigation="true"
                data-pagination="true"
                className="gallery-slider swiper"
              >
                <div data-thq="slider-wrapper" className="swiper-wrapper">
                  <div
                    data-thq="slider-slide"
                    className="gallery-slider-slide10 swiper-slide"
                  >
                    <img
                      alt="mijnkine-foto1"
                      src="https://mijnkine.github.io/mijnkine-assets/mijnkine-1.jpeg"
                      className="gallery-image10 thq-img-ratio-4-3"
                    />
                  </div>
                  <div
                    data-thq="slider-slide"
                    className="gallery-slider-slide11 swiper-slide"
                  >
                    <img
                      alt="mijnkine-foto2"
                      src="https://mijnkine.github.io/mijnkine-assets/mijnkine-2.jpeg"
                      className="gallery-image11 thq-img-ratio-4-3"
                    />
                  </div>
                  <div
                    data-thq="slider-slide"
                    className="gallery-slider-slide12 swiper-slide"
                  >
                    <img
                      alt="mijnkine-foto3"
                      src="https://mijnkine.github.io/mijnkine-assets/mijnkine-3.jpeg"
                      className="gallery-image12 thq-img-ratio-4-3"
                    />
                  </div>
                  <div
                    data-thq="slider-slide"
                    className="gallery-slider-slide13 swiper-slide"
                  >
                    <img
                      alt="mijnkine-foto4"
                      src="https://mijnkine.github.io/mijnkine-assets/mijnkine-4.jpeg"
                      className="gallery-image13 thq-img-ratio-4-3"
                    />
                  </div>
                  <div
                    data-thq="slider-slide"
                    className="gallery-slider-slide14 swiper-slide"
                  >
                    <img
                      alt="mijnkine-foto5"
                      src="https://mijnkine.github.io/mijnkine-assets/mijnkine-5.jpeg"
                      className="gallery-image14 thq-img-ratio-4-3"
                    />
                  </div>
                  <div
                    data-thq="slider-slide"
                    className="gallery-slider-slide15 swiper-slide"
                  >
                    <img
                      alt="mijnkine-foto6"
                      src="https://mijnkine.github.io/mijnkine-assets/mijnkine-6.jpeg"
                      className="gallery-image15 thq-img-ratio-4-3"
                    />
                  </div>
                  <div
                    data-thq="slider-slide"
                    className="gallery-slider-slide16 swiper-slide"
                  >
                    <img
                      alt="mijnkine-foto7"
                      src="https://mijnkine.github.io/mijnkine-assets/mijnkine-7.jpeg"
                      className="gallery-image16 thq-img-ratio-4-3"
                    />
                  </div>
                  <div
                    data-thq="slider-slide"
                    className="gallery-slider-slide17 swiper-slide"
                  >
                    <img
                      alt="mijnkine-foto8"
                      src="https://mijnkine.github.io/mijnkine-assets/mijnkine-8.jpeg"
                      className="gallery-image17 thq-img-ratio-4-3"
                    />
                  </div>
                  <div
                    data-thq="slider-slide"
                    className="gallery-slider-slide18 swiper-slide"
                  >
                    <img
                      alt="mijnkine-foto9"
                      src="https://mijnkine.github.io/mijnkine-assets/mijnkine-9.jpeg"
                      className="gallery-image18 thq-img-ratio-4-3"
                    />
                  </div>
                  <div
                    data-thq="slider-slide"
                    className="gallery-slider-slide19 swiper-slide"
                  >
                    <img
                      alt="mijnkine-foto10"
                      src="https://mijnkine.github.io/mijnkine-assets/mijnkine-10.jpeg"
                      className="gallery-image19 thq-img-ratio-4-3"
                    />
                  </div>
                  <div
                    data-thq="slider-slide"
                    className="gallery-slider-slide20 swiper-slide"
                  >
                    <img
                      alt="mijnkine-foto11"
                      src="https://mijnkine.github.io/mijnkine-assets/mijnkine-11.jpeg"
                      className="gallery-image20 thq-img-ratio-4-3"
                    />
                  </div>
                  <div
                    data-thq="slider-slide"
                    className="gallery-slider-slide21 swiper-slide"
                  >
                    <img
                      alt="mijnkine-foto12"
                      src="https://mijnkine.github.io/mijnkine-assets/mijnkine-12.jpeg"
                      className="gallery-image21 thq-img-ratio-4-3"
                    />
                  </div>
                </div>
                <div
                  data-thq="slider-button-prev"
                  className="gallery-slider-button-prev swiper-button-prev"
                ></div>
                <div
                  data-thq="slider-button-next"
                  className="gallery-slider-button-next swiper-button-next"
                ></div>
                <div
                  data-thq="slider-pagination"
                  className="gallery-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
                >
                  <div
                    data-thq="slider-pagination-bullet"
                    className="gallery-slider-pagination-bullet1 swiper-pagination-bullet swiper-pagination-bullet-active"
                  ></div>
                  <div
                    data-thq="slider-pagination-bullet"
                    className="gallery-slider-pagination-bullet2 swiper-pagination-bullet"
                  ></div>
                  <div
                    data-thq="slider-pagination-bullet"
                    className="gallery-slider-pagination-bullet3 swiper-pagination-bullet"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .gallery-gallery3 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .gallery-max-width {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
          }
          .gallery-container {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .gallery-content {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
            justify-content: center;
          }
          .gallery-slider {
            width: 100%;
            height: 770px;
            display: inline-block;
          }
          .gallery-slider-slide10 {
            height: calc(100% - 20px);
            display: flex;
          }
          .gallery-image10 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .gallery-slider-slide11 {
            height: calc(100% - 20px);
            display: flex;
          }
          .gallery-image11 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .gallery-slider-slide12 {
            height: calc(100% - 20px);
            display: flex;
          }
          .gallery-image12 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .gallery-slider-slide13 {
            height: calc(100% - 20px);
            display: flex;
          }
          .gallery-image13 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .gallery-slider-slide14 {
            height: calc(100% - 20px);
            display: flex;
          }
          .gallery-image14 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .gallery-slider-slide15 {
            height: calc(100% - 20px);
            display: flex;
          }
          .gallery-image15 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .gallery-slider-slide16 {
            height: calc(100% - 20px);
            display: flex;
          }
          .gallery-image16 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .gallery-slider-slide17 {
            height: calc(100% - 20px);
            display: flex;
          }
          .gallery-image17 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .gallery-slider-slide18 {
            height: calc(100% - 20px);
            display: flex;
          }
          .gallery-image18 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .gallery-slider-slide19 {
            height: calc(100% - 20px);
            display: flex;
          }
          .gallery-image19 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .gallery-slider-slide20 {
            height: calc(100% - 20px);
            display: flex;
          }
          .gallery-image20 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .gallery-slider-slide21 {
            height: calc(100% - 20px);
            display: flex;
          }
          .gallery-image21 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .gallery-slider-button-prev {
            color: var(--dl-color-primary-main);
          }
          .gallery-slider-button-next {
            color: var(--dl-color-primary-main);
          }
          .gallery-slider-pagination {
            display: block;
          }
          .gallery-slider-pagination-bullet1 {
            background-color: var(--dl-color-primary-main);
          }
          .gallery-slider-pagination-bullet2 {
            background-color: var(--dl-color-primary-main);
          }
          .gallery-slider-pagination-bullet3 {
            background-color: var(--dl-color-primary-main);
          }

          @media (max-width: 991px) {
            .gallery-max-width {
              max-width: 700px;
            }
            .gallery-content {
              align-items: center;
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .gallery-max-width {
              max-width: 600px;
            }
            .gallery-slider {
              height: 550px;
            }
          }
          @media (max-width: 479px) {
            .gallery-max-width {
              max-width: 350px;
            }
            .gallery-slider {
              height: 440px;
            }
            .galleryroot-class-name {
              align-self: center;
            }
          }
        `}
      </style>
    </>
  )
}

Gallery.defaultProps = {
  rootClassName: '',
}

Gallery.propTypes = {
  rootClassName: PropTypes.string,
}

export default Gallery
