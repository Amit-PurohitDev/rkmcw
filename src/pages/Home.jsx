import React from 'react'
import Navbar from '../components/Common/Navbar'
import Banner from '../components/Common/Banner'
import Category from '../components/Common/Category'
import Explore from '../components/Common/Explore'
import NewProduct from '../components/Common/NewProduct'
import UserFeedback from '../components/Common/UserFeedback'
import MostSold from '../components/Common/MostSold'
import Whypeople from '../components/Common/Whypeople'
import Promotion from '../components/Common/Promotion'
import WeeklyUpdate from '../components/Common/WeeklyUpdate'

const Home = () => {

  return (
    <div>
        <Navbar />
        <Banner />
        <Category />
        <Explore />
        <NewProduct />
        <MostSold />
        <Promotion />
        <WeeklyUpdate />
        <Whypeople />
        <UserFeedback />
    </div>
  )
}

export default Home