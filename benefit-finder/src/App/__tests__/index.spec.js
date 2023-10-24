// import react-testing methods
import { render, screen } from '@testing-library/react'
// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'
import App from '../index'
import content from '../../shared/api/mock-data/current.js'
const { data } = JSON.parse(content)

const scenarios = {
  death: [
    {
      scenario: 1,
      windowQuery:
        'applicant_date_of_birth=%7B"month"%3A"3"%2C"day"%3A"5"%2C"year"%3A"1960"%7D&applicant_relationship_to_the_deceased=Spouse&applicant_marital_status=Widowed&applicant_citizen_status=Yes&applicant_care_for_child=Yes&applicant_paid_funeral_expenses=Yes&deceased_date_of_death=%7B"month"%3A"1"%2C"day"%3A"3"%2C"year"%3A"2022"%7D&deceased_death_location_is_US=Yes&deceased_paid_into_SS=Yes&deceased_public_safety_officer=No&deceased_miner=No&deceased_american_indian=No&deceased_died_of_COVID=Yes&deceased_served_in_active_military=No&shared=true%27',
    },
  ],
}

// handle window.scrollTo
const noop = () => {}
Object.defineProperty(window, 'scrollTo', { value: noop, writable: true })

test('loads intro', async () => {
  const view = render(<App appContent={data} />)
  await screen.findByTestId('app')
  expect(view.baseElement).toMatchSnapshot()
})

for (const scenario of scenarios.death) {
  test(`loads window query ${scenario.scenario}`, async () => {
    const windowQuery = scenario && scenario.windowQuery
    const view = render(<App appContent={data} query={windowQuery} />)
    await screen.findByTestId('app')
    await screen.findAllByTestId('benefit')
    expect(view.baseElement).toMatchSnapshot()
  })
}
