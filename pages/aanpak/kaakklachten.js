import React from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import NavigationSimple from '../../components/navigation-simple'
import ButtonBack from '../../components/button-back'
import FeatureAanpak from '../../components/feature-aanpak'
import AfspraakBanner from '../../components/afspraak-banner'

const AanpakKaakklachten = (props) => {
  return (
    <>
      <div className="aanpak-kaakklachten-container">
        <Head>
          <title>Kaakklachten - Mijn Kine Genk</title>
          <meta
            name="description"
            content="Mijn Kine: Uw expert in kinesitherapie in Genk. Persoonlijke behandelingen voor revalidatie, blessurepreventie en pijnverlichting. Maak vandaag een afspraak!"
          />
          <meta property="og:title" content="Kaakklachten - Mijn Kine Genk" />
          <meta
            property="og:description"
            content="Mijn Kine: Uw expert in kinesitherapie in Genk. Persoonlijke behandelingen voor revalidatie, blessurepreventie en pijnverlichting. Maak vandaag een afspraak!"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ea578cad-184d-4f31-bb77-f954be0b4f25/03bb6603-4341-46a4-9f12-06a8a8638d68?org_if_sml=1&amp;q=80&amp;force_format=original"
          />
        </Head>
        <NavigationSimple rootClassName="navigation-simpleroot-class-name1"></NavigationSimple>
        <div className="aanpak-kaakklachten-back">
          <a
            href="/#aanpak"
            target="_blank"
            rel="noreferrer noopener"
            className="aanpak-kaakklachten-link1"
          >
            <ButtonBack
              rootClassName="button-backroot-class-name1"
              className="aanpak-kaakklachten-component2"
            ></ButtonBack>
          </a>
        </div>
        <div className="aanpak-kaakklachten-content">
          <FeatureAanpak
            rootClassName="feature-aanpakroot-class-name1"
            aanpakFeatureText="Een temporomandibulaire dysfunctie (TMD) is een verzamelnaam voor aandoeningen die pijn en disfunctie veroorzaken in het kaakgewricht en de spieren die verantwoordelijk zijn voor kaakbewegingen. Het temporomandibulair gewricht (TMD) verbindt de onderkaak met de schedel en speelt een cruciale rol bij het kauwen, spreken en het openen en sluiten van de mond. Kaakklachten kunnen evenzeer voortkomen uit nekklachten en visa versa. Bij de behandeling hiervan gaat de therapeut dus altijd beide regio’s goed onderzoeken."
            aanpakFeatureTitle="Kaakklachten"
            aanpakFeatureImageAlt="foto kaakklachten"
            aanpakFeatureImageSrc="/Aanpak/aanpak_kaakklachten-1400w.jpeg"
            aanpakFeatureBreadcrumb="Aanpak &gt; Kaakklachten"
          ></FeatureAanpak>
          <AfspraakBanner rootClassName="afspraak-bannerroot-class-name"></AfspraakBanner>
        </div>
        <footer className="aanpak-kaakklachten-footer">
          <img
            alt="logo"
            src="/Branding/logo-1500h.jpeg"
            className="aanpak-kaakklachten-image"
          />
          <span className="aanpak-kaakklachten-text">
            © 2024 - webdesign by Jan Pecquet
          </span>
          <div className="aanpak-kaakklachten-icon-group">
            <a
              href="https://www.instagram.com/mijnkine"
              target="_blank"
              rel="noreferrer noopener"
              className="aanpak-kaakklachten-link2"
            >
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="aanpak-kaakklachten-icon1"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/MijnKine/"
              target="_blank"
              rel="noreferrer noopener"
              className="aanpak-kaakklachten-link3"
            >
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="aanpak-kaakklachten-icon3"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </a>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .aanpak-kaakklachten-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .aanpak-kaakklachten-back {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
          }
          .aanpak-kaakklachten-link1 {
            display: contents;
          }
          .aanpak-kaakklachten-component2 {
            text-decoration: none;
          }
          .aanpak-kaakklachten-content {
            flex: 1;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .aanpak-kaakklachten-footer {
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
          .aanpak-kaakklachten-image {
            height: 2rem;
            object-fit: cover;
          }
          .aanpak-kaakklachten-icon-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .aanpak-kaakklachten-link2 {
            display: contents;
          }
          .aanpak-kaakklachten-icon1 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .aanpak-kaakklachten-link3 {
            display: contents;
          }
          .aanpak-kaakklachten-icon3 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .aanpak-kaakklachten-back {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 767px) {
            .aanpak-kaakklachten-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .aanpak-kaakklachten-text {
              text-align: center;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .aanpak-kaakklachten-footer {
              padding: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .aanpak-kaakklachten-image {
              margin-bottom: var(--dl-space-space-unit);
            }
            .aanpak-kaakklachten-text {
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

export default AanpakKaakklachten

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
