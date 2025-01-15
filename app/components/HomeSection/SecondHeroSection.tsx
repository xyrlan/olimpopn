import Image from 'next/image'
import React from 'react'

const SecondHeroSection = () => {
  return (
    <div className='px-6 py-20'>
      <div className='container mx-auto overflow-hidden'>
        <Image src={'/orizona.jpg'} width={1800} height={1200} alt='Orizona Olimpio Pereira Neto' className='hover:scale-110 transition-all duration-[5000ms] ease-in-out select-none' />
      </div>
      <div className='container mx-auto'>
        <p className='text-end max-md:text-sm'>Orizona, Goiás</p>
      </div>
    </div>

  )
}

export default SecondHeroSection