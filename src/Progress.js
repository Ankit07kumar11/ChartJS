import React from 'react';
import ProgressBar from '@ramonak/react-progress-bar';

const Progress = ({data,name}) => {
    
  return (
    <div className='progress w-64 border-2  rounded-lg flex flex-col justify-center items-center bg-blue-800 gap-2 overflow-hidden '>
        <ProgressBar completed={data} barContainerClassName="bg-gray-400" className="w-60 mt-6  "/>
        <p className="text-2xl mb-2 ">{name}</p>
      
    </div>
  )
}

export default Progress
