import React, {useState, useContext} from 'react';
import BarChart from '../../Components/AllChart/BarChart';
import LineChart from '../../Components/AllChart/LineChart';
import { DashboardContext } from '../../context/DashboardContext';
import "./DashboardFinance.css"

export default function DashboardFinance() {

  const {dataChart, changeYear, yearData} = useContext(DashboardContext)


  return (
    <div className="global-container">
      <h1>Les résultats de l'années : {yearData}</h1>
      <form>
        <label htmlFor="year">Choisissez une date</label>
        <select onChange={changeYear} id="year">
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
        </select>
      </form>
      <div className="dashboard-container">
        <BarChart data={dataChart.chart1} name={"Chiffres bimestriels"} />
        <LineChart data={dataChart.chart2} name={"Nombres d'abonnés (en milliers)"} />
        <BarChart data={dataChart.chart4} name={"Budget marketing"} />
      </div>
    </div>
  );
}
