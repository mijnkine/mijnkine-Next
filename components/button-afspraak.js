import React from 'react'

import PropTypes from 'prop-types'

const ButtonAfspraak = (props) => {
  return (
    <>
      <div className={`button-afspraak-container ${props.rootClassName} `}>
        <a
          href="https://kinequick.corilus.be/"
          target="_blank"
          rel="noreferrer noopener"
          className="button-afspraak-book button button-main"
        >
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="button-afspraak-image"
          />
          <span>{props.text}</span>
        </a>
      </div>
      <style jsx>
        {`
          .button-afspraak-container {
            display: flex;
            position: relative;
          }
          .button-afspraak-book {
            text-decoration: none;
          }
          .button-afspraak-image {
            width: 18px;
            object-fit: cover;
          }

          .button-afspraakroot-class-name5 {
            fill: var(--dl-color-gray-black);
            color: var(--dl-color-gray-black);
            align-self: flex-start;
          }

          @media (max-width: 479px) {
            .button-afspraak-book {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

ButtonAfspraak.defaultProps = {
  imageAlt: 'image',
  imageSrc: '/Icons/calendar.svg',
  rootClassName: '',
  text: 'Maak een afspraak',
}

ButtonAfspraak.propTypes = {
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default ButtonAfspraak
