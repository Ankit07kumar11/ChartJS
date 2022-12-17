import React from 'react'
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import Progress from './Progress';

const Home = () => {

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
    setdata1(number1);
    setdata2(number2);
    setdata3(number3);
    toast.success('Refreshed');
  }

  const arr = [
    {
      name: "Easy",
      data: data1
    },
    {
      name: 'Medium',
      data: data2
    },
    {
      name: 'Hard',
      data: data3
    }
  ]

  return (
    <div className='home flex flex-col  ml-5 w-auto justify-center items-center gap-5 overflow-hidden'>
      <div className="content1 flex flex-col gap-4 w-72 bg-gray-300 justify-center items-center overflow-hidden rounded-lg ">

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

          <button className=' bg-[#5853ff] m-2 p-1 font-serif hover:opacity-[0.8]' onClick={() => update({ number1, number2, number3 })}>Refresh</button>
        </div>

      </div>


      <div className="bars flex flex-col gap-4 overflow-x-hidden">
      {
        arr.map((item, index) => {


          return (
            
            <Progress data={item.data} name={item.name} className="bars "/>
            
          )
        })}
        </div>

    </div>


  )


}

export default Home
