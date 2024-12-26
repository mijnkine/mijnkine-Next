import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Practice = (props) => {
  return (
    <>
      <div className="practice-practice">
        <div className="practice-heading">
          <h3 className="practice-header">{props.title}</h3>
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="practice-image"
          />
          <span>
            {props.text ?? (
              <Fragment>
                <span className="practice-text2">...</span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="practice-more read-more"></div>
      </div>
      <style jsx>
        {`
          .practice-practice {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            border-color: #b4b9c6;
            flex-direction: column;
            border-top-width: 1px;
          }
          .practice-heading {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .practice-header {
            line-height: 36px;
          }
          .practice-image {
            width: 200px;
            object-fit: cover;
          }
          .practice-more {
            border: 2px dashed rgba(120, 120, 120, 0.4);
          }
          .practice-text2 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .practice-practice {
              padding-top: var(--dl-space-space-oneandhalfunits);
            }
            .practice-header {
              font-size: 20px;
              line-height: 24px;
            }
          }
        `}
      </style>
    </>
  )
}

Practice.defaultProps = {
  imageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  imageAlt: 'image',
  text: undefined,
  title: 'Cardiology',
}

Practice.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  text: PropTypes.element,
  title: PropTypes.string,
}

export default Practice
