import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

const AanpakPreview = (props) => {
  return (
    <>
      <div className={`aanpak-preview-container1 ${props.rootClassName} `}>
        <div className="aanpak-preview-container2">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="aanpak-preview-image"
          />
          <p>
            {props.cardTitle ?? (
              <Fragment>
                <p className="aanpak-preview-text2">Text</p>
              </Fragment>
            )}
          </p>
        </div>
        <label>
          {props.description ?? (
            <Fragment>
              <label className="aanpak-preview-text3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book.
              </label>
            </Fragment>
          )}
        </label>
      </div>
      <style jsx>
        {`
          .aanpak-preview-container1 {
            width: auto;
            height: auto;
            display: flex;
            z-index: 2;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .aanpak-preview-container2 {
            width: 100%;
            height: var(--dl-size-size-xlarge);
            display: flex;
            position: relative;
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .aanpak-preview-image {
            width: 100%;
            height: 100%;
            opacity: 0.7;
            position: absolute;
            object-fit: cover;
            transition: 0.3s;
            border-radius: 36px;
          }
          .aanpak-preview-image:hover {
            opacity: 0.3;
          }
          .aanpak-preview-text2 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            display: inline-block;
            position: relative;
            font-size: 32px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            text-transform: capitalize;
          }
          .aanpak-preview-text3 {
            display: inline-block;
            font-weight: 400;
          }
        `}
      </style>
    </>
  )
}

AanpakPreview.defaultProps = {
  cardTitle: undefined,
  imageAlt: 'image',
  imageSrc: '/Aanpak/aanpak_algemene-200h.jpeg',
  description: undefined,
  rootClassName: '',
}

AanpakPreview.propTypes = {
  cardTitle: PropTypes.element,
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  description: PropTypes.element,
  rootClassName: PropTypes.string,
}

export default AanpakPreview
