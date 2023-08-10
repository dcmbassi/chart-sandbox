import { Bar } from 'react-chartjs-2'

type BarChartProps = {
    chartData: {
        labels: string[];
        datasets: {
            label: string;
            data: number[];
            backgroundColor: string;
            borderColor: string;
            borderWidth: number;
        }[];
    }
}

const BarChart = ({ chartData }: BarChartProps) => {
    return (
        <Bar
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

export default BarChart
