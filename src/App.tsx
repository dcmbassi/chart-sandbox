import { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { PieChartData, BarChartData, LineChartData } from "./utils/mockData";
import './App.css'
import ChartCard from './components/ChartCard';
import PieChart from './components/PieChart';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';

ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

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

  const [lineDataset] = useState({
    labels: LineChartData.map(data => data.day),
    datasets: [
      {
        label: 'Ventes',
        data: LineChartData.map(data => data.sales),
        lineTension: 0.4,
        backgroundColor: 'rgba(100, 200, 75, .3)',
        borderColor: 'rgb(100, 200, 75)',
      },
      {
        label: 'Achats',
        data: LineChartData.map(data => data.purchases),
        lineTension: 0.4,
        backgroundColor: 'rgba(200, 75, 100, .3)',
        borderColor: 'rgb(200, 75, 100)',
      },
    ]
  })

  return (
    <>
      <h4>Testing Charts</h4>
      <div className="chart-grid">
        <ChartCard children={<PieChart chartData={pieDataset} />} />
        <ChartCard children={<BarChart chartData={barDataset} />} />
        <ChartCard children={<LineChart chartData={lineDataset} />} />
      </div>
    </>
  )
}

export default App
