import React from 'react'
import Visa from './Visa'
import Balance from './Balance'

function Wrapper() {
  return (
   <div className='flex justify-center mt-24 flex-wrap'>
        <div className='w-[880px] h-[500px] bg-white'>
            <div className='flex'>
                <Visa/>
                <Balance/>
            </div>
        </div>
   </div>
  )
}

export default Wrapper