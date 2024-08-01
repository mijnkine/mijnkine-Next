import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import NavigationSimple from '../../components/navigation-simple'
import ButtonBack from '../../components/button-back'
import TeamMember from '../../components/team-member'
import AfspraakBanner from '../../components/afspraak-banner'

const TeamArne = (props) => {
  return (
    <>
      <div className="team-arne-container">
        <Head>
          <title>Arne Budo</title>
          <meta name="description" content="Kinesist" />
          <meta property="og:title" content="Arne Budo" />
          <meta property="og:description" content="Kinesist" />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ea578cad-184d-4f31-bb77-f954be0b4f25/0eb89556-aac6-46d6-849b-971d4c9690c8?org_if_sml=1&amp;q=80&amp;force_format=original"
          />
        </Head>
        <NavigationSimple rootClassName="navigation-simple-root-class-name8"></NavigationSimple>
        <div className="team-arne-back">
          <Link href="/">
            <a className="team-arne-link">
              <ButtonBack
                rootClassName="button-back-root-class-name8"
                className="team-arne-component1"
              ></ButtonBack>
            </a>
          </Link>
        </div>
        <TeamMember
          imageAlt="arne"
          imageSrc="/Team/arnebudo-300w.png"
          className="team-arne-component2"
        ></TeamMember>
        <div className="team-arne-container1 thq-section-padding">
          <div className="team-arne-max-width thq-flex-column thq-section-max-width">
            <div className="team-arne-content thq-flex-column">
              <ul className="team-arne-ul thq-flex-column">
                <li className="team-arne-li thq-flex-column list-item">
                  <h2 className="team-arne-heading7 thq-heading-2">
                    <span>Arne Budo</span>
                    <br></br>
                  </h2>
                  <ul className="team-arne-ul1 thq-flex-column">
                    <li className="team-arne-li1 list-item">
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
                      </p>
                    </li>
                    <li className="team-arne-li2 list-item">
                      <h3 className="thq-heading-3">Over mij</h3>
                      <p className="thq-body-small">
                        <span>
                          Arne studeerde in 2019 af als kinesitherapeut in de
                          afstudeerrichting &apos;sportkinesitherapie&apos; aan
                          de UHasselt.
                        </span>
                        <br></br>
                        <br></br>
                        <span>
                          Door zijn interesse binnen de sport staat hij klaar om
                          sporters te begeleiden, zowel preventief als na een
                          blessure.
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <br></br>
                        <span>
                          Net zoals revalidatie na orthopedische ingrepen hem
                          nauw aan het hart liggen.
                        </span>
                        <br></br>
                        <br></br>
                        <span>
                          {' '}
                          Bijkomend heeft Arne in 2022 een 2-jarige opleiding
                          als manueel therapeut afgerond aan het IMFT te Gent.
                          Dankzij deze opleiding heeft hij zijn manuele skills
                          verbeterd om een zo efficiënt mogelijke behandeling
                          aan te bieden.
                        </span>
                        <br></br>
                        <br></br>
                        <span>
                          Gecombineerd met manuele therapie kan je bij hem ook
                          terecht voor dry needling en behandelingen van de
                          kaak.
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                        <br></br>
                        <br></br>
                        <span>
                          {' '}
                          In zijn vrije tijd vind je Arne terug in de natuur of
                          op het sportveld waar hij aan calisthenics doet.
                        </span>
                        <br></br>
                        <br></br>
                        <span>
                          {' '}
                          Een zeer persoonlijke en holistische visie kenmerken
                          Arne om tot de beste resultaten te komen.
                        </span>
                      </p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="team-arne-content1">
          <AfspraakBanner rootClassName="afspraak-banner-root-class-name7"></AfspraakBanner>
        </div>
        <footer className="team-arne-footer">
          <img
            alt="logo"
            src="/Branding/logo-1500h.jpeg"
            className="team-arne-image"
          />
          <span className="team-arne-text29">
            © 2024 - webdesign by Jan Pecquet
          </span>
          <div className="team-arne-icon-group">
            <a
              href="https://www.instagram.com/stijn.jans.9/"
              target="_blank"
              rel="noreferrer noopener"
              className="team-arne-link1"
            >
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="team-arne-icon"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/stijn.jans.9"
              target="_blank"
              rel="noreferrer noopener"
              className="team-arne-link2"
            >
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="team-arne-icon2"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </a>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .team-arne-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .team-arne-back {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
          }
          .team-arne-link {
            display: contents;
          }
          .team-arne-component1 {
            text-decoration: none;
          }
          .team-arne-component2 {
            text-decoration: none;
          }
          .team-arne-container1 {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .team-arne-max-width {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            flex-direction: column;
          }
          .team-arne-content {
            align-self: stretch;
            align-items: flex-start;
          }
          .team-arne-ul {
            align-items: flex-start;
          }
          .team-arne-li {
            align-items: flex-start;
          }
          .team-arne-heading7 {
            align-self: center;
            text-align: center;
          }
          .team-arne-ul1 {
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
          }
          .team-arne-li1 {
            list-style-type: none;
            list-style-image: none;
            list-style-position: outside;
          }
          .team-arne-li2 {
            list-style-type: none;
            list-style-image: none;
            list-style-position: outside;
          }
          .team-arne-content1 {
            flex: 1;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .team-arne-footer {
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
          .team-arne-image {
            height: 2rem;
            object-fit: cover;
          }
          .team-arne-icon-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .team-arne-link1 {
            display: contents;
          }
          .team-arne-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .team-arne-link2 {
            display: contents;
          }
          .team-arne-icon2 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .team-arne-back {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 767px) {
            .team-arne-ul1 {
              padding-left: var(--dl-space-space-threeunits);
            }
            .team-arne-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .team-arne-text29 {
              text-align: center;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .team-arne-ul1 {
              padding-left: var(--dl-space-space-oneandhalfunits);
            }
            .team-arne-footer {
              padding: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .team-arne-image {
              margin-bottom: var(--dl-space-space-unit);
            }
            .team-arne-text29 {
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

export default TeamArne
