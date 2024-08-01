import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import NavigationSimple from '../../components/navigation-simple'
import ButtonBack from '../../components/button-back'
import FeatureAanpak from '../../components/feature-aanpak'
import AfspraakBanner from '../../components/afspraak-banner'

const AanpakSportrevalidatie = (props) => {
  return (
    <>
      <div className="aanpak-sportrevalidatie-container">
        <Head>
          <title>Sportrevalidatie</title>
          <meta
            name="description"
            content="Sportkinesitherapie omvat alle sportblessures, al dan niet operatief. (meniscus, kruisbanden, loopblessures, schouderproblemen)"
          />
          <meta property="og:title" content="Sportrevalidatie" />
          <meta
            property="og:description"
            content="Sportkinesitherapie omvat alle sportblessures, al dan niet operatief. (meniscus, kruisbanden, loopblessures, schouderproblemen)"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ea578cad-184d-4f31-bb77-f954be0b4f25/e351c269-fa51-4505-ad50-e05d7c81c921?org_if_sml=1&amp;q=80&amp;force_format=original"
          />
        </Head>
        <NavigationSimple rootClassName="navigation-simple-root-class-name6"></NavigationSimple>
        <div className="aanpak-sportrevalidatie-back">
          <Link href="/">
            <a className="aanpak-sportrevalidatie-link">
              <ButtonBack
                rootClassName="button-back-root-class-name6"
                className="aanpak-sportrevalidatie-component1"
              ></ButtonBack>
            </a>
          </Link>
        </div>
        <div className="aanpak-sportrevalidatie-content">
          <FeatureAanpak
            rootClassName="feature-aanpak-root-class-name5"
            aanpakFeatureText="Sportkinesitherapie omvat alle sportblessures, al dan niet operatief. (meniscus, kruisbanden, loopblessures, schouderproblemen,... ) Door functionele oefentherapie op het niveau van de patiënt wordt het herstel zo optimaal mogelijk bevorderd. Dit kan soms in combinatie met bepaalde manuele technieken. De bedoeling in de eindfase is om het risico op recidief zo laag mogelijk te houden.  (Sportrevalidatie omvat het behandelen van sportletsel, dit voor zowel amateur-als profsporters. Een sportkinesitherapeut begrijpt wat er tijdens het sporten gebeurt en snapt daarom hoe u geblesseerd bent geraakt. Als sporter weet hij ook hoe belangrijk de sport voor u en uw vereniging is. Hij werkt met u een persoonlijk behandelplan en revalidatieschema uit dat afgestemd is op uw mogelijkheden en de sport die u beoefent. Hierin wordt vaak gefocust op aspecten zoals coördinatie, snelheid, lenigheid, kracht en uithoudingsvermogen. Uw sportkinesitherapeut kan kiezen uit verschillende behandelmogelijkheden zoals oefenprogramma’s met of zonder gebruik van trainingsapparatuur, braces of taping, mobiliserende technieken en diverse ondersteunende behandelapparatuur. Hij traint u sportspecifiek en functioneel, zodat u kunt herstellen tot op uw oorspronkelijke sportniveau. Hij overlegt zo nodig met uw trainer over een aangepast trainingsschema. U merkt dat u een stuk makkelijker praat met een specialist die u als sporter benadert.)"
            aanpakFeatureTitle="Sportrevalidatie/Orthopedische revalidatie"
            aanpakFeatureImageAlt="foto sportrevalidatie"
            aanpakFeatureImageSrc="/Aanpak/aanpak_algemene-1400w.jpeg"
          ></FeatureAanpak>
          <AfspraakBanner rootClassName="afspraak-banner-root-class-name5"></AfspraakBanner>
        </div>
        <footer className="aanpak-sportrevalidatie-footer">
          <img
            alt="logo"
            src="/Branding/logo-1500h.jpeg"
            className="aanpak-sportrevalidatie-image"
          />
          <span className="aanpak-sportrevalidatie-text">
            © 2024 - webdesign by Jan Pecquet
          </span>
          <div className="aanpak-sportrevalidatie-icon-group">
            <a
              href="https://www.instagram.com/stijn.jans.9/"
              target="_blank"
              rel="noreferrer noopener"
              className="aanpak-sportrevalidatie-link1"
            >
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="aanpak-sportrevalidatie-icon"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/stijn.jans.9"
              target="_blank"
              rel="noreferrer noopener"
              className="aanpak-sportrevalidatie-link2"
            >
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="aanpak-sportrevalidatie-icon2"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </a>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .aanpak-sportrevalidatie-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .aanpak-sportrevalidatie-back {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
          }
          .aanpak-sportrevalidatie-link {
            display: contents;
          }
          .aanpak-sportrevalidatie-component1 {
            text-decoration: none;
          }
          .aanpak-sportrevalidatie-content {
            flex: 1;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .aanpak-sportrevalidatie-footer {
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
          .aanpak-sportrevalidatie-image {
            height: 2rem;
            object-fit: cover;
          }
          .aanpak-sportrevalidatie-icon-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .aanpak-sportrevalidatie-link1 {
            display: contents;
          }
          .aanpak-sportrevalidatie-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .aanpak-sportrevalidatie-link2 {
            display: contents;
          }
          .aanpak-sportrevalidatie-icon2 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .aanpak-sportrevalidatie-back {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 767px) {
            .aanpak-sportrevalidatie-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .aanpak-sportrevalidatie-text {
              text-align: center;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .aanpak-sportrevalidatie-footer {
              padding: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .aanpak-sportrevalidatie-image {
              margin-bottom: var(--dl-space-space-unit);
            }
            .aanpak-sportrevalidatie-text {
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

export default AanpakSportrevalidatie
