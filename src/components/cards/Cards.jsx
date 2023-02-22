import React from 'react'
import Single from '../../assets/single.png'
import Double from '../../assets/double.png'
import Triple from '../../assets/triple.png'
import Card from './card/Card'

function Cards() {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <Card img={Single} plan='Single User' price='$149' storage='500 GB' numOfUsers='1' text='2' />
        <Card img={Double} plan='Partnership' price='$199' storage='1 TB' numOfUsers='3' text='10' />
        <Card img={Triple} plan='Group Account' price='$299' storage='5 TB' numOfUsers='10' text='20' />
      </div>
    </div>
  )
}

export default Cards