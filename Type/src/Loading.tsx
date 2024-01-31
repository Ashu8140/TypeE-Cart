import React, { FC } from 'react'
import {ImSpinner9} from "react-icons/im"

type LoadingProps={
  
}

const Loading: FC<LoadingProps> = ({  }) => {
  return (
    <div className='flex justify-center'>
    <div className='text-xl text-center text-red-500'>{<ImSpinner9 className="animate-spin"/>}</div>
    <div className='text-5xl font-bold text-red-500 '>Loading...</div>
    </div>
  )
}

export default Loading;