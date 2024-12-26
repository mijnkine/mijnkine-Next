import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const TeamMember = (props) => {
  return (
    <>
      <div className="team-member-doctor">
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="team-member-image"
        />
        <div className="team-member-heading">
          <h2 className="team-member-text1">{props.heading}</h2>
          <p className="team-member-text2">{props.text}</p>
        </div>
      </div>
      <style jsx>
        {`
          .team-member-doctor {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            position: relative;
            max-width: 270px;
            align-items: center;
            flex-direction: column;
          }
          .team-member-image {
            width: var(--dl-size-size-xxlarge);
            height: var(--dl-size-size-xxlarge);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .team-member-heading {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .team-member-text1 {
            width: 100%;
            font-size: 24px;
            max-width: 270px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .team-member-text2 {
            width: 100%;
            font-size: 14px;
            max-width: 240px;
            text-align: center;
            line-height: 21px;
          }
          @media (max-width: 767px) {
            .team-member-text1 {
              font-size: 16px;
              max-width: 200px;
              line-height: 24px;
            }
            .team-member-text2 {
              font-size: 12px;
              max-width: 200px;
              line-height: 18px;
            }
          }
        `}
      </style>
    </>
  )
}

TeamMember.defaultProps = {
  heading: '',
  imageSrc: '/Doctors/doctor-1-300w.png',
  imageAlt: 'image',
  text: '',
}

TeamMember.propTypes = {
  heading: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  text: PropTypes.string,
}

export default TeamMember
