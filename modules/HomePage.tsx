import React from 'react'
import { LgaSelection } from './LGAsearchAction'
import QrCodeTelegram from './QrCodeTelegram'

export default function HomePage() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className="">
        <p className='font-extralight text-4xl text-white/30'>Home Buddy</p>
        <p className='font-bold text-xs text-center text-white/30'>AKWA IBOM</p>
      </div>
      <div className="mt-5">
        <p className='font-light text-sm text-center text-white/80'>Please select the LGA you want to get an apartment.</p>
      </div>
      <div className="mt-10">
        <LgaSelection/>
        <QrCodeTelegram/>
      </div>
    </div>
  )
}
