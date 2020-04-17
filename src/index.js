import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Header = () => {
  return (
    <div>
      <h1>give feedback</h1>
    </div>
  )
}

const Statistics = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>no statistics</div>
    )
  }

  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
        <tr>
        <th>good</th>
        <td>{props.good}</td>
        </tr>
        <tr>
          <th>neutral</th>
          <td>{props.neutral}</td>
        </tr>
        <tr>
          <th>bad</th>
          <td>{props.bad}</td>
        </tr>
        <tr>
          <th>all</th>
          <td>{props.good+props.neutral+props.bad}</td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}
const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = (props) => {
  const [allClicks, setAll] = useState([])
  const [good, setGood] = useState(0)
  const setToGood = () => {
    setGood(good + 1)
    setAll(allClicks.concat(good + 1))
  }
  const [neutral, setNeutral] = useState(0)
  const setToNeutral = () => {
    setNeutral(neutral + 1)
    setAll(allClicks.concat(neutral))
  }
  const [bad, setBad] = useState(0)
  const setToBad = () => {
    setBad(bad + 1)
    setAll(allClicks.concat(bad))
  }
  return (

    <div>
      <Header />
      <Button onClick={setToGood} text='good' />
      <Button onClick={setToNeutral} text='neutral' />
      <Button onClick={setToBad} text='bad' />
      <Statistics allClicks={allClicks} good={good} bad={bad} neutral={neutral} />
    </div>
  )
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

