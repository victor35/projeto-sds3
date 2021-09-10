import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSum } from 'types/sales';
import { BASE_URL } from 'utils/requests';

type ChartData = {
    labels: string[];
    series: number[];
}

const DonutChart = () => {

    const [chartdata,setChartData] = useState<ChartData>({labels:[],series:[]});

    useEffect(() => {
        axios.get(`${BASE_URL}/sales/amount-by-seller`).then(response => {
            const data = response.data as SaleSum[];
            const myLabels = data.map(x => x.sellerName);
            const mySeries = data.map(x => x.sum);
    
            setChartData({labels:myLabels, series: mySeries});
            //console.log(chartdata);
        })
    }, [])

    //forma errada
    // let chartdata :ChartData = {labels:[],series:[]};

    // const mockData = {
    //     series: [477138, 499928, 444867, 220426, 473088],
    //     labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    // }

    //forma errada
    // axios.get(`${BASE_URL}/sales/amount-by-seller`).then(response => {
    //     const data = response.data as SaleSum[];
    //     const myLabels = data.map(x => x.sellerName);
    //     const mySeries = data.map(x => x.sum);

    //     setChartData({labels:myLabels, series: mySeries});
    //     console.log(chartdata);
    // })
    
    const options = {
        legend: {
            show: true
        }
    }

    return (
       <Chart
            options={{...options, labels: chartdata.labels}}
            series={chartdata.series}
            type="donut"
            height="240"
       />
    );
  }
  
  export default DonutChart;
  