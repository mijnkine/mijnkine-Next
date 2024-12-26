import React, { useEffect } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import ButtonAfspraak from './button-afspraak'

const AfspraakBanner = (props) => {
  useEffect(() => import('@lottiefiles/lottie-player'), [])
  return (
    <>
      <div
        className={`afspraak-banner-container1 thq-section-padding ${props.rootClassName} `}
      >
        <div className="afspraak-banner-max-width thq-section-max-width">
          <div className="afspraak-banner-container2 thq-flex-row">
            <div className="afspraak-banner-div">
              <lottie-player
                src="https://lottie.host/5bd5aa06-2193-433e-bee1-8fae50318ede/DeJ1OgS4g2.json"
                speed="1"
                autoplay="true"
                background="transparent"
              ></lottie-player>
            </div>
            <div className="afspraak-banner-column">
              <span className="thq-heading-2 afspraak-banner-text1">
                {props.heading1}
              </span>
              <div className="afspraak-banner-actions">
                <a href="/#contact" className="afspraak-banner-link">
                  <div className="afspraak-banner-container3">
                    <button className="button button-main afspraak-banner-book">
                      <span>{props.text}</span>
                    </button>
                  </div>
                </a>
                <ButtonAfspraak rootClassName="button-afspraakroot-class-name7"></ButtonAfspraak>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .afspraak-banner-container1 {
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-twounits);
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .afspraak-banner-max-width {
            gap: 80px;
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .afspraak-banner-container2 {
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .afspraak-banner-div {
            width: 300px;
            height: 300px;
          }
          .afspraak-banner-column {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-direction: column;
          }
          .afspraak-banner-actions {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
          }
          .afspraak-banner-link {
            display: contents;
          }
          .afspraak-banner-container3 {
            display: flex;
            position: relative;
            text-decoration: none;
          }

          @media (max-width: 767px) {
            .afspraak-banner-actions {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .afspraak-banner-text1 {
              font-size: larger;
            }
            .afspraak-banner-book {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

AfspraakBanner.defaultProps = {
  rootClassName: '',
  heading1: 'Meer vragen of afspraak maken?',
  text: 'Contacteer ons',
}

AfspraakBanner.propTypes = {
  rootClassName: PropTypes.string,
  heading1: PropTypes.string,
  text: PropTypes.string,
}

export default AfspraakBanner
