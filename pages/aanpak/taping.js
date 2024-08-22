import React from 'react'
import Head from 'next/head'

import NavigationSimple from '../../components/navigation-simple'
import ButtonBack from '../../components/button-back'
import FeatureAanpak from '../../components/feature-aanpak'
import AfspraakBanner from '../../components/afspraak-banner'

const AanpakTaping = (props) => {
  return (
    <>
      <div className="aanpak-taping-container">
        <Head>
          <title>Taping</title>
          <meta
            name="description"
            content="Met behulp van kinesiotaping proberen we het eigen herstelproces van het lichaam te stimuleren."
          />
          <meta property="og:title" content="Taping" />
          <meta
            property="og:description"
            content="Met behulp van kinesiotaping proberen we het eigen herstelproces van het lichaam te stimuleren."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ea578cad-184d-4f31-bb77-f954be0b4f25/93410f17-6082-40bf-aa18-4d2aeade6331?org_if_sml=1&amp;q=80&amp;force_format=original"
          />
        </Head>
        <NavigationSimple rootClassName="navigation-simpleroot-class-name5"></NavigationSimple>
        <div className="aanpak-taping-back">
          <a
            href="/#aanpak"
            target="_blank"
            rel="noreferrer noopener"
            className="aanpak-taping-link1"
          >
            <ButtonBack
              rootClassName="button-backroot-class-name5"
              className="aanpak-taping-component2"
            ></ButtonBack>
          </a>
        </div>
        <div className="aanpak-taping-content">
          <FeatureAanpak
            rootClassName="feature-aanpakroot-class-name4"
            aanpakFeatureText="Met behulp van kinesiotaping proberen we het eigen herstelproces van het lichaam te stimuleren. De tape stimuleert, door zijn rekfunctie, het zenuwstelsel en circulatoir systeem waardoor herstel in spieren, pezen en ligamenten bevordert kan worden."
            aanpakFeatureTitle="Taping"
            aanpakFeatureImageAlt="foto taping"
            aanpakFeatureImageSrc="/Aanpak/aanpak_taping-1400w.jpeg"
            aanpakFeatureBreadcrumb="Aanpak &gt; Dry Needling"
          ></FeatureAanpak>
          <AfspraakBanner rootClassName="afspraak-bannerroot-class-name4"></AfspraakBanner>
        </div>
        <footer className="aanpak-taping-footer">
          <img
            alt="logo"
            src="/Branding/logo-1500h.jpeg"
            className="aanpak-taping-image"
          />
          <span className="aanpak-taping-text">
            © 2024 - webdesign by Jan Pecquet
          </span>
          <div className="aanpak-taping-icon-group">
            <a
              href="https://www.instagram.com/mijnkine"
              target="_blank"
              rel="noreferrer noopener"
              className="aanpak-taping-link2"
            >
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="aanpak-taping-icon1"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/MijnKine/"
              target="_blank"
              rel="noreferrer noopener"
              className="aanpak-taping-link3"
            >
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="aanpak-taping-icon3"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </a>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .aanpak-taping-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .aanpak-taping-back {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
          }
          .aanpak-taping-link1 {
            display: contents;
          }
          .aanpak-taping-component2 {
            text-decoration: none;
          }
          .aanpak-taping-content {
            flex: 1;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .aanpak-taping-footer {
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
          .aanpak-taping-image {
            height: 2rem;
            object-fit: cover;
          }
          .aanpak-taping-icon-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .aanpak-taping-link2 {
            display: contents;
          }
          .aanpak-taping-icon1 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .aanpak-taping-link3 {
            display: contents;
          }
          .aanpak-taping-icon3 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .aanpak-taping-back {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 767px) {
            .aanpak-taping-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .aanpak-taping-text {
              text-align: center;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .aanpak-taping-footer {
              padding: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .aanpak-taping-image {
              margin-bottom: var(--dl-space-space-unit);
            }
            .aanpak-taping-text {
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

export default AanpakTaping
