import PropTypes from 'prop-types'
import './_index.scss'
/**
 * a functional component that renders a string
 * @component
 * @param {object} requiredLabel
 * @return {html} returns a div
 */
const Hint = ({ requiredLabel }) => {
  return (
    <span title="required" className="usa-hint usa-hint--required required">
      {`(${requiredLabel?.value || 'Required'})`}
    </span>
  )
}

Hint.propTypes = {
  requiredLabel: PropTypes.object,
}

export default Hint
