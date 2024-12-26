import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const AppComponent = (props) => {
  return (
    <>
      <div className="component-container">
        <span>
          {props.text ?? (
            <Fragment>
              <span className="component-text2">Text</span>
            </Fragment>
          )}
        </span>
      </div>
      <style jsx>
        {`
          .component-container {
            display: flex;
            position: relative;
          }
          .component-text2 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

AppComponent.defaultProps = {
  text: undefined,
}

AppComponent.propTypes = {
  text: PropTypes.element,
}

export default AppComponent
