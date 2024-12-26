import React, { useState } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import ButtonAfspraak from './button-afspraak'

const NavigationSimple = (props) => {
  const [link5AccordionOpen, setLink5AccordionOpen] = useState(false)
  const [link5DropdownVisible, setLink5DropdownVisible] = useState(false)
  return (
    <>
      <div className={`navigation-simple-container1 ${props.rootClassName} `}>
        <header
          data-thq="thq-navbar"
          className="navigation-simple-navbar-interactive"
        >
          <Link href="/">
            <a className="navigation-simple-link5">
              <img
                alt={props.logoAlt}
                src={props.logoSrc}
                className="navigation-simple-image1"
              />
            </a>
          </Link>
          <div
            data-thq="thq-navbar-nav"
            className="navigation-simple-desktop-menu"
          >
            <div className="navigation-simple-buttons1">
              <ButtonAfspraak rootClassName="button-afspraakroot-class-name3"></ButtonAfspraak>
            </div>
          </div>
          <div
            data-thq="thq-burger-menu"
            className="navigation-simple-burger-menu"
          >
            <svg viewBox="0 0 1024 1024" className="navigation-simple-icon1">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div
            data-thq="thq-mobile-menu"
            className="navigation-simple-mobile-menu"
          >
            <div className="navigation-simple-nav">
              <div className="navigation-simple-top">
                <img
                  alt={props.logoAlt}
                  src={props.logoSrc}
                  className="navigation-simple-logo"
                />
                <div
                  data-thq="thq-close-menu"
                  className="navigation-simple-close-menu"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="navigation-simple-icon3"
                  >
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="navigation-simple-links">
                <a
                  href="/#aanpak"
                  className="navigation-simple-link1 thq-body-small thq-link"
                >
                  {props.link1}
                </a>
                <a
                  href="/#team"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="navigation-simple-link2 thq-body-small thq-link"
                >
                  {props.link2}
                </a>
                <Link href="/veelgestelde-vragen">
                  <a className="navigation-simple-link6 thq-body-small thq-link">
                    {props.link3}
                  </a>
                </Link>
                <a
                  href="/#contact"
                  className="navigation-simple-link4 thq-body-small thq-link"
                >
                  {props.link4}
                </a>
              </nav>
              <div className="navigation-simple-buttons2">
                <ButtonAfspraak rootClassName="button-afspraakroot-class-name4"></ButtonAfspraak>
              </div>
            </div>
          </div>
        </header>
        {link5DropdownVisible && (
          <div
            onClick={() => setLink5DropdownVisible(false)}
            className="navigation-simple-container2"
          ></div>
        )}
      </div>
      <style jsx>
        {`
          .navigation-simple-container1 {
            width: 100%;
            display: flex;
            position: relative;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .navigation-simple-navbar-interactive {
            width: 100%;
            display: flex;
            z-index: 99999;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .navigation-simple-link5 {
            display: contents;
          }
          .navigation-simple-image1 {
            height: 3rem;
            text-decoration: none;
          }
          .navigation-simple-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: flex-end;
          }
          .navigation-simple-buttons1 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navigation-simple-burger-menu {
            display: none;
          }
          .navigation-simple-icon1 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navigation-simple-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            z-index: 99999999;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .navigation-simple-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navigation-simple-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .navigation-simple-logo {
            height: 3rem;
          }
          .navigation-simple-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navigation-simple-icon3 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navigation-simple-links {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: flex-start;
            flex-direction: column;
          }
          .navigation-simple-link1 {
            text-decoration: none;
          }
          .navigation-simple-link2 {
            text-decoration: none;
          }
          .navigation-simple-link6 {
            text-decoration: none;
          }
          .navigation-simple-link4 {
            text-decoration: none;
          }
          .navigation-simple-buttons2 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: row;
          }
          .navigation-simple-container2 {
            top: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            position: fixed;
            align-items: flex-start;
            flex-direction: column;
          }

          @media (max-width: 767px) {
            .navigation-simple-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .navigation-simple-desktop-menu {
              display: none;
            }
            .navigation-simple-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .navigation-simple-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .navigation-simple-icon1 {
              width: var(--dl-size-size-small);
              height: var(--dl-size-size-small);
            }
            .navigation-simple-mobile-menu {
              padding: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

NavigationSimple.defaultProps = {
  link1: 'Onze aanpak',
  link4: 'Contacteer ons',
  rootClassName: '',
  logoAlt: 'logo',
  logoSrc: '/Logo/mijnkine.svg',
  link3: 'Veelgestelde vragen',
  link2: 'Team',
}

NavigationSimple.propTypes = {
  link1: PropTypes.string,
  link4: PropTypes.string,
  rootClassName: PropTypes.string,
  logoAlt: PropTypes.string,
  logoSrc: PropTypes.string,
  link3: PropTypes.string,
  link2: PropTypes.string,
}

export default NavigationSimple
