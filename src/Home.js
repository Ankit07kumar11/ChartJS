import React from 'react'
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
)



const Home = () => {

  const notify = () => toast("Graph Refreshed successfully")
  const error = () => toast("Please enter a value between 0-100")

  const [number1, setnumber1] = useState("");
  const [data1, setdata1] = useState(0);

  const [number2, setnumber2] = useState("");
  const [data2, setdata2] = useState(0);

  const [number3, setnumber3] = useState("");
  const [data3, setdata3] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  const update = ({ number1, number2, number3 }) => {
    if (number1 >= 0 && number1 <= 100) {
      setdata1(number1);
    }
    else { window.alert('Please Enter a value between 0-100 for Easy'); }
    if (number2 >= 0 && number2 <= 100) {
      setdata2(number2);
    }
    else { window.alert('Please Enter a value between 0-100 for Medium'); }
    if (number3 >= 0 && number3 <= 100) {
      setdata3(number3);
    }
    else { window.alert('Please Enter a value between 0-100 for Hard'); }

    if (data1 === number1 && data2 === number2 && data3 === number3) {
      notify();
    }
    // if ( data1==0 &&  data2==0 && data3==0) {
    //   error();
    // }

  }


  const data = {
    labels: ['Easy', 'Medium', 'Hard'],
    datasets: [{
      label: 'Difficulty',
      backgroundColor: 'black',
      data: [data1, data2, data3],
      backgroundColor: ['red', 'blue', 'green'],
      borderColor: 'black',
      borderWidth: 1,
    }]
  }
  const options = {
    responsive: true,
    // responsive: [{ breakpoint: 480, options: { chart: { width: 300 }, legend: { position: "bottom" } } }, { breakpoint: 768, options: { chart: { width: 500 }, legend: { position: "bottom" } } }, { breakpoint: 1024, options: { chart: { width: 600, height: 700 }, legend: { position: "bottom" } } }],

    scales: {
      y: {
        min: 0,
        max: 100,
      }
    }

  };





  return (
    <div className='flex lg:flex-row flex-col w-full justify-center items-center gap-10 h-full'>

      <div className="content1 w-[300px] flex flex-col gap-3 ml-5 mt-5  bg-gray-300 justify-center items-center  rounded-lg  ">

        <p className='p-3'>Initially Graph is Empty, Please Enter values (0-100) and click on "Refresh" to see the Graph.</p>

        <div className="easy m-5 flex flex-col justify-center items-center ">
          <form onSubmit={handleSubmit}>
            <label>Easy:</label>
            <input
              type="text"
              value={number1}
              required placeholder='Enter Value'
              onChange={(e) => setnumber1(e.target.value)}
              className="border-5 p-1 border-black mr-5 w-[80%] outline-none align-stretch hover:transition-all hover:duration-500 hover:ease-in-out hover:scale-110"
            />

          </form>


        </div>


        <div className="medium m-5 flex flex-col justify-center items-center">
          <form onSubmit={handleSubmit}>
            <label>Medium:</label>
            <input
              type="text"
              value={number2}
              required placeholder='Enter Value'
              onChange={(e) => setnumber2(e.target.value)}
              className="border-5 p-1 border-black mr-5 w-[80%] outline-none align-stretch hover:transition-all hover:duration-500 hover:ease-in-out hover:scale-110"
            />

          </form>

        </div>

        <div className="hard m-5 flex flex-col justify-center items-center">
          <form onSubmit={handleSubmit}>
            <label>Hard:  </label>
            <input
              type="text"
              value={number3}
              required placeholder='Enter Value'
              onChange={(e) => setnumber3(e.target.value)}
              className="border-5 p-1 border-black mr-5 w-[80%] outline-none align-stretch hover:transition-all hover:duration-500 hover:ease-in-out hover:scale-110"
            />
          </form>

        </div>

        <div className="refresh">
          <ToastContainer
            position='top-right'
            autoClose={2000}
            hideProgressBar={true}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover
          />

          <button className=' bg-white text-black m-2 p-1 font-serif hover:opacity-[0.8]' onClick={() => update({ number1, number2, number3 })}>Refresh</button>
        </div>

      </div>




      {/* <div className='ml-5 mt-5 flex justify-center items-center overflow-x-hidden mr-4 '>
        

      <Chart
          type="bar"
          width={800}
          height={650}
    
          series={[
            {
              name: "Values for chart",
              data:[data1,data2,data3],
            },
          ]}
          options={{
            
            colors: ["#f90000"],
            theme: { mode: "light" },

            xaxis: {
              tickPlacement: "on",
              categories:["Easy","Medium","Hard"],
              
              
             
            },
            responsive:[{ breakpoint: 480, options: { chart: { width: 300 }, legend: { position: "bottom" } }}, { breakpoint: 768, options: { chart: { width: 500 }, legend: { position: "bottom" } } } , { breakpoint: 1024, options: { chart: { width: 600 ,height:700}, legend: { position: "bottom" } } }],

            yaxis: {
              axisTicks: {
                min:0,
                max:100,},
              labels: {
                formatter: (val) => {
                  return `${val}`;
                },
                style: { fontSize: "15", colors: ["#f90000"] },
              },
              title: {
                text: "Value(0-100)",
                style: { color: "#f90000", fontSize: 15 },
              },
            },

            legend: {
              show: true,
              position: "right",
            },

            dataLabels: {
              formatter: (val) => {
                return `${val}`;
              },
              style: {
                colors: ["#f4f4f4"],
                fontSize: 15,
              },
            },
          }}
        ></Chart>

      </div> */}

      <div className='md:w-2/3 w-96 p-1 overflow-x-hidden'>

        <Bar
          style={{ width: '60%',height:'60%', margin: '20px' }}
          data={data}
          options={options}
        >

        </Bar>

      </div>




    </div>




  )


}

export default Home
