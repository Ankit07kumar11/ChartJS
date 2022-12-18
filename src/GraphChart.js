import React from 'react'
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register( BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  )

const GraphChart = () => {
  const data={
    labels:['Easy','Medium','Hard'],
    datasets:[{
      label:'Difficulty',
      backgroundColor:'black',
      data:[30,18,38],
      backgroundColor:['red','blue','green'],
      borderColor:'black',
      borderWidth:1,
    }]
  }
  const options={
    responsive:[{ breakpoint: 480, options: { chart: { width: 300 }, legend: { position: "bottom" } }}, { breakpoint: 768, options: { chart: { width: 500 }, legend: { position: "bottom" } } } , { breakpoint: 1024, options: { chart: { width: 600 ,height:700}, legend: { position: "bottom" } } }],

    scales:{
      y:{
        min:0,
        max:100,
      }
    }

  };
  return (
    <div  >

      <Bar
      style={{width:'50%',height:'60%',padding:'20px'}}
      data={data}
      options={options}  
      >

      </Bar>
      
    </div>
  )
}

export default GraphChart
