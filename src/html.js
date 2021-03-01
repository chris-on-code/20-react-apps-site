import React from 'react'
import PropTypes from 'prop-types'
export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}

        {/* google analytics linker */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (window.ga) {
                ga('require', 'linker');
                ga('linker:autoLink', ['learn.chrisoncode.io', '20reactapps.com', 'makereactapps.com']);
              }
            `,
          }}
        />

        {/* fathom */}
        <script
          src="https://wildcat.codesalt.io/script.js"
          data-spa="auto"
          data-site="SYKMYUND"
          defer
        ></script>
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
