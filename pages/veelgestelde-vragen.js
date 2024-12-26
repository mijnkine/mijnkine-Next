import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import NavigationSimple from '../components/navigation-simple'
import ButtonBack from '../components/button-back'
import VeelgesteldeVragenComp from '../components/veelgestelde-vragen-comp'
import AfspraakBanner from '../components/afspraak-banner'

const VeelgesteldeVragen = (props) => {
  return (
    <>
      <div className="veelgestelde-vragen-container1">
        <Head>
          <title>Veelgestelde vragen - Mijn Kine Genk</title>
          <meta
            name="description"
            content="Bekijk onze FAQ-pagina voor antwoorden op veelgestelde vragen over kinesitherapie, behandelingen en revalidatie. Vind snel de informatie die je zoekt!"
          />
          <meta
            property="og:title"
            content="Veelgestelde vragen - Mijn Kine Genk"
          />
          <meta
            property="og:description"
            content="Bekijk onze FAQ-pagina voor antwoorden op veelgestelde vragen over kinesitherapie, behandelingen en revalidatie. Vind snel de informatie die je zoekt!"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ea578cad-184d-4f31-bb77-f954be0b4f25/cbc0d713-0698-4930-97d2-2a353e79045a?org_if_sml=1&amp;force_format=original"
          />
        </Head>
        <NavigationSimple rootClassName="navigation-simpleroot-class-name"></NavigationSimple>
        <div className="veelgestelde-vragen-back">
          <Link href="/">
            <a className="veelgestelde-vragen-link1">
              <ButtonBack
                rootClassName="button-backroot-class-name2"
                className="veelgestelde-vragen-component2"
              ></ButtonBack>
            </a>
          </Link>
        </div>
        <div className="veelgestelde-vragen-container2">
          <VeelgesteldeVragenComp
            text={
              <Fragment>
                <span className="veelgestelde-vragen-text10">
                  <span>
                    Een afspraak kan gemaakt worden via onze
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a
                    href="https://www.q-top.be/online-planner-v2/NL/?root=kq55870"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="veelgestelde-vragen-link2"
                  >
                    afsprakenplanner
                  </a>
                  <a
                    href="https://kinequick.corilus.be"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="veelgestelde-vragen-link3"
                  >
                    .
                  </a>
                  <br></br>
                  <span>
                    Of neem
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <a href="/#contact" className="veelgestelde-vragen-link4">
                    contact
                  </a>
                  <span> op met ons.</span>
                  <br></br>
                </span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="veelgestelde-vragen-text16">
                  <span>
                    Indien nodig doen wij huisbezoeken. Indien je mobiliteit het
                    toelaat, raden we toch aan
                  </span>
                  <br></br>
                  <span>
                    om naar de praktijk te komen. Huisbezoeken beperken zich tot
                    Genk.
                  </span>
                </span>
              </Fragment>
            }
            text2={
              <Fragment>
                <span className="veelgestelde-vragen-text20">
                  <span>- Voorschrift van de dokter</span>
                  <br></br>
                  <span>- Verslagen, beeldvorming,...</span>
                  <br></br>
                  <span>- Identiteitskaart</span>
                  <br></br>
                  <span>- Klever van de mutualiteit</span>
                  <br></br>
                  <span>- Grote badhanddoek om op tafel te leggen.</span>
                  <br></br>
                  <span>
                    - Sportieve/gemakkelijke kledij indien sportrevalidatie
                  </span>
                  <br></br>
                </span>
              </Fragment>
            }
            text3={
              <Fragment>
                <span className="veelgestelde-vragen-text33">
                  <span>
                    Annuleren kan gemakkelijk door te bellen of een mailtje te
                    sturen. Gelieve dit wel
                  </span>
                  <br></br>
                  <span>
                    minstens 24u op voorhand te doen. Indien dit niet gebeurt,
                    zijn wij genoodzaakt de
                  </span>
                  <br></br>
                  <span>afspraak toch in rekening te brengen.</span>
                </span>
              </Fragment>
            }
            rootClassName="veelgestelde-vragen-comproot-class-name"
          ></VeelgesteldeVragenComp>
        </div>
        <AfspraakBanner></AfspraakBanner>
        <footer className="veelgestelde-vragen-footer">
          <img
            alt="logo"
            src="/Branding/logo-1500h.jpeg"
            className="veelgestelde-vragen-image"
          />
          <span className="veelgestelde-vragen-text39">
            © 2024 - webdesign by Jan Pecquet
          </span>
          <div className="veelgestelde-vragen-icon-group">
            <a
              href="https://www.instagram.com/mijnkine"
              target="_blank"
              rel="noreferrer noopener"
              className="veelgestelde-vragen-link5"
            >
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="veelgestelde-vragen-icon1"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/MijnKine/"
              target="_blank"
              rel="noreferrer noopener"
              className="veelgestelde-vragen-link6"
            >
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="veelgestelde-vragen-icon3"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </a>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .veelgestelde-vragen-container1 {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .veelgestelde-vragen-back {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            padding-left: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-fiveunits);
          }
          .veelgestelde-vragen-link1 {
            display: contents;
          }
          .veelgestelde-vragen-component2 {
            text-decoration: none;
          }
          .veelgestelde-vragen-container2 {
            flex: 1;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: flex-start;
          }
          .veelgestelde-vragen-text10 {
            display: inline-block;
          }
          .veelgestelde-vragen-link2 {
            text-decoration: underline;
          }
          .veelgestelde-vragen-link3 {
            text-decoration: underline;
          }
          .veelgestelde-vragen-link4 {
            text-decoration: underline;
          }
          .veelgestelde-vragen-text16 {
            display: inline-block;
          }
          .veelgestelde-vragen-text20 {
            display: inline-block;
          }
          .veelgestelde-vragen-text33 {
            display: inline-block;
          }
          .veelgestelde-vragen-footer {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 100%;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .veelgestelde-vragen-image {
            height: 2rem;
            object-fit: cover;
          }
          .veelgestelde-vragen-icon-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .veelgestelde-vragen-link5 {
            display: contents;
          }
          .veelgestelde-vragen-icon1 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .veelgestelde-vragen-link6 {
            display: contents;
          }
          .veelgestelde-vragen-icon3 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .veelgestelde-vragen-back {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 767px) {
            .veelgestelde-vragen-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .veelgestelde-vragen-text39 {
              text-align: center;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .veelgestelde-vragen-footer {
              padding: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .veelgestelde-vragen-image {
              margin-bottom: var(--dl-space-space-unit);
            }
            .veelgestelde-vragen-text39 {
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

export default VeelgesteldeVragen

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
