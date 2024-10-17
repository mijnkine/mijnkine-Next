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
          <h2>
            {props.cardTitle ?? (
              <Fragment>
                <h2 className="aanpak-preview-text2">test</h2>
              </Fragment>
            )}
          </h2>
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
            transition: 0.3s;
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .aanpak-preview-container2:hover {
            opacity: 0.95;
          }
          .aanpak-preview-image {
            width: 100%;
            height: 100%;
            opacity: 0.7;
            z-index: -1;
            position: absolute;
            object-fit: cover;
            transition: 0.3s;
            border-radius: 36px;
          }
          .aanpak-preview-image:hover {
            opacity: 0.5;
          }
          .aanpak-preview-text2 {
            color: rgb(255, 255, 255);
            display: inline-block;
            font-size: 30px;
            align-self: center;
            font-style: normal;
            font-weight: 700;
            align-content: center;
            text-transform: capitalize;
          }
          .aanpak-preview-text3 {
            display: inline-block;
            font-weight: 400;
          }

          .aanpak-previewroot-class-name5 {
            fill: var(--dl-color-gray-black);
            color: var(--dl-color-gray-black);
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
