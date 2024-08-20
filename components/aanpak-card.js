import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const AanpakCard = (props) => {
  return (
    <>
      <div className={`aanpak-card-container ${props.rootClassName} `}>
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          loading="eager"
          className="aanpak-card-image"
        />
        <h3>
          {props.cardTitle ?? (
            <Fragment>
              <h3 className="aanpak-card-text3">Persoonlijke aanpak</h3>
            </Fragment>
          )}
        </h3>
        <span>
          {props.cardDescription ?? (
            <Fragment>
              <span className="aanpak-card-text4">
                Persoonlijke aandacht. Uw doelen, onze focus.
              </span>
            </Fragment>
          )}
        </span>
      </div>
      <style jsx>
        {`
          .aanpak-card-container {
            flex: 0 0 auto;
            width: var(--dl-size-size-xxlarge);
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .aanpak-card-image {
            width: var(--dl-size-size-small);
            object-fit: cover;
          }
          .aanpak-card-text3 {
            fill: var(--dl-color-primary-main);
            color: var(--dl-color-primary-main);
            display: inline-block;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .aanpak-card-text4 {
            width: var(--dl-size-size-large);
            display: inline-block;
            font-size: 10px;
            text-align: center;
          }

          @media (max-width: 767px) {
            .aanpak-card-text4 {
              width: auto;
            }
          }
        `}
      </style>
    </>
  )
}

AanpakCard.defaultProps = {
  rootClassName: '',
  imageSrc: '/Aanpak/icon/aanpak-1-200h.png',
  cardTitle: undefined,
  imageAlt: 'image',
  cardDescription: undefined,
}

AanpakCard.propTypes = {
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
  cardTitle: PropTypes.element,
  imageAlt: PropTypes.string,
  cardDescription: PropTypes.element,
}

export default AanpakCard
