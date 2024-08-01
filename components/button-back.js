import React from 'react'

import PropTypes from 'prop-types'

const ButtonBack = (props) => {
  return (
    <>
      <div className={`button-back-container ${props.rootClassName} `}>
        <button type="button" className="button-back-button button">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="button-back-image"
          />
          {props.button}
        </button>
      </div>
      <style jsx>
        {`
          .button-back-container {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .button-back-button {
            display: flex;
            flex-direction: row;
          }
          .button-back-image {
            width: var(--dl-size-size-medium);
            cursor: pointer;
            height: var(--dl-size-size-medium);
            object-fit: cover;
          }
          .button-back-root-class-name {
            width: auto;
            height: auto;
            margin-left: 0px;
          }
          .button-back-root-class-name1 {
            width: auto;
            height: auto;
            margin-left: 0px;
          }
          .button-back-root-class-name2 {
            width: auto;
            height: auto;
            margin-left: 0px;
          }
          .button-back-root-class-name3 {
            width: auto;
            height: auto;
            margin-left: 0px;
          }
          .button-back-root-class-name4 {
            width: auto;
            height: auto;
            margin-left: 0px;
          }
          .button-back-root-class-name5 {
            width: auto;
            height: auto;
            margin-left: 0px;
          }
          .button-back-root-class-name6 {
            width: auto;
            height: auto;
            margin-left: 0px;
          }
          .button-back-root-class-name7 {
            width: auto;
            height: auto;
            margin-left: 0px;
          }
          .button-back-root-class-name8 {
            width: auto;
            height: auto;
            margin-left: 0px;
          }
          @media (max-width: 991px) {
            .button-back-image {
              width: var(--dl-size-size-small);
              height: var(--dl-size-size-small);
            }
            .button-back-root-class-name {
              margin-left: 0px;
            }
            .button-back-root-class-name1 {
              margin-left: 0px;
            }
            .button-back-root-class-name2 {
              margin-left: 0px;
            }
            .button-back-root-class-name3 {
              margin-left: 0px;
            }
            .button-back-root-class-name4 {
              margin-left: 0px;
            }
            .button-back-root-class-name5 {
              margin-left: 0px;
            }
            .button-back-root-class-name6 {
              margin-left: 0px;
            }
            .button-back-root-class-name7 {
              margin-left: 0px;
            }
            .button-back-root-class-name8 {
              margin-left: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

ButtonBack.defaultProps = {
  rootClassName: '',
  imageAlt: 'image',
  imageSrc: '/Icons/circle-arrow.svg',
  button: '',
}

ButtonBack.propTypes = {
  rootClassName: PropTypes.string,
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  button: PropTypes.string,
}

export default ButtonBack
