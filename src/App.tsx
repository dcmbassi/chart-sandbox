import { useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, ArcElement, BarElement, Title, Tooltip, Legend } from "chart.js";
import { PieChartData, BarChartData } from "./utils/mockData";
import './App.css'
import ChartCard from './components/ChartCard';
import PieChart from './components/PieChart';
import BarChart from './components/BarChart';

ChartJS.register(CategoryScale, LinearScale, ArcElement, BarElement, Title, Tooltip, Legend)

function App() {
  const [pieDataset] = useState({
    labels: PieChartData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained ",
        data: PieChartData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "white",
        borderWidth: 2,
      }
    ]
  })
  const [barDataset] = useState({
    labels: BarChartData.map(data => data.month),
    datasets: [
      {
        label: 'Collection',
        data: BarChartData.map(data => data.collection),
        backgroundColor: 'rgba(99, 33, 99, .3)',
        borderColor: 'rgb(99, 33, 99)',
        borderWidth: 1
      },
      {
        label: 'Disbursement',
        data: BarChartData.map(data => data.disbursement),
        backgroundColor: 'rgba(200, 0, 0, .3)',
        borderColor: 'rgb(200, 70, 70)',
        borderWidth: 1
      },
    ]
  })

  return (
    <>
      <h4>Testing Charts</h4>
      <div className="chart-grid">
        <ChartCard children={<PieChart chartData={pieDataset}/>} />
        <ChartCard children={<BarChart chartData={barDataset}/>} />
      </div>
    </>
  )
}

export default App
