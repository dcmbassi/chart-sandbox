import { Pie } from "react-chartjs-2";

type PieChartProps = {
    chartData: {
        labels: number[];
        datasets: {
            label: string;
            data: number[];
            backgroundColor: string[];
            borderColor: string;
            borderWidth: number;
        }[];
    }
}

const PieChart = ({ chartData }: PieChartProps) => {
    return (
        <Pie
            data={chartData}
            options={{
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: "Users Gained between 2016-2020"
                    },
                }
            }}
        />
    )
}

export default PieChart
