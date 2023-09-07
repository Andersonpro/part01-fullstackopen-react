/* eslint-disable react/prop-types */
import { StatisticLine } from "../statisticLine/StatisticLine";

export const Statistics = ({good, neutral, bad, all, average, positive}) => {

  if(all === 0) return (<p>No feedback given</p>);
  
  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text='good' value={good} />
          <StatisticLine text='neutral' value={neutral} />
          <StatisticLine text='bad' value={bad} />
          <StatisticLine text='all' value={all} />
          <StatisticLine text='average' value={average} />
          <StatisticLine text='positive' value={positive*100} other=" %"/>
        </tbody>
      </table>
      
    </div>
    
  );
}