import React, { useState } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

import ButtonAfspraak from './button-afspraak'

const Navigation = (props) => {
  const [link5AccordionOpen, setLink5AccordionOpen] = useState(false)
  const [link5DropdownVisible, setLink5DropdownVisible] = useState(false)
  return (
    <>
      <div className={`navigation-container ${props.rootClassName} `}>
        <header data-thq="thq-navbar" className="navigation-navbar-interactive">
          <Link href="/">
            <a className="navigation-link5">
              <img
                alt={props.logoAlt}
                src={props.logoSrc}
                className="navigation-image1"
              />
            </a>
          </Link>
          <div data-thq="thq-navbar-nav" className="navigation-desktop-menu">
            <nav className="navigation-links1">
              <a href="#aanpak" className="navigation-link11 thq-body-small">
                Onze werking
              </a>
              <a href="#team" className="navigation-link21 thq-body-small">
                Team
              </a>
              <Link href="/veelgestelde-vragen">
                <a className="navigation-link6 thq-body-small">
                  <span>Veelgestelde vragen</span>
                  <br></br>
                </a>
              </Link>
              <a href="#contact" className="navigation-link41 thq-body-small">
                Contacteer ons
              </a>
            </nav>
            <div className="navigation-buttons1">
              <ButtonAfspraak rootClassName="button-afspraakroot-class-name1"></ButtonAfspraak>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="navigation-burger-menu">
            <svg viewBox="0 0 1024 1024" className="navigation-icon1">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="navigation-mobile-menu">
            <div className="navigation-nav">
              <div className="navigation-top">
                <img
                  alt={props.logoAlt}
                  src={props.logoSrc}
                  className="navigation-logo"
                />
                <div
                  data-thq="thq-close-menu"
                  className="navigation-close-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="navigation-icon3">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="navigation-links2">
                <a
                  href="#aanpak"
                  className="navigation-link12 thq-body-small thq-link"
                >
                  Onze aanpak
                </a>
                <a
                  href="#team"
                  className="navigation-link22 thq-body-small thq-link"
                >
                  Team
                </a>
                <Link href="/veelgestelde-vragen">
                  <a className="navigation-link7 thq-body-small thq-link">
                    Veelgestelde vragen
                  </a>
                </Link>
                <a
                  href="#contact"
                  className="navigation-link42 thq-body-small thq-link"
                >
                  Contacteer ons
                </a>
              </nav>
              <div className="navigation-buttons2">
                <ButtonAfspraak rootClassName="button-afspraakroot-class-name2"></ButtonAfspraak>
              </div>
            </div>
          </div>
        </header>
      </div>
      <style jsx>
        {`
          .navigation-container {
            width: 100%;
            display: flex;
            position: relative;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .navigation-navbar-interactive {
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
          .navigation-link5 {
            display: contents;
          }
          .navigation-image1 {
            height: 3rem;
            text-decoration: none;
          }
          .navigation-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .navigation-links1 {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-twounits);
            flex-direction: row;
            justify-content: flex-start;
          }
          .navigation-link11 {
            text-decoration: none;
          }
          .navigation-link21 {
            text-decoration: none;
          }
          .navigation-link6 {
            text-decoration: none;
          }
          .navigation-link41 {
            text-decoration: none;
          }
          .navigation-buttons1 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navigation-burger-menu {
            display: none;
          }
          .navigation-icon1 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navigation-mobile-menu {
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
          .navigation-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navigation-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .navigation-logo {
            height: 3rem;
          }
          .navigation-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navigation-icon3 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navigation-links2 {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: flex-start;
            flex-direction: column;
          }
          .navigation-link12 {
            text-decoration: none;
          }
          .navigation-link22 {
            text-decoration: none;
          }
          .navigation-link7 {
            text-decoration: none;
          }
          .navigation-link42 {
            text-decoration: none;
          }
          .navigation-buttons2 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: row;
          }
          @media (max-width: 767px) {
            .navigation-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .navigation-image1 {
              visibility: hidden;
            }
            .navigation-desktop-menu {
              display: none;
            }
            .navigation-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .navigation-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .navigation-icon1 {
              width: var(--dl-size-size-small);
              height: var(--dl-size-size-small);
            }
            .navigation-mobile-menu {
              padding: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

Navigation.defaultProps = {
  logoSrc: '/Logo/mijnkine.svg',
  logoAlt: 'logo',
  rootClassName: '',
}

Navigation.propTypes = {
  logoSrc: PropTypes.string,
  logoAlt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Navigation
