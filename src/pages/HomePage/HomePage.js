import React from 'react'
import Slider from '../../components/home/Slider/Slider'
import Tracking from '../../components/home/Tracking/Tracking'
import HowToStart from '../../components/home/HowToStart/HowToStart'
import ShippingPriceList from '../../components/home/ShippingPriceList/ShippingPriceList'
import SmartServices from '../../components/home/SmartServices/SmartServices'
import Export from '../../components/home/Export/Export'
import SmartWall from '../../components/home/SmartWall/SmartWall'
import SmartLocker from '../../components/home/SmartLocker/SmartLocker'
import FamousShops from '../../components/home/FamousShops/FamousShops'

const HomePage = () => {
  return (
    <div>
        <Slider />
        <Tracking />
        <HowToStart />
        <ShippingPriceList />
        <SmartServices />
        <Export />
        <SmartWall />
        <SmartLocker />
        <FamousShops />
    </div>
  )
}

export default HomePage