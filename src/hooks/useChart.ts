import { useEffect, useState, useMemo } from 'react';
// import { ChartData } from 'chart.js';

export const useChart = (type: string, url: string, options?: any) => {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [url]);

    const chartData: any = useMemo(() => {
        switch (type) {
            case 'pie':
                return {
                    labels: data?.labels,
                    datasets: [
                        {
                            label: options?.label || 'My Pie Dataset',
                            data: data?.values, 
                            backgroundColor: options?.backgroundColor || [
                                'rgb(255, 99, 132)',
                                'rgb(54, 162, 235)',
                                'rgb(255, 205, 86)',
                                'rgb(75, 192, 192)',
                                'rgb(153, 102, 255)',
                                'rgb(255, 159, 64)'
                            ], 
                            hoverOffset: options?.hoverOffset || 4
                        }
                    ]
                };
            case 'line':
                return {
                    labels: data?.labels, 
                    datasets: [
                        {
                            label: options?.label || 'My Line Dataset', 
                            data: data?.values, 
                            fill: false,
                            borderColor: options?.borderColor || 'rgb(75, 192, 192)', 
                            tension: options?.tension || 0.1 
                        }
                    ]
                };
            case 'bar':
                return {
                    labels: data?.labels, 
                    datasets: [
                        {
                            label: options?.label || 'My Bar Dataset', 
                            data: data?.values, 
                            backgroundColor: options?.backgroundColor || [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 205, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ], 
                            borderColor: options?.borderColor || [
                                'rgb(255, 99, 132)',
                                'rgb(54, 162, 235)',
                                'rgb(255, 205, 86)',
                                'rgb(75, 192, 192)',
                                'rgb(153, 102, 255)',
                                'rgb(255, 159, 64)'
                            ], 
                            borderWidth: options?.borderWidth || 1 
                        }
                    ]
                };
            default:
                return {};
        }
    }, [type, data, options]); 

    return { data, chartData };
};