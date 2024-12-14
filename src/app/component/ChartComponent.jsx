import React,{useRef,useEffect} from 'react';
import { Chart as ChartJS, BarElement, BarController, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

const ChartComponent = () => {
    ChartJS.register(BarElement,BarController, CategoryScale, LinearScale, Tooltip, Legend);

    const chartRef=useRef(null);
    useEffect(() => {
        // Create a new chart after the component mounts
        const ctx = chartRef.current.getContext('2d');
    
        const data = {
          labels: ['January', 'February', 'March', 'April', 'May'], // X-axis labels
          datasets: [

                        {
                            label: 'Dataset 1',
                            data: [10, 20, 30, 40, 50],
                            backgroundColor: 'rgba(255, 99, 132, 0.8)',
                            barThickness: 10,
                        },
                        {
                            label: 'Dataset 2',
                            data: [15, 25, 35, 45, 55],
                            backgroundColor: 'rgba(54, 162, 235, 0.8)',
                            barThickness: 10,
                        },
                        {
                            label: 'Dataset 3',
                            data: [20, 30, 40, 50, 60],
                            backgroundColor: 'rgba(75, 192, 192, 0.8)',
                            barThickness: 10,
                        }
                    ]   
        };
    
        const options = {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
          },
        };
    
        const chart = new ChartJS(ctx, {
          type: 'bar', // Chart type (line, bar, etc.)
          data: data,
          options: options,
        });
    
        // Clean up the chart instance when the component is unmounted
        return () => {
          chart.destroy();
        };
      }, []);
    return (
<div className="flex list bg-white w-3/5 rounded-md m-h-12 p-3 flex-col">
                    <div className="flex"><h2 className="font-bold text-xl">Regular Sell</h2></div>
                    <div className="flex">  <canvas ref={chartRef}></canvas>
                    </div>
                </div>
    );
};

export default ChartComponent;