import React from 'react'
import Image from 'next/image'
function Logo() {
  return (
    <div className='flex items-center justify-start'>
        <Image src="/logo.png" alt="logo" width={30} height={30}/>
        <h2 className='text-m font-semibold'>Loop</h2>
    </div>
  )
}

export default Logo