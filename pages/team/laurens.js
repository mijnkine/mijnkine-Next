import React from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import NavigationSimple from '../../components/navigation-simple'
import ButtonBack from '../../components/button-back'
import TeamMember from '../../components/team-member'
import AfspraakBanner from '../../components/afspraak-banner'

const TeamLaurens = (props) => {
  return (
    <>
      <div className="team-laurens-container1">
        <Head>
          <title>Laurens Depraetere - Kinesist in Genk</title>
          <meta
            name="description"
            content="Zoek je een kinesist in Genk? Laurens Depraetere biedt ervaren kinesitherapie voor diverse klachten. Herstel sneller en efficiënter met onze persoonlijke aanpak."
          />
          <meta property="og:title" content="Laurens Depraetere - Kinesist in Genk" />
          <meta
            property="og:description"
            content="Zoek je een kinesist in Genk? Laurens Depraetere biedt ervaren kinesitherapie voor diverse klachten. Herstel sneller en efficiënter met onze persoonlijke aanpak."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ea578cad-184d-4f31-bb77-f954be0b4f25/cbc0d713-0698-4930-97d2-2a353e79045a?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <NavigationSimple rootClassName="navigation-simpleroot-class-name9"></NavigationSimple>
        <div className="team-laurens-back">
          <a
            href="/#team"
            target="_blank"
            rel="noreferrer noopener"
            className="team-laurens-link1"
          >
            <ButtonBack
              rootClassName="button-backroot-class-name8"
              className="team-laurens-component2"
            ></ButtonBack>
          </a>
        </div>
        <TeamMember
          imageAlt="laurens"
          imageSrc="/Team/laurensdepraetere-300w.png"
          className="team-laurens-component3"
        ></TeamMember>
        <div className="team-laurens-container2 thq-section-padding">
          <div className="team-laurens-max-width thq-flex-column thq-section-max-width">
            <div className="team-laurens-content1 thq-flex-column">
              <ul className="team-laurens-ul1 thq-flex-column">
                <li className="team-laurens-li1 thq-flex-column list-item">
                  <h2 className="team-laurens-heading7 thq-heading-2">
                    <span>Laurens Depraetere</span>
                    <br></br>
                  </h2>
                  <ul className="team-laurens-ul2 thq-flex-column">
                    <li className="team-laurens-li2 list-item">
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
                      </p>
                    </li>
                    <li className="team-laurens-li3 list-item">
                      <h3 className="thq-heading-3">Over Laurens</h3>
                      <p className="thq-body-small">
                        <span>
                          Laurens studeerde af als master in de Kinesitherapie en
                          Revalidatiewetenschappen aan de KU Leuven, met een
                          specialisatie in sport.
                        </span>
                        <br></br>
                        <br></br>
                        <span>
                          Als kinesitherapeut kiest hij voor een persoonlijke en
                          actieve aanpak. Hij vindt het belangrijk om niet alleen
                          naar de plaats van de klacht te kijken, maar ook naar de
                          mogelijke oorzaken en naar de invloed ervan op het
                          dagelijkse leven, het werk of de sport van de patiënt.
                          Samen wordt er gewerkt aan het verminderen van pijn, het
                          herstellen van beweging en kracht en het opnieuw opbouwen
                          van vertrouwen in het lichaam.
                        </span>
                        <br></br>
                        <br></br>
                        <span>
                          Laurens heeft een bijzondere interesse in sportblessures
                          en de begeleiding bij een veilige terugkeer naar sport.
                          Ook buiten de praktijk speelt sport een belangrijke rol
                          in zijn leven. Als actief triatleet combineert Laurens
                          zwemmen, fietsen en lopen. Hierdoor kent hij uit eigen
                          ervaring de uitdagingen van intensief trainen, herstellen
                          van blessures en het nastreven van sportieve doelen.
                        </span>
                        <br></br>
                        <br></br>
                        <span>
                          Met zijn rustige, toegankelijke en motiverende aanpak
                          begeleidt hij zowel sporters als niet-sporters naar een
                          sterker en duurzamer herstel.
                        </span>
                        <br></br>
                        <br></br>
                        <span className="team-laurens-text-bold">
                          Gedeconventioneerd
                        </span>
                        <br></br>
                      </p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="team-laurens-content2">
          <AfspraakBanner rootClassName="afspraak-bannerroot-class-name9"></AfspraakBanner>
        </div>
        <footer className="team-laurens-footer">
          <img
            alt="logo"
            src="/Branding/logo-1500h.jpeg"
            className="team-laurens-image"
          />
          <span className="team-laurens-text45">
            © 2024 - webdesign by Jan Pecquet
          </span>
          <div className="team-laurens-icon-group">
            <a
              href="https://www.instagram.com/mijnkine"
              target="_blank"
              rel="noreferrer noopener"
              className="team-laurens-link2"
            >
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="team-laurens-icon1"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/MijnKine/"
              target="_blank"
              rel="noreferrer noopener"
              className="team-laurens-link3"
            >
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="team-laurens-icon3"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </a>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .team-laurens-container1 {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .team-laurens-back {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
          }
          .team-laurens-link1 {
            display: contents;
          }
          .team-laurens-component2 {
            text-decoration: none;
          }
          .team-laurens-component3 {
            text-decoration: none;
          }
          .team-laurens-container2 {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .team-laurens-max-width {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
          }
          .team-laurens-content1 {
            align-self: stretch;
            align-items: flex-start;
          }
          .team-laurens-ul1 {
            align-items: flex-start;
          }
          .team-laurens-li1 {
            align-items: flex-start;
          }
          .team-laurens-heading7 {
            align-self: center;
            text-align: center;
          }
          .team-laurens-ul2 {
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
          }
          .team-laurens-li2 {
            list-style-type: none;
            list-style-image: none;
            list-style-position: outside;
          }
          .team-laurens-li3 {
            list-style-type: none;
            list-style-image: none;
            list-style-position: outside;
          }
          .team-laurens-text-bold {
            font-weight: 400;
          }
          .team-laurens-content2 {
            flex: 1;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .team-laurens-footer {
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
          .team-laurens-image {
            height: 2rem;
            object-fit: cover;
          }
          .team-laurens-icon-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .team-laurens-link2 {
            display: contents;
          }
          .team-laurens-icon1 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .team-laurens-link3 {
            display: contents;
          }
          .team-laurens-icon3 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .team-laurens-back {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 767px) {
            .team-laurens-ul2 {
              padding-left: var(--dl-space-space-threeunits);
            }
            .team-laurens-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .team-laurens-text45 {
              text-align: center;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .team-laurens-ul2 {
              padding-left: var(--dl-space-space-oneandhalfunits);
            }
            .team-laurens-footer {
              padding: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .team-laurens-image {
              margin-bottom: var(--dl-space-space-unit);
            }
            .team-laurens-text45 {
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

export default TeamLaurens

export async function getStaticProps(context) {
  const messages = (await import('/locales/' + context.locale + '.json'))
    .default
  return {
    props: {
      messages,
      ...context,
    },
  }
}
