import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navigation from '../components/navigation'
import ButtonAfspraak from '../components/button-afspraak'
import AanpakCard from '../components/aanpak-card'
import Practice from '../components/practice'
import TeamMember from '../components/team-member'
import Contact from '../components/contact'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>mijnkine</title>
          <meta property="og:title" content="mijnkine" />
        </Head>
        <section className="home-hero">
          <Navigation></Navigation>
          <div className="home-main">
            <div className="home-content">
              <div className="home-heading">
                <h1 className="home-header">
                  Kinesitherapie &amp; Revalidatie
                </h1>
              </div>
              <ButtonAfspraak></ButtonAfspraak>
            </div>
            <div className="home-image">
              <img
                alt="image"
                src="/Logo/mijnkine.svg"
                className="home-image1"
              />
            </div>
          </div>
          <div id="features" className="home-features">
            <div className="home-content1">
              <a
                href="https://maps.app.goo.gl/qYR1X4qaBtt3z9gx8"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link"
              >
                <div className="home-section quick-links">
                  <div className="home-heading1">
                    <h3 className="home-header1">Kom langs</h3>
                    <img
                      alt="image"
                      src="/Icons/arrow.svg"
                      className="home-icon"
                    />
                  </div>
                  <p className="home-text">
                    hospitaalstraat 1/bus 2 , 3600 genk
                  </p>
                  <div className="home-divider"></div>
                </div>
              </a>
              <a
                href="mailto:info@mijnkine.be?subject="
                className="home-link01"
              >
                <div className="home-section1 quick-links">
                  <div className="home-heading2">
                    <h3 className="home-header2">Mail ons</h3>
                    <img
                      alt="image"
                      src="/Icons/arrow.svg"
                      className="home-icon1"
                    />
                  </div>
                  <p className="home-text01">info@mijnkine.be</p>
                  <div className="home-divider1"></div>
                </div>
              </a>
              <a href="tel:+32487452826" className="home-link02">
                <div className="home-section2 quick-links">
                  <div className="home-heading3">
                    <h3 className="home-header3">Bel ons</h3>
                    <img
                      alt="image"
                      src="/Icons/arrow.svg"
                      className="home-icon2"
                    />
                  </div>
                  <p className="home-text02">+32 487 45 28 26</p>
                  <div className="home-divider2"></div>
                </div>
              </a>
            </div>
          </div>
          <div className="home-background"></div>
        </section>
        <section id="aanpak" className="home-practices">
          <div className="home-heading4">
            <h2 className="home-text03">
              Onze aanpak
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </h2>
          </div>
          <div className="home-content2">
            <div className="home-grid">
              <div>
                <AanpakCard
                  imageAlt="patientcentraal"
                  imageSrc="/Aanpak/icon/aanpak1-200h.png"
                  cardTitle={
                    <fragment>
                      <span className="home-text04">
                        <span>Persoonlijke aanpak</span>
                        <br></br>
                      </span>
                    </fragment>
                  }
                  rootClassName="aanpak-card-root-class-name2"
                  cardDescription={
                    <fragment>
                      <span className="home-text07">
                        <span>
                          Persoonlijke aandacht. Uw doelen, onze focus.
                        </span>
                        <br></br>
                      </span>
                    </fragment>
                  }
                ></AanpakCard>
              </div>
              <div>
                <AanpakCard
                  imageAlt="patientcentraal"
                  imageSrc="/Aanpak/icon/aanpak2-200h.png"
                  cardTitle={
                    <fragment>
                      <span className="home-text10">
                        <span>Patiënt centraal</span>
                        <br></br>
                      </span>
                    </fragment>
                  }
                  rootClassName="aanpak-card-root-class-name"
                  cardDescription={
                    <fragment>
                      <span className="home-text13">
                        Kundige zorg voor uw welzijn.
                      </span>
                    </fragment>
                  }
                ></AanpakCard>
              </div>
              <div>
                <AanpakCard
                  imageAlt="patientcentraal"
                  imageSrc="/Aanpak/icon/aanpak3-200h.png"
                  cardTitle={
                    <fragment>
                      <span className="home-text14">
                        Multidisciplinaire samenwerking
                      </span>
                    </fragment>
                  }
                  rootClassName="aanpak-card-root-class-name1"
                  cardDescription={
                    <fragment>
                      <span className="home-text15">
                        Optimale zorg door samenwerking.
                      </span>
                    </fragment>
                  }
                ></AanpakCard>
              </div>
            </div>
          </div>
          <div className="home-content3">
            <div className="home-grid1">
              <Link href="/aanpak/manueletherapie">
                <a>
                  <div className="home-practice-wrapper">
                    <Practice
                      text={
                        <fragment>
                          <span className="home-text16">
                            Manuele therapie behandelt gewrichts- en
                            spierklachten door handmatige technieken om beweging
                            te verbeteren en pijn te verlichten.
                          </span>
                        </fragment>
                      }
                      title="Manuele therapie"
                      imageSrc="/Aanpak/aanpak_algemene-200h.jpeg"
                    ></Practice>
                  </div>
                </a>
              </Link>
              <Link href="/aanpak/algemenetherapie">
                <a>
                  <div className="home-practice-wrapper1">
                    <Practice
                      text={
                        <fragment>
                          <span className="home-text17">
                            Algemene kinesitherapie is gericht op het verbeteren
                            van de beweging en het behandelen van pijn via
                            oefeningen, massages, en mobilisaties.
                          </span>
                        </fragment>
                      }
                      title="Algemene therapie"
                      imageSrc="/Aanpak/aanpak_manueel-200h.jpeg"
                    ></Practice>
                  </div>
                </a>
              </Link>
              <Link href="/aanpak/kaakklachten">
                <a>
                  <div className="home-practice-wrapper2">
                    <Practice
                      text={
                        <fragment>
                          <span className="home-text18">
                            Temporomandibulaire therapie richt zich op het
                            behandelen van klachten aan het kaakgewricht en de
                            omliggende spieren.
                            <span
                              dangerouslySetInnerHTML={{
                                __html: ' ',
                              }}
                            />
                          </span>
                        </fragment>
                      }
                      title="Kaakklachten"
                      imageSrc="/Aanpak/aanpak_kaakklachten-200h.jpeg"
                    ></Practice>
                  </div>
                </a>
              </Link>
              <Link href="/aanpak/dryneedling">
                <a>
                  <div className="home-practice-wrapper3">
                    <Practice
                      text={
                        <fragment>
                          <span className="home-text19">
                            Dry needling is een techniek waarbij dunne naalden
                            in spierknopen worden gestoken om pijn en spanning
                            te verminderen.
                          </span>
                        </fragment>
                      }
                      title="Dry needling"
                      imageSrc="/Aanpak/aanpak_dryneedling-200h.jpeg"
                    ></Practice>
                  </div>
                </a>
              </Link>
              <Link href="/aanpak/taping">
                <a>
                  <div className="home-practice-wrapper4">
                    <Practice
                      text={
                        <fragment>
                          <span className="home-text20">
                            Taping is een techniek waarbij elastische of
                            niet-elastische tape op de huid wordt aangebracht om
                            spieren, gewrichten of ligamenten te ondersteunen,
                            stabiliseren of te ontlasten.
                          </span>
                        </fragment>
                      }
                      title="Taping"
                      imageSrc="/Aanpak/aanpak_taping-200h.jpeg"
                    ></Practice>
                  </div>
                </a>
              </Link>
              <Link href="/aanpak/sportrevalidatie">
                <a>
                  <div className="home-practice-wrapper5">
                    <Practice
                      text={
                        <fragment>
                          <span className="home-text21">
                            Doormiddel van oefentherapie de patiënt terug laten
                            functioneren op zijn voorgaande niveau en hem
                            ondersteunen richting performance enhancement.
                          </span>
                        </fragment>
                      }
                      title="Sportrevalidatie"
                      imageSrc="/Aanpak/aanpak_algemene-200h.jpeg"
                    ></Practice>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <section id="team" className="home-team">
          <div className="home-heading5">
            <h2 className="home-text22">Ondek ons team</h2>
          </div>
          <div className="home-list">
            <div data-teleport="doctors" className="home-doctors">
              <Link href="/team/stijn">
                <a className="home-link09">
                  <TeamMember
                    text="Kinesitherapeut"
                    heading="Stijn Jans"
                    imageSrc="/Team/stijnjans-300w.png"
                    className="home-component10"
                  ></TeamMember>
                </a>
              </Link>
              <Link href="/team/arne">
                <a className="home-link10">
                  <TeamMember
                    text="Kinesitherapeut"
                    heading="Arne Budo"
                    imageAlt="Arne Budo"
                    imageSrc="/Team/arnebudo-300w.png"
                    className="home-component11"
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
            className="home-image2"
          />
          <span className="home-text23">© 2024 - webdesign by Jan Pecquet</span>
          <div className="home-icon-group">
            <a
              href="https://www.instagram.com/stijn.jans.9/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link11"
            >
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon3">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/stijn.jans.9"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link12"
            >
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon5">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </a>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .home-container {
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
          .home-content {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: center;
          }
          .home-heading {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header {
            width: 100%;
            font-size: 62px;
            max-width: 750px;
            font-style: normal;
            font-weight: 600;
            line-height: 74px;
          }
          .home-image {
            flex: 1;
            display: flex;
            align-items: center;
            padding-right: var(--dl-space-space-fiveunits);
            flex-direction: row;
            justify-content: center;
          }
          .home-image1 {
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
          .home-content1 {
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
          .home-link {
            display: contents;
          }
          .home-section {
            position: relative;
            text-decoration: none;
          }
          .home-heading1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-header1 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 600;
          }
          .home-icon {
            width: 20px;
            object-fit: cover;
          }
          .home-text {
            color: rgb(255, 255, 255);
            width: 100%;
            max-width: 300px;
            line-height: 24px;
          }
          .home-divider {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: none;
          }
          .home-link01 {
            display: contents;
          }
          .home-section1 {
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
          .home-text01 {
            color: rgb(255, 255, 255);
            width: 100%;
            max-width: 300px;
            line-height: 24px;
          }
          .home-divider1 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: none;
          }
          .home-link02 {
            display: contents;
          }
          .home-section2 {
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
          .home-text02 {
            color: rgb(255, 255, 255);
            width: 100%;
            max-width: 300px;
            line-height: 24px;
          }
          .home-divider2 {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: none;
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
          .home-heading4 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text03 {
            font-size: 56px;
          }
          .home-content2 {
            gap: var(--dl-space-space-fourunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-grid {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            width: auto;
            display: grid;
            align-items: flex-start;
            flex-direction: column;
            grid-template-columns: repeat(3, 1fr);
          }
          .home-text04 {
            fill: var(--dl-color-primary-main);
            color: var(--dl-color-primary-main);
            display: inline-block;
            margin-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text07 {
            width: var(--dl-size-size-large);
            display: inline-block;
            font-size: 10px;
          }
          .home-text10 {
            fill: var(--dl-color-primary-main);
            color: var(--dl-color-primary-main);
            display: inline-block;
            margin-top: var(--dl-space-space-halfunit);
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text13 {
            width: var(--dl-size-size-large);
            display: inline-block;
            font-size: 10px;
            text-align: center;
          }
          .home-text14 {
            fill: var(--dl-color-primary-main);
            color: var(--dl-color-primary-main);
            display: inline-block;
            margin-top: var(--dl-space-space-halfunit);
            text-align: center;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text15 {
            width: var(--dl-size-size-large);
            display: inline-block;
            font-size: 10px;
            text-align: center;
          }
          .home-content3 {
            gap: var(--dl-space-space-fourunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-grid1 {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            display: grid;
            align-items: flex-start;
            flex-direction: column;
            grid-template-columns: repeat(3, 1fr);
          }
          .home-practice-wrapper {
            cursor: pointer;
            text-decoration: none;
          }
          .home-text16 {
            display: inline-block;
          }
          .home-practice-wrapper1 {
            cursor: pointer;
            text-decoration: none;
          }
          .home-text17 {
            display: inline-block;
          }
          .home-practice-wrapper2 {
            cursor: pointer;
            text-decoration: none;
          }
          .home-text18 {
            display: inline-block;
          }
          .home-practice-wrapper3 {
            cursor: pointer;
            text-decoration: none;
          }
          .home-text19 {
            display: inline-block;
          }
          .home-practice-wrapper4 {
            cursor: pointer;
            text-decoration: none;
          }
          .home-text20 {
            display: inline-block;
          }
          .home-practice-wrapper5 {
            cursor: pointer;
            text-decoration: none;
          }
          .home-text21 {
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
          .home-heading5 {
            gap: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text22 {
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
          .home-link09 {
            display: contents;
          }
          .home-component10 {
            text-decoration: none;
          }
          .home-link10 {
            display: contents;
          }
          .home-component11 {
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
          .home-image2 {
            height: 2rem;
            object-fit: cover;
          }
          .home-icon-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-link11 {
            display: contents;
          }
          .home-icon3 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .home-link12 {
            display: contents;
          }
          .home-icon5 {
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
            .home-content {
              width: 100%;
            }
            .home-header {
              max-width: 75%;
            }
            .home-image {
              width: var(--dl-size-size-xxlarge);
              height: var(--dl-size-size-xxlarge);
              justify-content: flex-start;
            }
            .home-image1 {
              width: unset;
              height: unset;
            }
            .home-features {
              padding-top: var(--dl-space-space-fourunits);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-content1 {
              flex-direction: column;
            }
            .home-section {
              border-right-width: 0px;
            }
            .home-divider {
              width: 80px;
              height: 1px;
              display: flex;
              border-color: #ffffff;
              border-width: 0px;
              background-color: #ffffff;
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
            .home-heading5 {
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
            .home-heading {
              width: 100%;
            }
            .home-header {
              font-size: 32px;
              max-width: 70%;
              line-height: 38px;
            }
            .home-content1 {
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-header1 {
              font-size: 20px;
              line-height: 24px;
            }
            .home-text {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header2 {
              font-size: 20px;
              line-height: 24px;
            }
            .home-text01 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-header3 {
              font-size: 20px;
              line-height: 24px;
            }
            .home-text02 {
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
            .home-heading4 {
              gap: var(--dl-space-space-unit);
            }
            .home-text03 {
              font-size: 30px;
              line-height: 36px;
            }
            .home-content2 {
              gap: var(--dl-space-space-threeunits);
              width: 100%;
            }
            .home-grid {
              gap: var(--dl-space-space-twounits);
              width: 100%;
              grid-template-columns: repeat(1, 1fr);
            }
            .home-text07 {
              width: auto;
            }
            .home-text13 {
              width: auto;
            }
            .home-text15 {
              width: auto;
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
            .home-team {
              gap: var(--dl-space-space-threeunits);
              padding-top: var(--dl-space-space-fourunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-heading5 {
              gap: var(--dl-space-space-unit);
              padding-right: 0px;
            }
            .home-text22 {
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
            .home-text23 {
              text-align: center;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .home-content {
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-header {
              max-width: 80%;
            }
            .home-footer {
              padding: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .home-image2 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text23 {
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
