import Document, { Html, Head, Main, NextScript } from 'next/document'
class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          ></meta>
          <meta charSet="utf-8"></meta>
          <meta property="twitter:card" content="summary_large_image"></meta>
          <style
            dangerouslySetInnerHTML={{
              __html:
                'html {  line-height: 1.15;}body {  margin: 0;}* {  box-sizing: border-box;  border-width: 0;  border-style: solid;  -webkit-font-smoothing: antialiased;}p,li,ul,pre,div,h1,h2,h3,h4,h5,h6,figure,blockquote,figcaption {  margin: 0;  padding: 0;}button {  background-color: transparent;}button,input,optgroup,select,textarea {  font-family: inherit;  font-size: 100%;  line-height: 1.15;  margin: 0;}button,select {  text-transform: none;}button,[type="button"],[type="reset"],[type="submit"] {  -webkit-appearance: button;  color: inherit;}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner {  border-style: none;  padding: 0;}button:-moz-focus,[type="button"]:-moz-focus,[type="reset"]:-moz-focus,[type="submit"]:-moz-focus {  outline: 1px dotted ButtonText;}a {  color: inherit;  text-decoration: inherit;}input {  padding: 2px 4px;}img {  display: block;}details {  display: block;  margin: 0;  padding: 0;}summary::-webkit-details-marker {  display: none;}[data-thq="accordion"] [data-thq="accordion-content"] {  max-height: 0;  overflow: hidden;  transition: max-height 0.3s ease-in-out;  padding: 0;}[data-thq="accordion"] details[data-thq="accordion-trigger"][open] + [data-thq="accordion-content"] {  max-height: 300vh;}details[data-thq="accordion-trigger"][open] summary [data-thq="accordion-icon"] {  transform: rotate(180deg);}html { scroll-behavior: smooth  }',
            }}
            data-tag="reset-style-sheet"
          ></style>
          <style
            dangerouslySetInnerHTML={{
              __html:
                '\n  html {\n    font-family: Poppins;\n    font-size: 16px;\n  }\n\n  body {\n    font-weight: 400;\n    font-style:normal;\n    text-decoration: none;\n    text-transform: none;\n    letter-spacing: normal;\n    line-height: 1.15;\n    color: var(--dl-color-gray-black);\n    background: var(--dl-color-gray-white);\n    \n    fill: var(--dl-color-gray-black);\n  }\n\n  \n\n  ',
            }}
            data-tag="default-style-sheet"
          ></style>
          <link
            rel="stylesheet"
            href="https://unpkg.com/animate.css@4.1.1/animate.css"
          ></link>
          <link
            rel="shortcut icon"
            href="/logo1.jpeg"
            type="icon/png"
            sizes="32x32"
          ></link>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&amp;display=swap"
            data-tag="font"
          ></link>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap"
            data-tag="font"
          ></link>
          <link
            rel="stylesheet"
            href="https://unpkg.com/@teleporthq/teleport-custom-scripts/dist/style.css"
          ></link>
          <noscript
            dangerouslySetInnerHTML={{
              __html:
                '</noscript><style>\n@keyframes fade-in-left {\n  0% {\n    opacity: 0;\n    transform: translateX(-20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n</style>\n\n<script>\n\n  const observeUrlChange = () => {\n    let oldHref = document.location.href;\n    const body = document.querySelector("body");\n    const observer = new MutationObserver(mutations => {\n      if (oldHref !== document.location.href) {\n        oldHref = document.location.href;\n        updateButtonBack()\n      }\n    });\n    observer.observe(body, { childList: true, subtree: true });\n  };\n\n  function listenForBack() {\n    var buttonBack = document.querySelector("#back-btn");\n    buttonBack.addEventListener("click", (event) => {\n      if(window.history.length > 1 && document.referrer.indexOf(window.location.host) !== -1) {\n          window.history.back();\n      }\n      else {\n        window.location.href = window.location.host;\n      }\n    });\n  }\n\n\n  function updateButtonBack() {\n      var buttonBack = document.querySelector(".button-back-container");\n      if (buttonBack && buttonBack.parentElement?.attributes?.href?.value?.startsWith("/#")) {\n          buttonBack.parentElement.removeAttribute("target");\n      }\n  }\n\n  function init() {\n    observeUrlChange();\n    updateButtonBack();\n  }\n\n  window.onload = init;\n\n</script>\n\n<script>\n{\n  "@context": "http://schema.org",\n  "@type": "Physiotherapy",\n  "name": "Mijn Kine",\n  "address": {\n    "@type": "PostalAddress",\n    "streetAddress": "Hospitaalstraat 1/bus 2",\n    "addressLocality": "Genk",\n    "addressRegion": "Limburg",\n    "addressCountry": "Belgium",\n    "postalCode": "3600"\n  },\n  "telephone": "+32 487 45 28 26",\n  "email": "info@mijnkine.be",\n  "url": "www.mijnkine.be",\n  "geo": {\n    "@type": "GeoCoordinates",\n    "latitude": "50.96915121017814",\n    "longitude": "5.506911102781915"\n  },\n  "openingHoursSpecification": [\n    {\n      "@type": "OpeningHoursSpecification",\n      "dayOfWeek": "Monday",\n      "opens": "",\n      "closes": ""\n    },\n    {\n      "@type": "OpeningHoursSpecification",\n      "dayOfWeek": "Tuesday",\n      "opens": "",\n      "closes": ""\n    },\n    {\n      "@type": "OpeningHoursSpecification",\n      "dayOfWeek": "Wednesday",\n      "opens": "",\n      "closes": ""\n    },\n    {\n      "@type": "OpeningHoursSpecification",\n      "dayOfWeek": "Thursday",\n      "opens": "",\n      "closes": ""\n    },\n    {\n      "@type": "OpeningHoursSpecification",\n      "dayOfWeek": "Friday",\n      "opens": "",\n      "closes": ""\n    },\n    {\n      "@type": "OpeningHoursSpecification",\n      "dayOfWeek": "Saturday",\n      "opens": "",\n      "closes": ""\n    }\n  ],\n  "image": [\n    "https://mijnkine.be/Logo/mijnkine.svg"\n  ],\n  "@id": "www.mijnkine.be"\n}\n</script><noscript>',
            }}
          ></noscript>
        </Head>
        <body>
          <Main></Main>
          <NextScript></NextScript>
          <script
            type="text/javascript"
            src="https://www.googletagmanager.com/gtag/js?id=G-C27GLEF8F3"
            async
          ></script>
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html:
                "window.dataLayer = window.dataLayer || [];\n        function gtag(){dataLayer.push(arguments);}\n        gtag('js', new Date());\n        gtag('config', 'G-C27GLEF8F3');",
            }}
          ></script>
          <div
            dangerouslySetInnerHTML={{
              __html:
                "\n        <script defer src='https://unpkg.com/@teleporthq/teleport-custom-scripts'></script>",
            }}
          ></div>
        </body>
      </Html>
    )
  }
}
export default CustomDocument
