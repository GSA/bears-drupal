import { useState, createContext } from 'react'
import { Intro } from '../shared/components'
// data
// import * as apiCalls from '../shared/api/api-calls'
import * as en from '../shared/locales/en/en.json'
import * as es from '../shared/locales/es/es.json'
import content from '../shared/api/mock-data/content-data'

/**
 * a functional component that renders our application.
 * @component
 */
function App() {
  const LanguageContext = createContext({ en, es })

  // /**
  //  * lazy load our data state.
  //  * @function
  //  * @param {promise} setData - the state of environment
  //  * @return {state} returns null if not set
  //  */
  // const [data, setData] = useState(() => {
  //   apiCalls.GETLifeEvent().then(response => setData(response))
  // })

  // handlers

  // /**
  //  * handle our data maping.
  //  * @function
  //  * @param {object} data - the json object returned from data load
  //  * @return {string} returns strigified data
  //  */
  // const handleData = data => {
  //   if (data === undefined) {
  //     return 'loading...'
  //   }
  //   // either return the mapped data object or the error
  //   return data?.data ? data.data.map(d => JSON.stringify(d)) : data
  // }

  const handleLanguage = () => {
    const string = /^\/es/
    return string.test(window.location.pathname) ? es : en
  }

  // state
  const [t] = useState(handleLanguage)
  const { lifeEventForm } = JSON.parse(content)

  return (
    <LanguageContext.Provider value={t}>
      {console.log(t)}
      <div className="bears-app">
        <Intro data={lifeEventForm} ui={t.intro} />
        {/* {handleData(data)} */}
      </div>
    </LanguageContext.Provider>
  )
}

export default App
