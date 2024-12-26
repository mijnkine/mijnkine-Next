import React from 'react'

import { useTranslations } from 'next-intl'

const Contact = (props) => {
  return (
    <>
      <div className="contact-layout349 thq-section-padding">
        <div className="contact-max-width thq-section-max-width">
          <div className="contact-map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5894.087432996505!2d5.5072857712008725!3d50.965289178446426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0d94372055dcd%3A0xae6a6940a8f1bead!2sMijn%20Kine!5e0!3m2!1sen!2sbe!4v1724848569942!5m2!1sen!2sbe"
              title="Map"
              className="contact-iframe thq-img-ratio-16-9"
            ></iframe>
          </div>
          <div className="contact-content">
            <div className="contact-contacteer-ons-section">
              <h2 className="contact-text10 thq-heading-1">Contacteer ons</h2>
              <div className="contact-bel-ons">
                <h4 className="contact-text11 thq-heading-2">Telefoon</h4>
                <a href="tel:+32 487 45 28 26" className="contact-link1">
                  <p className="contact-text12 thq-body-large">
                    Stijn  +32 487 45 28 26
                  </p>
                </a>
                <a href="tel:+32 478 40 78 88" className="contact-link2">
                  <p className="contact-text13 thq-body-large">
                    <span>
                      Arne
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>+32 478 40 78 88</span>
                  </p>
                </a>
              </div>
              <div className="contact-email-ons">
                <h4 className="contact-text16 thq-heading-2">
                  Email
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </h4>
                <a
                  href="mailto:info@mijnkine.be?subject="
                  className="contact-link3"
                >
                  <p className="contact-text17 thq-body-large">
                    info@mijnkine.be
                  </p>
                </a>
              </div>
              <div className="contact-kom-langs">
                <h4 className="contact-text18 thq-heading-2">Kom langs</h4>
                <p className="thq-body-large">
                  Hospitaalstraat 1/bus 2, 3600 Genk
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .contact-layout349 {
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .contact-max-width {
            gap: var(--dl-space-space-fiveunits);
            display: flex;
            align-items: center;
          }
          .contact-map-container {
            flex: 1;
            display: flex;
            position: relative;
            align-items: center;
          }
          .contact-iframe {
            height: 664px;
          }
          .contact-content {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-contacteer-ons-section {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-text10 {
            font-family: 'Poppins';
          }
          .contact-bel-ons {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-text11 {
            font-family: 'Poppins';
          }
          .contact-link1 {
            display: contents;
          }
          .contact-text12 {
            text-decoration: none;
          }
          .contact-link2 {
            display: contents;
          }
          .contact-text13 {
            text-decoration: none;
          }
          .contact-email-ons {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-text16 {
            font-family: 'Poppins';
          }
          .contact-link3 {
            display: contents;
          }
          .contact-text17 {
            text-decoration: none;
          }
          .contact-kom-langs {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact-text18 {
            font-family: 'Poppins';
          }
          @media (max-width: 991px) {
            .contact-max-width {
              gap: var(--dl-space-space-twounits);
              align-items: flex-start;
              flex-direction: column-reverse;
            }
          }
          @media (max-width: 767px) {
            .contact-text10 {
              font-size: xx-large;
            }
            .contact-text11 {
              font-size: x-large;
            }
            .contact-text16 {
              font-size: x-large;
            }
            .contact-text18 {
              font-size: x-large;
            }
          }
        `}
      </style>
    </>
  )
}

export default Contact
