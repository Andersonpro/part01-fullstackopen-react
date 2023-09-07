import { useState } from "react";
import { Header } from "./components/header/Header";
import { Button } from "./components/button/Button";
import { Statistics } from "./components/statistics/Statistics";

function App() {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  const calcAvarage = (goodAux = good, badAux = bad, allAux = all) => {
    const newAverage = (parseFloat((goodAux - badAux)/allAux));
    setAverage(newAverage);
  }

  const handleGoodClick = () => {
    const newGood = good + 1;
    const newAll = all + 1;
    setGood(newGood);
    setAll(newAll);
    console.log(newGood, newAll);
    setPositive(newGood/newAll);
    calcAvarage(newGood, bad, newAll);
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
    const newAll = all + 1;
    setPositive(good/newAll);
    setAll(all + 1);
    calcAvarage(good, bad, newAll);
  }

  const handleBadClick = () => {
    const newBad = bad + 1;
    const newAll = all + 1;
    setBad(newBad);
    setAll(newAll);
    setPositive(good/newAll);
    console.log(good, neutral, newBad, all);
    calcAvarage(good, newBad, newAll);
  }

  return (
    <div>
      <Header text='give feedback' />
      <Button onClick={handleGoodClick} content='good'/>
      <Button onClick={handleNeutralClick} content='neutral'/>
      <Button onClick={handleBadClick} content='bad'/>
      <Header text='statistics' />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}/>
    </div>
  )
}

export default App;
