import { useEffect } from 'react'
import PropTypes from 'prop-types'
import parseDate from '../../utils/parseDate'
import * as apiCalls from '../../api/api-calls'
import { Heading, Button } from '../index'

import './_index.scss'

/**
 * afunctional component that renders a view of the form input state values
 * @component
 * @param {function} handleStepForward - an array of sections
 * @param {function} handleStepBack - determinate to render headings or not
 * @param {object} ui - translations
 * @param {array} data - inherited state of data in current session
 * @return {html} returns semantic html view for current input values
 */
const VerifySelectionsView = ({
  handleStepForward,
  handleStepBack,
  ui,
  data,
}) => {
  const { stepIndicator, verifySelectionsView, buttonGroup } = ui
  const dateFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  const NoInputGiven = ({ item, index }) => (
    <div className="verify-criteria-value">
      <div
        className="verify-criteria-legend"
        key={`criteria-${item.fieldset.criteriaKey}-${index}`}
      >
        {item.fieldset.legend}
      </div>
      No input given.
    </div>
  )

  const resultItem = ({ criteriaId, legend, selected }) => {
    return (
      <div className="verify-criteria-value">
        <div className="verify-criteria-legend" key={criteriaId}>
          {legend}
        </div>
        {typeof selected?.value === 'object'
          ? `${parseDate(selected.value).toLocaleDateString(
              undefined,
              dateFormatOptions
            )}`
          : selected?.value}
      </div>
    )
  }

  const Items = ({ item, index }) => {
    return (
      <div>
        {resultItem({
          criteriaId: `criteria-${item.fieldset.criteriaKey}-${index}`,
          legend: item.fieldset.legend,
          selected: apiCalls.getSelectedValue(item),
        })}
        {apiCalls.getChildren(item).map(childItem =>
          apiCalls.getSelectedValue(childItem) ? (
            resultItem({
              criteriaId: childItem.fieldset.criteriaKey,
              legend: childItem.fieldset.legend,
              selected: apiCalls.getSelectedValue(childItem),
            })
          ) : (
            <NoInputGiven
              item={childItem}
              key={childItem.fieldset.criteriaKey}
            />
          )
        )}
      </div>
    )
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="verify-selections-view">
      <div className="grid-container">
        <Heading className="section-heading" headingLevel={1}>
          {verifySelectionsView?.heading}
        </Heading>
        <div className="section-wrapper">
          <div className="section">
            <Button
              className="step-back-link"
              onClick={handleStepBack}
              unstyled
            >
              {stepIndicator?.stepBackLink}
            </Button>
            <div>
              {data &&
                data.map((item, i) => {
                  // get the sectional data
                  // map all the criteria input legends and values
                  const { section } = item
                  return (
                    <div className="verify-criteria-section" key={i}>
                      <Heading
                        className="verify-criteria-section-heading"
                        headingLevel={2}
                        key={`section-${i}`}
                      >
                        {section.heading}
                      </Heading>
                      <div>
                        {section.fieldsets.map((item, i) => {
                          // if no value then return generic message
                          return apiCalls.getSelectedValue(item) ? (
                            <Items item={item} index={i} />
                          ) : (
                            <NoInputGiven item={item} index={i} />
                          )
                        })}
                      </div>
                    </div>
                  )
                })}
            </div>
            <Button secondary onClick={handleStepBack}>
              {buttonGroup[0].value}
            </Button>
            <Button onClick={handleStepForward}>{buttonGroup[1].value}</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

VerifySelectionsView.propTypes = {
  handleStepForward: PropTypes.func,
  handleStepBck: PropTypes.func,
  ui: PropTypes.object,
  data: PropTypes.array,
}

export default VerifySelectionsView
