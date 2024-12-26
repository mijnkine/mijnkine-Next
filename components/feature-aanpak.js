import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const FeatureAanpak = (props) => {
  return (
    <>
      <div
        className={`feature-aanpak-layout349 thq-section-padding ${props.rootClassName} `}
      >
        <div className="feature-aanpak-max-width thq-section-max-width">
          <div className="feature-aanpak-image-container">
            <img
              alt={props.aanpakFeatureImageAlt}
              src={props.aanpakFeatureImageSrc}
              className="thq-img-ratio-16-9"
            />
          </div>
          <div className="feature-aanpak-content1">
            <div className="feature-aanpak-section-title">
              <div className="feature-aanpak-content2">
                <h2 className="thq-heading-2 feature-aanpak-text1">
                  {props.aanpakFeatureTitle}
                </h2>
                <p className="thq-body-large">{props.aanpakFeatureText}</p>
              </div>
              <div className="feature-aanpak-actions"></div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .feature-aanpak-layout349 {
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .feature-aanpak-max-width {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            align-items: center;
          }
          .feature-aanpak-image-container {
            flex: 1;
            display: flex;
            position: relative;
            align-items: center;
          }
          .feature-aanpak-content1 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .feature-aanpak-section-title {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .feature-aanpak-content2 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .feature-aanpak-actions {
            gap: var(--dl-space-space-unit);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
          }

          @media (max-width: 991px) {
            .feature-aanpak-max-width {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .feature-aanpak-content1 {
              width: 100%;
            }
            .feature-aanpak-section-title {
              width: auto;
            }
            .feature-aanpak-content2 {
              width: auto;
            }
            .feature-aanpak-text1 {
              word-break: break-all;
            }
            .feature-aanpak-actions {
              width: 100%;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

FeatureAanpak.defaultProps = {
  aanpakFeatureBreadcrumb: 'Slogan',
  aanpakFeatureImageSrc:
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1400',
  rootClassName: '',
  aanpakFeatureText:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
  aanpakFeatureTitle: 'Aanpak 123',
  aanpakFeatureImageAlt: 'Image',
  aanpakFeatureAction: 'Afspraak maken',
}

FeatureAanpak.propTypes = {
  aanpakFeatureBreadcrumb: PropTypes.string,
  aanpakFeatureImageSrc: PropTypes.string,
  rootClassName: PropTypes.string,
  aanpakFeatureText: PropTypes.string,
  aanpakFeatureTitle: PropTypes.string,
  aanpakFeatureImageAlt: PropTypes.string,
  aanpakFeatureAction: PropTypes.string,
}

export default FeatureAanpak
