import PropTypes from 'prop-types'
import { Alert } from '../index'
import './_index.scss'

/**
 * a parse our date object
 * @component
 * @param {func} onChange - inherited change handler
 * @param {string} required - inherited string value to manage required state
 * @param {object} value - inherited state values
 * @return {Date} returns a tandard format Date ie 1995-12-17T03:24:00
 */
const Date = ({ onChange, value, required, ui, id, valid }) => {
  const { date, select } = ui
  const { labelDay, labelMonth, labelYear, monthOptions, alert } = date
  const { dateDefaultValue } = select

  // Note: when we break each input into functional components they trigger unwanted rerenders

  return (
    <div id={`usa-memorable-date-${id}`} className="usa-memorable-date">
      {valid === true && (
        <Alert
          className="date-alert"
          heading={ui.alertBanner.heading}
          description={alert}
          error
        ></Alert>
      )}
      <div className="usa-form-group usa-form-group--month usa-form-group--select">
        <label className="usa-label" htmlFor={`date_of_birth_month-${id}`}>
          {labelMonth}
        </label>
        <div id={`month-description-${id}`} className="a11y-sr-only">
          Select a month from the list
        </div>
        <select
          className={`usa-select ${
            required === 'TRUE' ? 'required-field' : ''
          }`}
          // ref={monthFieldRef}
          id={`date_of_birth_month-${id}`}
          name={`date_of_birth_month-${id}`}
          aria-describedby={`month-description-${id}`}
          required="required"
          value={(value && value.month) || ''}
          onChange={onChange}
        >
          <option value="" key="default" disabled>
            {dateDefaultValue}
          </option>
          {monthOptions.map((option, i) => (
            <option value={i} key={`${option.label}-${i}`}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="usa-form-group usa-form-group--day">
        <label className="usa-label" htmlFor={`date_of_birth_day-${id}`}>
          {labelDay}
        </label>
        <div id={`day-description-${id}`} className="a11y-sr-only">
          Enter numerals for day
        </div>
        <input
          className={`usa-input ${required === 'TRUE' ? 'required-field' : ''}`}
          aria-describedby={`day-description-${id}`}
          id={`date_of_birth_day-${id}`}
          name={`date_of_birth_day-${id}`}
          inputMode="numeric"
          value={(value && value.day) || ''}
          onChange={onChange}
          // ref={dayFieldRef}
        />
      </div>
      <div className="usa-form-group usa-form-group--year">
        <label className="usa-label" htmlFor={`date_of_birth_year-${id}`}>
          {labelYear}
        </label>
        <div id={`year-description-${id}`} className="a11y-sr-only">
          Enter numerals for year
        </div>
        <input
          className={`usa-input ${required === 'TRUE' ? 'required-field' : ''}`}
          aria-describedby={`year-description-${id}`}
          id={`date_of_birth_year-${id}`}
          name={`date_of_birth_year-${id}`}
          inputMode="numeric"
          value={(value && value.year) || ''}
          onChange={onChange}
          // ref={yearFieldRef}
        />
      </div>
    </div>
  )
}

Date.propTypes = {
  onChange: PropTypes.func,
  required: PropTypes.string,
  value: PropTypes.object,
}

export default Date
