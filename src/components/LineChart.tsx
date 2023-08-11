import { Line } from 'react-chartjs-2'

type LineChartProps = {
    chartData: {
        labels: string[];
        datasets: {
            label: string;
            lineTension?: number
            data: number[];
            backgroundColor: string;
            borderColor: string;
        }[];
    }
}

const LineChart = ({ chartData }: LineChartProps) => {
    return (
        <Line
            data={chartData}
            options={{
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top' as const,
                    },
                    title: {
                        display: true,
                        text: "Operations S1 2023"
                    }
                },
            }}
        />
    )
}

export default LineChart