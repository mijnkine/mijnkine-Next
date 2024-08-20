import React from 'react'
import Head from 'next/head'

import NavigationSimple from '../../components/navigation-simple'
import ButtonBack from '../../components/button-back'
import TeamMember from '../../components/team-member'
import AfspraakBanner from '../../components/afspraak-banner'

const TeamStijn = (props) => {
  return (
    <>
      <div className="team-stijn-container1">
        <Head>
          <title>Stijn Jans</title>
          <meta name="description" content="Kinesist" />
          <meta property="og:title" content="Stijn Jans" />
          <meta property="og:description" content="Kinesist" />
        </Head>
        <NavigationSimple rootClassName="navigation-simpleroot-class-name7"></NavigationSimple>
        <div className="team-stijn-back">
          <a
            href="/#team"
            target="_blank"
            rel="noreferrer noopener"
            className="team-stijn-link1"
          >
            <ButtonBack
              rootClassName="button-backroot-class-name7"
              className="team-stijn-component2"
            ></ButtonBack>
          </a>
        </div>
        <TeamMember
          imageSrc="/Team/stijnjans-300w.png"
          className="team-stijn-component3"
        ></TeamMember>
        <div className="team-stijn-container2 thq-section-padding">
          <div className="team-stijn-max-width thq-flex-column thq-section-max-width">
            <div className="team-stijn-content1 thq-flex-column">
              <ul className="team-stijn-ul1 thq-flex-column">
                <li className="team-stijn-li1 thq-flex-column list-item">
                  <h2 className="team-stijn-heading7 thq-heading-2">
                    <span>Stijn Jans</span>
                    <br></br>
                  </h2>
                  <ul className="team-stijn-ul2 thq-flex-column">
                    <li className="team-stijn-li2 list-item">
                      <h3 className="thq-heading-3">
                        Opleidingen en Specialisaties
                      </h3>
                      <p className="thq-body-small">
                        <span>•⁠ ⁠Sportkinesitherapie</span>
                        <br></br>
                        <span>•⁠ ⁠⁠Manuele therapie</span>
                        <br></br>
                        <span>•⁠ ⁠⁠algemene/orthopedische revalidatie</span>
                        <br></br>
                        <span>•⁠ ⁠⁠Kaakklachten</span>
                        <br></br>
                        <span>•⁠ ⁠⁠Dry needling</span>
                        <br></br>
                        <span>•⁠ ⁠⁠Manipulaties</span>
                        <br></br>
                      </p>
                    </li>
                    <li className="team-stijn-li3 list-item">
                      <h3 className="thq-heading-3">Over Stijn</h3>
                      <p className="thq-body-small">
                        <span>
                          Stijn is een gepassioneerde kinesitherapeut met een
                          sterke focus op de combinatie van zowel
                          sportrevalidatie als manuele therapie. Afgestudeerd
                          aan de Uhasselt met een specialisatie in
                          sportrevalidatie heeft hij de kennis en vaardigheden
                          om sporters en actieve individuen te helpen bij hun
                          herstel en prestaties.
                        </span>
                        <br></br>
                        <br></br>
                        <span>
                          Hierna genoot hij een opleiding manuele therapie aan
                          het IMFT in Gent. Deze opleiding heeft hem naast het
                          manuele aspect bijkomend een bredere kijk gegeven op
                          het menselijk bewegingsapparaat. Vervolgens volgde hij
                          een cursus dry needling, een effectieve techniek voor
                          het behandelen van spierpijn en spanningsklachten.
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <br></br>
                        <br></br>
                        <span>
                          Naast zijn professionele ontwikkeling, beoefent hij
                          een heel resem aan sporten. Deze persoonlijke ervaring
                          met sport helpt hem om de behoeften en uitdagingen van
                          mijn sportende patiënten beter te begrijpen en hen
                          effectiever te begeleiden in hun revalidatieproces.
                        </span>
                        <br></br>
                        <br></br>
                        <span>
                          Met zijn achtergrond en voortdurende educatie, streef
                          hij ernaar om elke patiënt jong of oud te helpen hun
                          maximale potentieel te bereiken, ongeacht hun niveau
                          van sportiviteit. Zijn doel is om mensen niet alleen
                          te laten herstellen van blessures, maar ook om ze
                          sterker en veerkrachtiger te maken dan voorheen.
                        </span>
                        <br></br>
                        <br></br>
                        <span>Gedeconventioneerd</span>
                        <br></br>
                      </p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="team-stijn-content2">
          <AfspraakBanner rootClassName="afspraak-bannerroot-class-name6"></AfspraakBanner>
        </div>
        <footer className="team-stijn-footer">
          <img
            alt="logo"
            src="/Branding/logo-1500h.jpeg"
            className="team-stijn-image"
          />
          <span className="team-stijn-text38">
            © 2024 - webdesign by Jan Pecquet
          </span>
          <div className="team-stijn-icon-group">
            <a
              href="https://www.instagram.com/stijn.jans.9/"
              target="_blank"
              rel="noreferrer noopener"
              className="team-stijn-link2"
            >
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="team-stijn-icon1"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/stijn.jans.9"
              target="_blank"
              rel="noreferrer noopener"
              className="team-stijn-link3"
            >
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="team-stijn-icon3"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </a>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .team-stijn-container1 {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .team-stijn-back {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
          }
          .team-stijn-link1 {
            display: contents;
          }
          .team-stijn-component2 {
            text-decoration: none;
          }
          .team-stijn-component3 {
            text-decoration: none;
          }
          .team-stijn-container2 {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .team-stijn-max-width {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
          }
          .team-stijn-content1 {
            align-self: stretch;
            align-items: flex-start;
          }
          .team-stijn-ul1 {
            align-items: flex-start;
          }
          .team-stijn-li1 {
            align-items: flex-start;
          }
          .team-stijn-heading7 {
            align-self: center;
            text-align: center;
          }
          .team-stijn-ul2 {
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
          }
          .team-stijn-li2 {
            list-style-type: none;
            list-style-image: none;
            list-style-position: outside;
          }
          .team-stijn-li3 {
            list-style-type: none;
            list-style-image: none;
            list-style-position: outside;
          }
          .team-stijn-content2 {
            flex: 1;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .team-stijn-footer {
            width: 100%;
            display: flex;
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .team-stijn-image {
            height: 2rem;
            object-fit: cover;
          }
          .team-stijn-icon-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .team-stijn-link2 {
            display: contents;
          }
          .team-stijn-icon1 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            display: none;
            margin-right: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .team-stijn-link3 {
            display: contents;
          }
          .team-stijn-icon3 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            display: none;
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .team-stijn-back {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 767px) {
            .team-stijn-ul2 {
              padding-left: var(--dl-space-space-threeunits);
            }
            .team-stijn-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .team-stijn-text38 {
              text-align: center;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .team-stijn-ul2 {
              padding-left: var(--dl-space-space-oneandhalfunits);
            }
            .team-stijn-li3 {
              list-style-type: none;
              list-style-image: none;
              list-style-position: outside;
            }
            .team-stijn-footer {
              padding: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .team-stijn-image {
              margin-bottom: var(--dl-space-space-unit);
            }
            .team-stijn-text38 {
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default TeamStijn
