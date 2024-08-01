import React, { useState } from 'react'

import PropTypes from 'prop-types'

const VeelgesteldeVragenComp = (props) => {
  const [faq6Visible, setFaq6Visible] = useState(false)
  const [faq3Visible, setFaq3Visible] = useState(false)
  const [faq5Visible, setFaq5Visible] = useState(false)
  const [faq4Visible, setFaq4Visible] = useState(false)
  const [faq1Visible, setFaq1Visible] = useState(false)
  const [faq2Visible, setFaq2Visible] = useState(false)
  return (
    <>
      <div className="veelgestelde-vragen-comp-faq8 thq-section-padding">
        <div className="veelgestelde-vragen-comp-max-width thq-section-max-width">
          <div className="veelgestelde-vragen-comp-container thq-flex-column">
            <div className="veelgestelde-vragen-comp-section-title thq-flex-column">
              <h2 className="veelgestelde-vragen-comp-text thq-heading-2">
                {props.heading1}
              </h2>
              <p className="veelgestelde-vragen-comp-text1 thq-body-large">
                {props.content1}
              </p>
              <div className="veelgestelde-vragen-comp-container01">
                <a
                  href="#contact"
                  className="veelgestelde-vragen-comp-book button button-main"
                >
                  <span>{props.action}</span>
                </a>
              </div>
            </div>
            <div className="veelgestelde-vragen-comp-list thq-flex-column">
              <div className="thq-divider-horizontal"></div>
              <div className="veelgestelde-vragen-comp-faq1">
                <div
                  onClick={() => setFaq1Visible(!faq1Visible)}
                  className="veelgestelde-vragen-comp-trigger"
                >
                  <p className="veelgestelde-vragen-comp-faq1-question thq-body-large">
                    {props.faq1Question}
                  </p>
                  <div className="veelgestelde-vragen-comp-icons-container">
                    {!faq1Visible && (
                      <div>
                        <svg
                          viewBox="0 0 1024 1024"
                          className="veelgestelde-vragen-comp-icon"
                        >
                          <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                        </svg>
                      </div>
                    )}
                    {faq1Visible && (
                      <div>
                        <svg
                          viewBox="0 0 1024 1024"
                          className="veelgestelde-vragen-comp-icon02"
                        >
                          <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {faq1Visible && (
                  <div className="veelgestelde-vragen-comp-container04">
                    <span className="thq-body-small">{props.faq1Content}</span>
                  </div>
                )}
              </div>
              <div className="thq-divider-horizontal"></div>
              <div className="veelgestelde-vragen-comp-faq2">
                <div
                  onClick={() => setFaq2Visible(!faq2Visible)}
                  className="veelgestelde-vragen-comp-trigger1"
                >
                  <p className="veelgestelde-vragen-comp-faq2-question thq-body-large">
                    {props.faq2Question}
                  </p>
                  <div className="veelgestelde-vragen-comp-icons-container1">
                    {!faq2Visible && (
                      <div>
                        <svg
                          viewBox="0 0 1024 1024"
                          className="veelgestelde-vragen-comp-icon04"
                        >
                          <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                        </svg>
                      </div>
                    )}
                    {faq2Visible && (
                      <div>
                        <svg
                          viewBox="0 0 1024 1024"
                          className="veelgestelde-vragen-comp-icon06"
                        >
                          <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {faq2Visible && (
                  <div className="veelgestelde-vragen-comp-container07">
                    <span className="thq-body-small">
                      Et minima tempore et neque voluptatem eos amet officiis et
                      temporibus Quis. Et suscipit esse id nemo sunt At nihil
                      earum et consequatur fuga aut sapiente voluptate est
                      cupiditate esse non dolor cumque. Ut obcaecati recusandae
                      et beatae quae qui doloremque eligendi sit eaque labore.
                    </span>
                  </div>
                )}
              </div>
              <div className="thq-divider-horizontal"></div>
              <div className="veelgestelde-vragen-comp-faq3">
                <div
                  onClick={() => setFaq3Visible(!faq3Visible)}
                  className="veelgestelde-vragen-comp-trigger2"
                >
                  <p className="veelgestelde-vragen-comp-faq2-question1 thq-body-large">
                    {props.faq3Question}
                  </p>
                  <div className="veelgestelde-vragen-comp-icons-container2">
                    {!faq3Visible && (
                      <div>
                        <svg
                          viewBox="0 0 1024 1024"
                          className="veelgestelde-vragen-comp-icon08"
                        >
                          <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                        </svg>
                      </div>
                    )}
                    {faq3Visible && (
                      <div>
                        <svg
                          viewBox="0 0 1024 1024"
                          className="veelgestelde-vragen-comp-icon10"
                        >
                          <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {faq3Visible && (
                  <div className="veelgestelde-vragen-comp-container10">
                    <span className="thq-body-small">{props.faq3Content}</span>
                  </div>
                )}
              </div>
              <div className="thq-divider-horizontal"></div>
              <div className="veelgestelde-vragen-comp-faq4">
                <div
                  onClick={() => setFaq4Visible(!faq4Visible)}
                  className="veelgestelde-vragen-comp-trigger3"
                >
                  <p className="veelgestelde-vragen-comp-faq2-question2 thq-body-large">
                    {props.faq4Question}
                  </p>
                  <div className="veelgestelde-vragen-comp-icons-container3">
                    {!faq4Visible && (
                      <div>
                        <svg
                          viewBox="0 0 1024 1024"
                          className="veelgestelde-vragen-comp-icon12"
                        >
                          <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                        </svg>
                      </div>
                    )}
                    {faq4Visible && (
                      <div>
                        <svg
                          viewBox="0 0 1024 1024"
                          className="veelgestelde-vragen-comp-icon14"
                        >
                          <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {faq4Visible && (
                  <div className="veelgestelde-vragen-comp-container13">
                    <span className="thq-body-small">{props.faq4Content}</span>
                  </div>
                )}
              </div>
              <div className="thq-divider-horizontal"></div>
              <div className="veelgestelde-vragen-comp-faq5">
                <div
                  onClick={() => setFaq5Visible(!faq5Visible)}
                  className="veelgestelde-vragen-comp-trigger4"
                >
                  <p className="veelgestelde-vragen-comp-faq1-question1 thq-body-large">
                    {props.faq5Question}
                  </p>
                  <div className="veelgestelde-vragen-comp-icons-container4">
                    {!faq5Visible && (
                      <div>
                        <svg
                          viewBox="0 0 1024 1024"
                          className="veelgestelde-vragen-comp-icon16"
                        >
                          <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                        </svg>
                      </div>
                    )}
                    {faq5Visible && (
                      <div>
                        <svg
                          viewBox="0 0 1024 1024"
                          className="veelgestelde-vragen-comp-icon18"
                        >
                          <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {faq5Visible && (
                  <div className="veelgestelde-vragen-comp-container16">
                    <span className="thq-body-small">{props.faq5Content}</span>
                  </div>
                )}
              </div>
              <div className="thq-divider-horizontal"></div>
              <div className="veelgestelde-vragen-comp-faq6">
                <div
                  onClick={() => setFaq6Visible(!faq6Visible)}
                  className="veelgestelde-vragen-comp-trigger5"
                >
                  <p className="veelgestelde-vragen-comp-faq1-question2 thq-body-large">
                    {props.faq6Question}
                  </p>
                  <div className="veelgestelde-vragen-comp-icons-container5">
                    {!faq6Visible && (
                      <div>
                        <svg
                          viewBox="0 0 1024 1024"
                          className="veelgestelde-vragen-comp-icon20"
                        >
                          <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                        </svg>
                      </div>
                    )}
                    {faq6Visible && (
                      <div>
                        <svg
                          viewBox="0 0 1024 1024"
                          className="veelgestelde-vragen-comp-icon22"
                        >
                          <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
                {faq6Visible && (
                  <div className="veelgestelde-vragen-comp-container19">
                    <span className="thq-body-small">{props.faq6Content}</span>
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
          .veelgestelde-vragen-comp-container {
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
          .veelgestelde-vragen-comp-text {
            text-align: center;
          }
          .veelgestelde-vragen-comp-text1 {
            text-align: center;
          }
          .veelgestelde-vragen-comp-container01 {
            display: flex;
            position: relative;
          }
          .veelgestelde-vragen-comp-book {
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
          .veelgestelde-vragen-comp-trigger {
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .veelgestelde-vragen-comp-faq1-question {
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .veelgestelde-vragen-comp-icons-container {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .veelgestelde-vragen-comp-icon {
            width: 24px;
            height: 24px;
          }
          .veelgestelde-vragen-comp-icon02 {
            width: 24px;
            height: 24px;
          }
          .veelgestelde-vragen-comp-container04 {
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
          .veelgestelde-vragen-comp-trigger1 {
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .veelgestelde-vragen-comp-faq2-question {
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .veelgestelde-vragen-comp-icons-container1 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .veelgestelde-vragen-comp-icon04 {
            width: 24px;
            height: 24px;
          }
          .veelgestelde-vragen-comp-icon06 {
            width: 24px;
            height: 24px;
          }
          .veelgestelde-vragen-comp-container07 {
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
          .veelgestelde-vragen-comp-icon08 {
            width: 24px;
            height: 24px;
          }
          .veelgestelde-vragen-comp-icon10 {
            width: 24px;
            height: 24px;
          }
          .veelgestelde-vragen-comp-container10 {
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
          .veelgestelde-vragen-comp-trigger3 {
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
          .veelgestelde-vragen-comp-icon12 {
            width: 24px;
            height: 24px;
          }
          .veelgestelde-vragen-comp-icon14 {
            width: 24px;
            height: 24px;
          }
          .veelgestelde-vragen-comp-container13 {
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
          .veelgestelde-vragen-comp-trigger4 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .veelgestelde-vragen-comp-faq1-question1 {
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
          .veelgestelde-vragen-comp-icon16 {
            width: 24px;
            height: 24px;
          }
          .veelgestelde-vragen-comp-icon18 {
            width: 24px;
            height: 24px;
          }
          .veelgestelde-vragen-comp-container16 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .veelgestelde-vragen-comp-faq6 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .veelgestelde-vragen-comp-trigger5 {
            cursor: pointer;
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
          .veelgestelde-vragen-comp-icon20 {
            width: 24px;
            height: 24px;
          }
          .veelgestelde-vragen-comp-icon22 {
            width: 24px;
            height: 24px;
          }
          .veelgestelde-vragen-comp-container19 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-self: stretch;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          @media (max-width: 991px) {
            .veelgestelde-vragen-comp-container {
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
  faq6Content: 'We zijn enkel actief in Genk.',
  faq1Question: 'Wat breng ik mee voor de eerste behandeling?',
  faq4Content: 'Je kan via de contacteer ons knop een afspraak maken bij ons.',
  faq6Question: 'In welke steden zijn jullie actief?',
  faq2Question: 'Heb ik een voorschrift nodig voor een behandeling?',
  faq3Question: 'Doen jullie ook behandelingen aan huis?',
  faq4Question: 'Hoe kan ik een afspraak maken?',
  faq5Question: 'Hoe kan ik een afspraak annuleren?',
  faq3Content:
    'Nee, wegens de drukte in onze praktijk kunnen we geen huisbezoeken aanbieden, tenzij uitzonderlijk en in de nabijheid van de praktijk voor een kortstondige (post-operatieve) behandeling aan huis, om vervolgens in de praktijk verder te revalideren.',
  faq2Content:
    'Neen dat hoeft niet, maar dan wordt een behandeling kinesitherapie niet terugbetaald.',
  faq1Content: 'Identiteitspapier, Voorschrift dokter en Handdoek',
  rootClassName: '',
  faq5Content:
    'Dit kan telefonisch +32 487/45 28 26 of online tot 24u voor de geplande afspraak.Niet nagekomen of laattijdig geannuleerde consultaties zullen aangerekend worden met het overeenkomstige tarief.',
}

VeelgesteldeVragenComp.propTypes = {
  action: PropTypes.string,
  content1: PropTypes.string,
  heading1: PropTypes.string,
  faq6Content: PropTypes.string,
  faq1Question: PropTypes.string,
  faq4Content: PropTypes.string,
  faq6Question: PropTypes.string,
  faq2Question: PropTypes.string,
  faq3Question: PropTypes.string,
  faq4Question: PropTypes.string,
  faq5Question: PropTypes.string,
  faq3Content: PropTypes.string,
  faq2Content: PropTypes.string,
  faq1Content: PropTypes.string,
  rootClassName: PropTypes.string,
  faq5Content: PropTypes.string,
}

export default VeelgesteldeVragenComp
