import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import FeatureCard4 from './feature-card4'

const Office = (props) => {
  return (
    <>
      <div id="praktijk" className="office-office">
        <h1 className="office-text1">
          {props.heading ?? (
            <Fragment>
              <span className="office-text2">Onze praktijk</span>
            </Fragment>
          )}
        </h1>
        <div className="office-separator"></div>
        <div className="office-container1">
          <div className="office-container2">
            <FeatureCard4
              title="Klimrek"
              rootClassName="rootClassName1"
            ></FeatureCard4>
            <FeatureCard4
              title="Ballenbad"
              rootClassName="rootClassName4"
            ></FeatureCard4>
            <FeatureCard4
              title="Sauna"
              rootClassName="rootClassName3"
            ></FeatureCard4>
            <FeatureCard4
              title="Jacuzzi"
              rootClassName="rootClassName2"
            ></FeatureCard4>
          </div>
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="office-image"
          />
        </div>
      </div>
      <style jsx>
        {`
          .office-office {
            width: 100%;
            height: 746px;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            flex-direction: column;
          }
          .office-text1 {
            font-size: 3rem;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .office-separator {
            width: 100px;
            height: 2px;
            background-color: var(--dl-color-gray-500);
          }
          .office-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .office-container2 {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }
          .office-image {
            width: 450px;
            height: 450px;
            object-fit: cover;
            flex-shrink: 0;
            margin-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-round);
            object-position: left;
          }
          .office-text2 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .office-office {
              height: auto;
              align-items: center;
            }
            .office-container1 {
              flex-direction: column-reverse;
            }
            .office-image {
              width: 300px;
              height: 300px;
              margin-top: var(--dl-space-space-twounits);
              margin-left: 0px;
            }
          }
          @media (max-width: 767px) {
            .office-office {
              height: auto;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .office-text1 {
              text-align: center;
            }
          }
          @media (max-width: 479px) {
            .office-office {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .office-container2 {
              grid-template-columns: 1fr;
            }
            .office-image {
              width: 250px;
              height: 250px;
            }
          }
        `}
      </style>
    </>
  )
}

Office.defaultProps = {
  imageSrc:
    'https://images.unsplash.com/photo-1631248917391-a81434c07b09?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE3fHxzcG9ydCUyMG9mZmljZSUyMGd5bXxlbnwwfHx8fDE3MTA0NDkxNDV8MA&ixlib=rb-4.0.3&w=500',
  imageAlt: 'image',
  heading: undefined,
}

Office.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  heading: PropTypes.element,
}

export default Office
