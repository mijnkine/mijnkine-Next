import React from 'react'

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
            <fragment>
              <span className="aanpak-card-text2">Persoonlijke aanpak</span>
            </fragment>
          )}
        </h3>
        <span>
          {props.cardDescription ?? (
            <fragment>
              <span className="aanpak-card-text3">
                Persoonlijke aandacht. Uw doelen, onze focus.
              </span>
            </fragment>
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
            width: var(--dl-size-size-medium);
            object-fit: cover;
          }
          .aanpak-card-text2 {
            fill: var(--dl-color-primary-main);
            color: var(--dl-color-primary-main);
            display: inline-block;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .aanpak-card-text3 {
            width: var(--dl-size-size-large);
            display: inline-block;
            font-size: 10px;
            text-align: center;
          }

          @media (max-width: 767px) {
            .aanpak-card-text3 {
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
  imageSrc: '/Aanpak/icon/aanpak2-200h.png',
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
