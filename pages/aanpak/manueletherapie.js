import React from 'react'
import Head from 'next/head'

import NavigationSimple from '../../components/navigation-simple'
import ButtonBack from '../../components/button-back'
import FeatureAanpak from '../../components/feature-aanpak'
import AfspraakBanner from '../../components/afspraak-banner'

const AanpakManueletherapie = (props) => {
  return (
    <>
      <div className="aanpak-manueletherapie-container">
        <Head>
          <title>Manuele therapie</title>
          <meta
            name="description"
            content="Manuele is een wetenschappelijk onderbouwde methode waarbij manuele technieken gebruikt worden om gewrichten beweeglijker te maken."
          />
          <meta property="og:title" content="Manuele therapie" />
          <meta
            property="og:description"
            content="Manuele is een wetenschappelijk onderbouwde methode waarbij manuele technieken gebruikt worden om gewrichten beweeglijker te maken."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ea578cad-184d-4f31-bb77-f954be0b4f25/f1d33086-6f14-4515-998a-427f2ae94942?org_if_sml=1&amp;q=80&amp;force_format=original"
          />
        </Head>
        <NavigationSimple rootClassName="navigation-simpleroot-class-name3"></NavigationSimple>
        <div className="aanpak-manueletherapie-back">
          <a
            href="/#aanpak"
            target="_blank"
            rel="noreferrer noopener"
            className="aanpak-manueletherapie-link1"
          >
            <ButtonBack
              rootClassName="button-backroot-class-name3"
              className="aanpak-manueletherapie-component2"
            ></ButtonBack>
          </a>
        </div>
        <div className="aanpak-manueletherapie-content">
          <FeatureAanpak
            rootClassName="feature-aanpakroot-class-name2"
            aanpakFeatureText="Manuele therapie is een specialisatie binnen de kinesitherapie. Het is een wetenschappelijk onderbouwde methode waarbij manuele technieken gebruikt worden om gewrichten beweeglijker te maken. Aan de hand van een grondig onderzoek wordt de oorzaak van de bewegingsbeperking(en) opgespoord en gecorrigeerd via mobiliserende en/of manipulatieve technieken. Hiernaast omvat het ook het geven van advies en instructies.  Manuele therapie bekijkt het lichaam als één geheel (‘de globaliteit’) en gaat op zoek naar de oorzaak van de klachten binnen de verschillende delen van het bewegingsstelsel (gewrichten, spieren, zenuwen, bindweefsel). "
            aanpakFeatureTitle="Manuele therapie"
            aanpakFeatureImageAlt="foto Manuele therapie"
            aanpakFeatureImageSrc="/Aanpak/aanpak_manueel-1400w.jpeg"
            aanpakFeatureBreadcrumb="Aanpak &gt; Dry Needling"
          ></FeatureAanpak>
          <AfspraakBanner rootClassName="afspraak-bannerroot-class-name2"></AfspraakBanner>
        </div>
        <footer className="aanpak-manueletherapie-footer">
          <img
            alt="logo"
            src="/Branding/logo-1500h.jpeg"
            className="aanpak-manueletherapie-image"
          />
          <span className="aanpak-manueletherapie-text">
            © 2024 - webdesign by Jan Pecquet
          </span>
          <div className="aanpak-manueletherapie-icon-group">
            <a
              href="https://www.instagram.com/stijn.jans.9/"
              target="_blank"
              rel="noreferrer noopener"
              className="aanpak-manueletherapie-link2"
            >
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="aanpak-manueletherapie-icon1"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/stijn.jans.9"
              target="_blank"
              rel="noreferrer noopener"
              className="aanpak-manueletherapie-link3"
            >
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="aanpak-manueletherapie-icon3"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </a>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .aanpak-manueletherapie-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .aanpak-manueletherapie-back {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
          }
          .aanpak-manueletherapie-link1 {
            display: contents;
          }
          .aanpak-manueletherapie-component2 {
            text-decoration: none;
          }
          .aanpak-manueletherapie-content {
            flex: 1;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .aanpak-manueletherapie-footer {
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
          .aanpak-manueletherapie-image {
            height: 2rem;
            object-fit: cover;
          }
          .aanpak-manueletherapie-icon-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .aanpak-manueletherapie-link2 {
            display: contents;
          }
          .aanpak-manueletherapie-icon1 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            display: none;
            margin-right: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .aanpak-manueletherapie-link3 {
            display: contents;
          }
          .aanpak-manueletherapie-icon3 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            display: none;
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .aanpak-manueletherapie-back {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 767px) {
            .aanpak-manueletherapie-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .aanpak-manueletherapie-text {
              text-align: center;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .aanpak-manueletherapie-footer {
              padding: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .aanpak-manueletherapie-image {
              margin-bottom: var(--dl-space-space-unit);
            }
            .aanpak-manueletherapie-text {
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

export default AanpakManueletherapie
