import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navigation from '../components/navigation'
import ButtonAfspraak from '../components/button-afspraak'
import AanpakCard from '../components/aanpak-card'
import AanpakPreview from '../components/aanpak-preview'
import TeamMember from '../components/team-member'
import Contact from '../components/contact'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>Mijn kine</title>
          <meta
            name="description"
            content="Bij mijnkine krijg je persoonlijke kinesitherapie en revalidatie op maat. Behandel je klachten effectief met onze deskundige, vriendelijke therapeuten."
          />
          <meta property="og:title" content="Mijn kine" />
          <meta
            property="og:description"
            content="Bij mijnkine krijg je persoonlijke kinesitherapie en revalidatie op maat. Behandel je klachten effectief met onze deskundige, vriendelijke therapeuten."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ea578cad-184d-4f31-bb77-f954be0b4f25/067e0b02-9621-4fe1-910b-d2569d5e7cd7?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <section className="home-hero">
          <Navigation></Navigation>
          <div className="home-main">
            <div className="home-content1">
              <div className="home-heading1">
                <h1 className="home-header1">
                  Kinesitherapie &amp; Revalidatie
                </h1>
              </div>
              <ButtonAfspraak></ButtonAfspraak>
            </div>
            <div className="home-image1">
              <img
                alt="image"
                src="/Logo/mijnkine.svg"
                className="home-image2"
              />
            </div>
          </div>
          <div id="features" className="home-features">
            <div className="home-content2">
              <a
                href="https://maps.app.goo.gl/qYR1X4qaBtt3z9gx8"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link10"
              >
                <div className="home-section1 quick-links">
                  <div className="home-heading2">
                    <h3 className="home-header2">Kom langs</h3>
                    <img
                      alt="image"
                      src="/Icons/arrow.svg"
                      className="home-icon1"
                    />
                  </div>
                  <p className="home-text10">
                    Hospitaalstraat 1/bus 2 , 3600 Genk
                  </p>
                  <div className="home-divider1"></div>
                </div>
              </a>
              <a
                href="mailto:info@mijnkine.be?subject="
                className="home-link11"
              >
                <div className="home-section2 quick-links">
                  <div className="home-heading3">
                    <h3 className="home-header3">Mail ons</h3>
                    <img
                      alt="image"
                      src="/Icons/arrow.svg"
                      className="home-icon2"
                    />
                  </div>
                  <p className="home-text11">info@mijnkine.be</p>
                  <div className="home-divider2"></div>
                </div>
              </a>
              <a href="#contact" className="home-link12">
                <div className="home-section3 quick-links">
                  <div className="home-heading4">
                    <h3 className="home-header4">Bel ons</h3>
                    <img
                      alt="image"
                      src="/Icons/arrow.svg"
                      className="home-icon3"
                    />
                  </div>
                  <p className="home-text12">Info bij contact</p>
                </div>
              </a>
            </div>
          </div>
          <div className="home-background"></div>
        </section>
        <section id="aanpak" className="home-practices">
          <div className="home-heading5">
            <h2 className="home-text13">Onze werking</h2>
          </div>
          <div className="home-content3">
            <div className="home-grid1">
              <div>
                <AanpakCard
                  imageAlt="patientcentraal"
                  imageSrc="/Aanpak/icon/aanpak-2-200h.png"
                  cardTitle={
                    <Fragment>
                      <span className="home-text14">
                        <span>Persoonlijke aanpak</span>
                        <br></br>
                      </span>
                    </Fragment>
                  }
                  rootClassName="aanpak-cardroot-class-name3"
                  cardDescription={
                    <Fragment>
                      <span className="home-text17">
                        <span>
                          Persoonlijke aandacht. Uw doelen, onze focus.
                        </span>
                        <br></br>
                      </span>
                    </Fragment>
                  }
                ></AanpakCard>
              </div>
              <div>
                <AanpakCard
                  imageAlt="patientcentraal"
                  imageSrc="/Aanpak/icon/aanpak-3-200h.png"
                  cardTitle={
                    <Fragment>
                      <span className="home-text20">
                        <span>Patiënt centraal</span>
                        <br></br>
                      </span>
                    </Fragment>
                  }
                  rootClassName="aanpak-cardroot-class-name4"
                  cardDescription={
                    <Fragment>
                      <span className="home-text23">
                        Kundige zorg voor uw welzijn.
                      </span>
                    </Fragment>
                  }
                ></AanpakCard>
              </div>
              <div>
                <AanpakCard
                  imageAlt="patientcentraal"
                  imageSrc="/Aanpak/icon/aanpak-1-200h.png"
                  cardTitle={
                    <Fragment>
                      <span className="home-text24">
                        Multidisciplinaire samenwerking
                      </span>
                    </Fragment>
                  }
                  rootClassName="aanpak-cardroot-class-name5"
                  cardDescription={
                    <Fragment>
                      <span className="home-text25">
                        Optimale zorg door samenwerking.
                      </span>
                    </Fragment>
                  }
                ></AanpakCard>
              </div>
            </div>
          </div>
          <div className="home-container2"></div>
          <div className="home-content4">
            <div className="home-grid2">
              <Link href="/aanpak/manueletherapie">
                <a>
                  <div className="home-practice-wrapper1">
                    <AanpakPreview
                      imageAlt="algemene aanpak"
                      imageSrc="/Aanpak/aanpak_algemene-200h.jpeg"
                      cardTitle={
                        <Fragment>
                          <span className="home-text26">Manuele therapie</span>
                        </Fragment>
                      }
                      description={
                        <Fragment>
                          <span className="home-text27">
                            Manuele therapie behandelt gewrichts- en
                            spierklachten door handmatige technieken om beweging
                            te verbeteren en pijn te verlichten.
                          </span>
                        </Fragment>
                      }
                      rootClassName="aanpak-previewroot-class-name"
                    ></AanpakPreview>
                  </div>
                </a>
              </Link>
              <Link href="/aanpak/algemenetherapie">
                <a>
                  <div className="home-practice-wrapper2">
                    <AanpakPreview
                      imageSrc="/Aanpak/aanpak_manueel-300h.jpeg"
                      cardTitle={
                        <Fragment>
                          <span className="home-text28">Algemene Therapie</span>
                        </Fragment>
                      }
                      description={
                        <Fragment>
                          <span className="home-text29">
                            Algemene kinesitherapie is gericht op het verbeteren
                            van de beweging en het behandelen van pijn via
                            oefeningen, massages, en mobilisaties.
                          </span>
                        </Fragment>
                      }
                      rootClassName="aanpak-previewroot-class-name1"
                    ></AanpakPreview>
                  </div>
                </a>
              </Link>
              <Link href="/aanpak/kaakklachten">
                <a>
                  <div className="home-practice-wrapper3">
                    <AanpakPreview
                      imageSrc="/Aanpak/aanpak_kaakklachten-300h.jpeg"
                      cardTitle={
                        <Fragment>
                          <span className="home-text30">Kaakklachten</span>
                        </Fragment>
                      }
                      description={
                        <Fragment>
                          <span className="home-text31">
                            Temporomandibulaire therapie richt zich op het
                            behandelen van klachten aan het kaakgewricht en de
                            omliggende spieren.
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </Fragment>
                      }
                      rootClassName="aanpak-previewroot-class-name2"
                    ></AanpakPreview>
                  </div>
                </a>
              </Link>
              <Link href="/aanpak/dryneedling">
                <a>
                  <div className="home-practice-wrapper4">
                    <AanpakPreview
                      title="Dry needling"
                      imageSrc="/Aanpak/aanpak_dryneedling-300h.jpeg"
                      cardTitle={
                        <Fragment>
                          <span className="home-text32">Dry Needling</span>
                        </Fragment>
                      }
                      description={
                        <Fragment>
                          <span className="home-text33">
                            Dry needling is een techniek waarbij dunne naalden
                            in spierknopen worden gestoken om pijn en spanning
                            te verminderen.
                          </span>
                        </Fragment>
                      }
                      rootClassName="aanpak-previewroot-class-name3"
                    ></AanpakPreview>
                  </div>
                </a>
              </Link>
              <Link href="/aanpak/taping">
                <a>
                  <div className="home-practice-wrapper5">
                    <AanpakPreview
                      imageSrc="/Aanpak/aanpak_taping-300h.jpeg"
                      cardTitle={
                        <Fragment>
                          <span className="home-text34">Taping</span>
                        </Fragment>
                      }
                      description={
                        <Fragment>
                          <span className="home-text35">
                            Taping is een techniek waarbij elastische of
                            niet-elastische tape op de huid wordt aangebracht om
                            spieren, gewrichten of ligamenten te ondersteunen,
                            stabiliseren of te ontlasten.
                          </span>
                        </Fragment>
                      }
                      rootClassName="aanpak-previewroot-class-name4"
                    ></AanpakPreview>
                  </div>
                </a>
              </Link>
              <Link href="/aanpak/sportrevalidatie">
                <a>
                  <div className="home-practice-wrapper6">
                    <AanpakPreview
                      cardTitle={
                        <Fragment>
                          <span className="home-text36">Sportrevalidatie</span>
                        </Fragment>
                      }
                      description={
                        <Fragment>
                          <span className="home-text37">
                            Doormiddel van oefentherapie de patiënt terug laten
                            functioneren op zijn voorgaande niveau en hem
                            ondersteunen richting performance enhancement.
                          </span>
                        </Fragment>
                      }
                      rootClassName="aanpak-previewroot-class-name5"
                    ></AanpakPreview>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <section id="team" className="home-team">
          <div className="home-heading6">
            <h2 className="home-text38">Ondek ons team</h2>
          </div>
          <div className="home-list">
            <div data-teleport="doctors" className="home-doctors">
              <Link href="/team/stijn">
                <a className="home-link19">
                  <TeamMember
                    text="Kinesitherapeut"
                    heading="Stijn Jans"
                    imageSrc="/Team/stijnjans-300w.png"
                    className="home-component20"
                  ></TeamMember>
                </a>
              </Link>
              <Link href="/team/arne">
                <a className="home-link20">
                  <TeamMember
                    text="Kinesitherapeut"
                    heading="Arne Budo"
                    imageAlt="Arne Budo"
                    imageSrc="/Team/arnebudo-300w.png"
                    className="home-component21"
                  ></TeamMember>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <div id="contact" className="home-contact">
          <Contact></Contact>
        </div>
        <footer className="home-footer">
          <img
            alt="logo"
            src="/Branding/logo-1500h.jpeg"
            className="home-image3"
          />
          <span className="home-text39">© 2024 - webdesign by Jan Pecquet</span>
          <div className="home-icon-group">
            <a
              href="https://www.instagram.com/mijnkine"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link21"
            >
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon4">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/MijnKine/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link22"
            >
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon6">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </a>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            scroll-behavior: smooth;
          }
          .home-hero {
            width: 100%;
            height: 100vh;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .home-main {
            flex: 1;
            width: 100%;
            display: flex;
            z-index: 100;
            max-width: 1440px;
            align-items: stretch;
            padding-left: var(--dl-space-space-fiveunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-content1 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: center;
          }
          .home-heading1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header1 {
            width: 100%;
            font-size: 62px;
            max-width: 750px;
            font-style: normal;
            font-weight: 600;
            line-height: 74px;
          }
          .home-image1 {
            flex: 1;
            display: flex;
            align-items: center;
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: row;
            justify-content: center;
          }
          .home-image2 {
            width: 475px;
            height: 455px;
            object-fit: cover;
          }
          .home-features {
            width: 100%;
            display: flex;
            z-index: 100;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
            background-color: var(--dl-color-primary-main);
          }
          .home-content2 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            display: flex;
            position: relative;
            max-width: 1440px;
            align-items: center;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: row;
          }
          .home-link10 {
            display: contents;
          }
          .home-section1 {
            height: auto;
            position: relative;
            text-decoration: none;
          }
          .home-heading2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-header2 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 600;
          }
          .home-icon1 {
            width: 20px;
            object-fit: cover;
          }
          .home-text10 {
            color: rgb(255, 255, 255);
            width: 100%;
            max-width: 300px;
            line-height: 24px;
          }
          .home-divider1 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: none;
          }
          .home-link11 {
            display: contents;
          }
          .home-section2 {
            height: auto;
            position: relative;
            text-decoration: none;
          }
          .home-heading3 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-header3 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 600;
          }
          .home-icon2 {
            width: 20px;
            object-fit: cover;
          }
          .home-text11 {
            color: rgb(255, 255, 255);
            width: 100%;
            max-width: 300px;
            line-height: 24px;
          }
          .home-divider2 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: none;
          }
          .home-link12 {
            display: contents;
          }
          .home-section3 {
            height: auto;
            position: relative;
            text-decoration: none;
          }
          .home-heading4 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-header4 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 600;
          }
          .home-icon3 {
            width: 20px;
            object-fit: cover;
          }
          .home-text12 {
            color: rgb(255, 255, 255);
            width: 100%;
            max-width: 300px;
          }
          .home-background {
            right: 0px;
            width: 37%;
            bottom: 0px;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-end;
            background-color: var(--dl-color-gray-900);
          }
          .home-practices {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: flex-start;
            padding-top: 120px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: 120px;
            flex-direction: column;
            padding-bottom: 120px;
          }
          .home-heading5 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text13 {
            font-size: 56px;
          }
          .home-content3 {
            gap: var(--dl-space-space-fourunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-grid1 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            width: auto;
            display: grid;
            align-items: flex-start;
            flex-direction: column;
            grid-template-columns: repeat(3, 1fr);
          }
          .home-text14 {
            fill: var(--dl-color-primary-main);
            color: var(--dl-color-primary-main);
            display: inline-block;
            margin-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text17 {
            width: var(--dl-size-size-large);
            display: inline-block;
            font-size: 10px;
          }
          .home-text20 {
            fill: var(--dl-color-primary-main);
            color: var(--dl-color-primary-main);
            display: inline-block;
            margin-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text23 {
            width: var(--dl-size-size-large);
            display: inline-block;
            font-size: 10px;
            text-align: center;
          }
          .home-text24 {
            fill: var(--dl-color-primary-main);
            color: var(--dl-color-primary-main);
            display: inline-block;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text25 {
            width: var(--dl-size-size-large);
            display: inline-block;
            font-size: 10px;
            text-align: center;
          }
          .home-container2 {
            width: 100%;
            display: flex;
            position: relative;
            border-color: rgba(120, 120, 120, 0.4);
            border-style: solid;
            border-width: 1px;
          }
          .home-content4 {
            gap: var(--dl-space-space-fourunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-grid2 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            display: grid;
            align-items: flex-start;
            flex-direction: column;
            grid-template-columns: repeat(3, 1fr);
          }
          .home-practice-wrapper1 {
            cursor: pointer;
            text-decoration: none;
          }
          .home-text26 {
            color: var(--dl-color-theme-neutral-light);
            display: inline-block;
            position: relative;
            font-size: 32px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            text-transform: capitalize;
          }
          .home-text27 {
            display: inline-block;
            font-weight: 400;
          }
          .home-practice-wrapper2 {
            cursor: pointer;
            text-decoration: none;
          }
          .home-text28 {
            color: var(--dl-color-theme-neutral-light);
            display: inline-block;
            position: relative;
            font-size: 32px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            text-transform: capitalize;
          }
          .home-text29 {
            display: inline-block;
          }
          .home-practice-wrapper3 {
            cursor: pointer;
            text-decoration: none;
          }
          .home-text30 {
            color: var(--dl-color-theme-neutral-light);
            display: inline-block;
            position: relative;
            font-size: 32px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            text-transform: capitalize;
          }
          .home-text31 {
            display: inline-block;
          }
          .home-practice-wrapper4 {
            cursor: pointer;
            text-decoration: none;
          }
          .home-text32 {
            color: var(--dl-color-theme-neutral-light);
            display: inline-block;
            position: relative;
            font-size: 32px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            text-transform: capitalize;
          }
          .home-text33 {
            display: inline-block;
          }
          .home-practice-wrapper5 {
            cursor: pointer;
            text-decoration: none;
          }
          .home-text34 {
            color: var(--dl-color-theme-neutral-light);
            display: inline-block;
            position: relative;
            font-size: 32px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            text-transform: capitalize;
          }
          .home-text35 {
            display: inline-block;
          }
          .home-practice-wrapper6 {
            cursor: pointer;
            text-decoration: none;
          }
          .home-text36 {
            color: var(--dl-color-theme-neutral-light);
            display: inline-block;
            position: relative;
            font-size: 32px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
            text-transform: capitalize;
          }
          .home-text37 {
            display: inline-block;
          }
          .home-team {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
            background-color: var(--dl-color-primary-main);
          }
          .home-heading6 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text38 {
            font-size: 56px;
            max-width: 600px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .home-list {
            gap: var(--dl-space-space-fourunits);
            width: auto;
            display: flex;
            max-width: auto;
            align-items: center;
            flex-direction: row;
          }
          .home-doctors {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-link19 {
            display: contents;
          }
          .home-component20 {
            text-decoration: none;
          }
          .home-link20 {
            display: contents;
          }
          .home-component21 {
            text-decoration: none;
          }
          .home-contact {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            background-color: var(--dl-color-gray-900);
          }
          .home-footer {
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
          .home-image3 {
            height: 2rem;
            object-fit: cover;
          }
          .home-icon-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-link21 {
            display: contents;
          }
          .home-icon4 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .home-link22 {
            display: contents;
          }
          .home-icon6 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .home-hero {
              flex: 1;
              height: 0px;
            }
            .home-main {
              flex-direction: column-reverse;
            }
            .home-content1 {
              width: 100%;
            }
            .home-header1 {
              max-width: 75%;
            }
            .home-image1 {
              width: var(--dl-size-size-xxlarge);
              height: var(--dl-size-size-xxlarge);
              justify-content: flex-start;
            }
            .home-image2 {
              width: unset;
              height: unset;
            }
            .home-features {
              padding-top: var(--dl-space-space-fourunits);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-content2 {
              flex-direction: column;
            }
            .home-section1 {
              border-right-width: 0px;
            }
            .home-divider1 {
              width: 80px;
              height: 1px;
              display: flex;
              border-color: #ffffff;
              border-width: 0px;
              background-color: #ffffff;
            }
            .home-section2 {
              border-right-width: 0px;
            }
            .home-divider2 {
              width: 80px;
              height: 1px;
              display: flex;
              border-color: #ffffff;
              border-width: 0px;
              background-color: #ffffff;
            }
            .home-section3 {
              border-right-width: 0px;
            }
            .home-background {
              display: none;
            }
            .home-practices {
              flex-direction: column;
            }
            .home-team {
              padding-left: unset;
              padding-right: unset;
            }
            .home-heading6 {
              padding-right: var(--dl-space-space-fiveunits);
            }
            .home-list {
              width: 100%;
              position: relative;
              align-self: center;
              padding-left: 0px;
              flex-direction: column-reverse;
            }
            .home-doctors {
              width: 100%;
              overflow: hidden;
            }
          }
          @media (max-width: 767px) {
            .home-main {
              align-items: flex-start;
              padding-left: var(--dl-space-space-oneandhalfunits);
              justify-content: flex-start;
            }
            .home-heading1 {
              width: 100%;
            }
            .home-header1 {
              font-size: 32px;
              max-width: 70%;
              line-height: 38px;
            }
            .home-content2 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-header2 {
              font-size: 20px;
              line-height: 24px;
            }
            .home-text10 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header3 {
              font-size: 20px;
              line-height: 24px;
            }
            .home-text11 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header4 {
              font-size: 20px;
              line-height: 24px;
            }
            .home-text12 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-background {
              display: none;
            }
            .home-practices {
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-heading5 {
              gap: var(--dl-space-space-unit);
            }
            .home-text13 {
              font-size: 30px;
              line-height: 36px;
            }
            .home-content3 {
              gap: var(--dl-space-space-threeunits);
              width: 100%;
            }
            .home-grid1 {
              gap: var(--dl-space-space-twounits);
              width: 100%;
              grid-template-columns: repeat(1, 1fr);
            }
            .home-text17 {
              width: auto;
            }
            .home-text23 {
              width: auto;
            }
            .home-text25 {
              width: auto;
            }
            .home-content4 {
              gap: var(--dl-space-space-threeunits);
              width: 100%;
            }
            .home-grid2 {
              gap: var(--dl-space-space-twounits);
              width: 100%;
              grid-template-columns: repeat(1, 1fr);
            }
            .home-team {
              gap: var(--dl-space-space-threeunits);
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-heading6 {
              gap: var(--dl-space-space-unit);
              padding-right: 0px;
            }
            .home-text38 {
              font-size: 24px;
            }
            .home-list {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .home-doctors {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .home-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text39 {
              text-align: center;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .home-content1 {
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-header1 {
              max-width: 80%;
            }
            .home-footer {
              padding: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .home-image3 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text39 {
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

export default Home
