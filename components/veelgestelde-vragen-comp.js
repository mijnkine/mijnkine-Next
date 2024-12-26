import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const VeelgesteldeVragenComp = (props) => {
  const [faq6Visible, setFaq6Visible] = useState(false)
  const [faq3Visible, setFaq3Visible] = useState(false)
  const [faq5Visible, setFaq5Visible] = useState(false)
  const [faq4Visible, setFaq4Visible] = useState(false)
  const [faq1Visible, setFaq1Visible] = useState(false)
  const [faq2Visible, setFaq2Visible] = useState(false)
  return (
    <>
      <div
        className={`veelgestelde-vragen-comp-faq8 thq-section-padding ${props.rootClassName} `}
      >
        <div className="veelgestelde-vragen-comp-max-width thq-section-max-width">
          <div className="veelgestelde-vragen-comp-container10 thq-flex-column">
            <div className="veelgestelde-vragen-comp-section-title thq-flex-column">
              <h2 className="veelgestelde-vragen-comp-text10 thq-heading-2">
                {props.heading1}
              </h2>
              <p className="veelgestelde-vragen-comp-text11 thq-body-large">
                {props.content1}
              </p>
              <a href="/#contact">
                <div className="veelgestelde-vragen-comp-container11">
                  <button className="button button-main veelgestelde-vragen-comp-book">
                    <span>{props.action}</span>
                  </button>
                </div>
              </a>
            </div>
            <div className="veelgestelde-vragen-comp-list thq-flex-column">
              <div className="thq-divider-horizontal"></div>
              <div className="veelgestelde-vragen-comp-faq1">
                <div
                  onClick={() => setFaq1Visible(!faq1Visible)}
                  className="veelgestelde-vragen-comp-trigger1"
                >
                  <p className="veelgestelde-vragen-comp-faq1-question1 thq-body-large">
                    {props.faq1Question}
                  </p>
                  <div className="veelgestelde-vragen-comp-icons-container1">
                    {!faq1Visible && (
                      <div>
                        <svg
                          viewBox="0 0 1024 1024"
                          className="veelgestelde-vragen-comp-icon10"
                        >
                          <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                        </svg>
                      </div>
                    )}
                    {faq1Visible && (
                      <div>
                        <svg
                          viewBox="0 0 1024 1024"
                          className="veelgestelde-vragen-comp-icon12"
                        >
                          <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {faq1Visible && (
                  <div className="veelgestelde-vragen-comp-container14">
                    <span className="thq-body-small">
                      {props.text2 ?? (
                        <Fragment>
                          <span className="veelgestelde-vragen-comp-text40">
                            <span>- Voorschrift van de dokter</span>
                            <br></br>
                            <span>- Verslagen, beeldvorming,...</span>
                            <br></br>
                            <span>- Identiteitskaart</span>
                            <br></br>
                            <span>- Klever van de mutualiteit</span>
                            <br></br>
                            <span>
                              - Grote badhanddoek om op tafel te leggen.
                            </span>
                            <br></br>
                            <span>
                              - Sportieve/gemakkelijke kledij indien
                              sportrevalidatie
                            </span>
                            <br></br>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                )}
              </div>
              <div className="thq-divider-horizontal"></div>
              <div className="veelgestelde-vragen-comp-faq2">
                <div
                  onClick={() => setFaq2Visible(!faq2Visible)}
                  className="veelgestelde-vragen-comp-trigger2"
                >
                  <p className="veelgestelde-vragen-comp-faq2-question1 thq-body-large">
                    {props.faq2Question}
                  </p>
                  <div className="veelgestelde-vragen-comp-icons-container2">
                    {!faq2Visible && (
                      <div>
                        <svg
                          viewBox="0 0 1024 1024"
                          className="veelgestelde-vragen-comp-icon14"
                        >
                          <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                        </svg>
                      </div>
                    )}
                    {faq2Visible && (
                      <div>
                        <svg
                          viewBox="0 0 1024 1024"
                          className="veelgestelde-vragen-comp-icon16"
                        >
                          <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {faq2Visible && (
                  <div className="veelgestelde-vragen-comp-container17">
                    <span className="thq-body-small">
                      <span>
                        - Hospitaalstraat (opgelet, vaak worden deze plekken
                        gebruikt door bewoners)
                      </span>
                      <br></br>
                      <span>- Reinpadstraat</span>
                      <br></br>
                      <span>
                        - Parking einde Reinpadstraat (hoek met Bochtlaan); op
                        50m van de praktijk
                      </span>
                      <br></br>
                      <br></br>
                      <span>Denk aan je parkeerschijf te leggen.</span>
                      <br></br>
                    </span>
                  </div>
                )}
              </div>
              <div className="thq-divider-horizontal"></div>
              <div className="veelgestelde-vragen-comp-faq3">
                <div
                  onClick={() => setFaq3Visible(!faq3Visible)}
                  className="veelgestelde-vragen-comp-trigger3"
                >
                  <p className="veelgestelde-vragen-comp-faq2-question2 thq-body-large">
                    {props.faq3Question}
                  </p>
                  <div className="veelgestelde-vragen-comp-icons-container3">
                    {!faq3Visible && (
                      <div>
                        <svg
                          viewBox="0 0 1024 1024"
                          className="veelgestelde-vragen-comp-icon18"
                        >
                          <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                        </svg>
                      </div>
                    )}
                    {faq3Visible && (
                      <div>
                        <svg
                          viewBox="0 0 1024 1024"
                          className="veelgestelde-vragen-comp-icon20"
                        >
                          <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {faq3Visible && (
                  <div className="veelgestelde-vragen-comp-container20">
                    <span className="thq-body-small">
                      {props.text1 ?? (
                        <Fragment>
                          <span className="veelgestelde-vragen-comp-text53">
                            <span>
                              Indien nodig doen wij huisbezoeken. Indien je
                              mobiliteit het toelaat, raden we toch aan
                            </span>
                            <br></br>
                            <span>
                              om naar de praktijk te komen. Huisbezoeken
                              beperken zich tot Genk.
                            </span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                )}
              </div>
              <div className="thq-divider-horizontal"></div>
              <div className="veelgestelde-vragen-comp-faq4">
                <div
                  onClick={() => setFaq4Visible(!faq4Visible)}
                  className="veelgestelde-vragen-comp-trigger4"
                >
                  <p className="veelgestelde-vragen-comp-faq2-question3 thq-body-large">
                    {props.faq4Question}
                  </p>
                  <div className="veelgestelde-vragen-comp-icons-container4">
                    {!faq4Visible && (
                      <div>
                        <svg
                          viewBox="0 0 1024 1024"
                          className="veelgestelde-vragen-comp-icon22"
                        >
                          <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                        </svg>
                      </div>
                    )}
                    {faq4Visible && (
                      <div>
                        <svg
                          viewBox="0 0 1024 1024"
                          className="veelgestelde-vragen-comp-icon24"
                        >
                          <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {faq4Visible && (
                  <div className="veelgestelde-vragen-comp-container23">
                    <span className="thq-body-small">{props.faq4Content}</span>
                  </div>
                )}
              </div>
              <div className="thq-divider-horizontal"></div>
              <div className="veelgestelde-vragen-comp-faq5">
                <div
                  onClick={() => setFaq5Visible(!faq5Visible)}
                  className="veelgestelde-vragen-comp-trigger5"
                >
                  <p className="veelgestelde-vragen-comp-faq1-question2 thq-body-large">
                    {props.faq5Question}
                  </p>
                  <div className="veelgestelde-vragen-comp-icons-container5">
                    {!faq5Visible && (
                      <div>
                        <svg
                          viewBox="0 0 1024 1024"
                          className="veelgestelde-vragen-comp-icon26"
                        >
                          <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                        </svg>
                      </div>
                    )}
                    {faq5Visible && (
                      <div>
                        <svg
                          viewBox="0 0 1024 1024"
                          className="veelgestelde-vragen-comp-icon28"
                        >
                          <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {faq5Visible && (
                  <div className="veelgestelde-vragen-comp-container26">
                    <span className="thq-body-small">
                      {props.text ?? (
                        <Fragment>
                          <span className="veelgestelde-vragen-comp-text28">
                            <span>
                              Een afspraak kan gemaakt worden via onze
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                            <a
                              href="https://www.q-top.be/online-planner-v2/NL/?root=kq55870"
                              target="_blank"
                              rel="noreferrer noopener"
                              className="veelgestelde-vragen-comp-link2"
                            >
                              afsprakenplanner
                            </a>
                            <a
                              href="https://kinequick.corilus.be"
                              target="_blank"
                              rel="noreferrer noopener"
                              className="veelgestelde-vragen-comp-link3"
                            >
                              .
                            </a>
                            <br></br>
                            <span>
                              Of neem
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: ' ',
                                }}
                              />
                            </span>
                            <a
                              href="/#contact"
                              className="veelgestelde-vragen-comp-link4"
                            >
                              contact
                            </a>
                            <span> op met ons.</span>
                            <br></br>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                )}
              </div>
              <div className="thq-divider-horizontal"></div>
              <div className="veelgestelde-vragen-comp-faq6">
                <div
                  onClick={() => setFaq6Visible(!faq6Visible)}
                  className="veelgestelde-vragen-comp-trigger6"
                >
                  <p className="veelgestelde-vragen-comp-faq1-question3 thq-body-large">
                    {props.faq5Question1}
                  </p>
                  <div className="veelgestelde-vragen-comp-icons-container6">
                    {!faq5Visible && (
                      <div>
                        <svg
                          viewBox="0 0 1024 1024"
                          className="veelgestelde-vragen-comp-icon30"
                        >
                          <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                        </svg>
                      </div>
                    )}
                    {faq5Visible && (
                      <div>
                        <svg
                          viewBox="0 0 1024 1024"
                          className="veelgestelde-vragen-comp-icon32"
                        >
                          <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {faq6Visible && (
                  <div className="veelgestelde-vragen-comp-container29">
                    <span className="thq-body-small">
                      {props.text3 ?? (
                        <Fragment>
                          <span className="veelgestelde-vragen-comp-text34">
                            <span>
                              Annuleren kan gemakkelijk door te bellen of een
                              mailtje te sturen. Gelieve dit wel
                            </span>
                            <br></br>
                            <span>
                              minstens 24u op voorhand te doen. Indien dit niet
                              gebeurt, zijn wij genoodzaakt de
                            </span>
                            <br></br>
                            <span>afspraak toch in rekening te brengen.</span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                )}
              </div>
              <div className="thq-divider-horizontal"></div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .veelgestelde-vragen-comp-faq8 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
          }
          .veelgestelde-vragen-comp-max-width {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .veelgestelde-vragen-comp-container10 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .veelgestelde-vragen-comp-section-title {
            width: 100%;
            align-self: center;
            align-items: center;
          }
          .veelgestelde-vragen-comp-text10 {
            text-align: center;
          }
          .veelgestelde-vragen-comp-text11 {
            text-align: center;
          }
          .veelgestelde-vragen-comp-container11 {
            display: flex;
            position: relative;
            text-decoration: none;
          }
          .veelgestelde-vragen-comp-list {
            gap: var(--dl-space-space-halfunit);
            width: 100%;
            align-self: center;
            align-items: flex-start;
          }
          .veelgestelde-vragen-comp-faq1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .veelgestelde-vragen-comp-trigger1 {
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .veelgestelde-vragen-comp-faq1-question1 {
            font-style: normal;
            text-align: left;
            font-weight: 600;
          }
          .veelgestelde-vragen-comp-icons-container1 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .veelgestelde-vragen-comp-icon10 {
            width: 24px;
            height: 24px;
          }
          .veelgestelde-vragen-comp-icon12 {
            width: 24px;
            height: 24px;
          }
          .veelgestelde-vragen-comp-container14 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .veelgestelde-vragen-comp-faq2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .veelgestelde-vragen-comp-trigger2 {
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .veelgestelde-vragen-comp-faq2-question1 {
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .veelgestelde-vragen-comp-icons-container2 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .veelgestelde-vragen-comp-icon14 {
            width: 24px;
            height: 24px;
          }
          .veelgestelde-vragen-comp-icon16 {
            width: 24px;
            height: 24px;
          }
          .veelgestelde-vragen-comp-container17 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .veelgestelde-vragen-comp-faq3 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .veelgestelde-vragen-comp-trigger3 {
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .veelgestelde-vragen-comp-faq2-question2 {
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .veelgestelde-vragen-comp-icons-container3 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .veelgestelde-vragen-comp-icon18 {
            width: 24px;
            height: 24px;
          }
          .veelgestelde-vragen-comp-icon20 {
            width: 24px;
            height: 24px;
          }
          .veelgestelde-vragen-comp-container20 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .veelgestelde-vragen-comp-faq4 {
            width: 100%;
            cursor: pointer;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .veelgestelde-vragen-comp-trigger4 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .veelgestelde-vragen-comp-faq2-question3 {
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .veelgestelde-vragen-comp-icons-container4 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .veelgestelde-vragen-comp-icon22 {
            width: 24px;
            height: 24px;
          }
          .veelgestelde-vragen-comp-icon24 {
            width: 24px;
            height: 24px;
          }
          .veelgestelde-vragen-comp-container23 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .veelgestelde-vragen-comp-faq5 {
            width: 100%;
            cursor: pointer;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .veelgestelde-vragen-comp-trigger5 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .veelgestelde-vragen-comp-faq1-question2 {
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .veelgestelde-vragen-comp-icons-container5 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .veelgestelde-vragen-comp-icon26 {
            width: 24px;
            height: 24px;
          }
          .veelgestelde-vragen-comp-icon28 {
            width: 24px;
            height: 24px;
          }
          .veelgestelde-vragen-comp-container26 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .veelgestelde-vragen-comp-faq6 {
            width: 100%;
            cursor: pointer;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .veelgestelde-vragen-comp-trigger6 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .veelgestelde-vragen-comp-faq1-question3 {
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .veelgestelde-vragen-comp-icons-container6 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .veelgestelde-vragen-comp-icon30 {
            width: 24px;
            height: 24px;
          }
          .veelgestelde-vragen-comp-icon32 {
            width: 24px;
            height: 24px;
          }
          .veelgestelde-vragen-comp-container29 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .veelgestelde-vragen-comp-text28 {
            display: inline-block;
          }
          .veelgestelde-vragen-comp-link2 {
            text-decoration: underline;
          }
          .veelgestelde-vragen-comp-link3 {
            text-decoration: underline;
          }
          .veelgestelde-vragen-comp-link4 {
            text-decoration: underline;
          }
          .veelgestelde-vragen-comp-text34 {
            display: inline-block;
          }
          .veelgestelde-vragen-comp-text40 {
            display: inline-block;
          }
          .veelgestelde-vragen-comp-text53 {
            display: inline-block;
          }

          @media (max-width: 991px) {
            .veelgestelde-vragen-comp-container10 {
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .veelgestelde-vragen-comp-max-width {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .veelgestelde-vragen-comp-book {
              width: 100%;
            }
            .veelgestelde-vragen-comp-faq2-question1 {
              text-align: left;
            }
            .veelgestelde-vragen-comp-faq2-question2 {
              text-align: left;
            }
            .veelgestelde-vragen-comp-faq2-question3 {
              text-align: left;
            }
            .veelgestelde-vragen-comp-faq1-question2 {
              text-align: left;
            }
            .veelgestelde-vragen-comp-faq1-question3 {
              text-align: left;
            }
          }
        `}
      </style>
    </>
  )
}

VeelgesteldeVragenComp.defaultProps = {
  action: 'Contacteer ons',
  content1:
    'Heb je vragen over onze kine praktijk of wil je graag een afspraak maken? Aarzel niet om persoonlijk contact op te nemen. Wij beantwoorden zo snel mogelijk jouw vraag.',
  heading1: 'Veelgestelde vragen',
  faq5Question1: 'Hoe kan ik mijn afspraak annuleren?',
  text: undefined,
  faq1Question: 'Wat breng ik mee voor een eerste behandeling?',
  faq4Content: 'Betalen kan met bancontact of via QR-code of overschrijving.',
  text3: undefined,
  text2: undefined,
  faq2Question: 'Waar kan ik parkeren?',
  faq3Question: 'Doen jullie huisbezoeken?',
  faq4Question: 'Hoe kan ik betalen?',
  text1: undefined,
  faq5Question: 'Hoe kan ik een afspraak maken?',
  faq2Content:
    'Neen dat hoeft niet, maar dan wordt een behandeling kinesitherapie niet terugbetaald.',
  rootClassName: '',
}

VeelgesteldeVragenComp.propTypes = {
  action: PropTypes.string,
  content1: PropTypes.string,
  heading1: PropTypes.string,
  faq5Question1: PropTypes.string,
  text: PropTypes.element,
  faq1Question: PropTypes.string,
  faq4Content: PropTypes.string,
  text3: PropTypes.element,
  text2: PropTypes.element,
  faq2Question: PropTypes.string,
  faq3Question: PropTypes.string,
  faq4Question: PropTypes.string,
  text1: PropTypes.element,
  faq5Question: PropTypes.string,
  faq2Content: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default VeelgesteldeVragenComp
