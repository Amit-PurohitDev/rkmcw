import React from 'react'
import { ExploreContainer, ExploreWrapper } from '../../style/common/ExploreSt'
import { SubTitle, Title } from '../../style/common/CategorySt'
import MostProduct from '../cards/MostProduct'
import product from '../../constants/products'

const productData = [
    {
        discount:"20% OFF",
        image:product.cam,
        title:"Level 20 RGB Cherry",
        discounted:"$2.99",
        price:"$49.99",
        stars:5
    },
    {
        discount:"20% OFF",
        image:product.keyboard,
        title:"Level 20 RGB Cherry",
        discounted:"$2.99",
        price:"$49.99",
        stars:5
    },
    {
        discount:"20% OFF",
        image:product.laptop,
        title:"Level 20 RGB Cherry",
        discounted:"$2.99",
        price:"$49.99",
        stars:5
    },
    {
        discount:"20% OFF",
        image:product.portable,
        title:"Level 20 RGB Cherry",
        discounted:"$2.99",
        price:"$49.99",
        stars:5
    },
    {
        discount:"20% OFF",
        image:product.headphone,
        title:"Level 20 RGB Cherry",
        discounted:"$2.99",
        price:"$49.99",
        stars:5
    }
]  

const MostSold = () => {
  return (
    <ExploreWrapper>
      <SubTitle style={{textAlign:"center", display:"block"}}>Our Products</SubTitle>
      <Title  style={{textAlign:"center"}}>Most Sold in eTrade Store</Title>
      <ExploreContainer>
        {
            productData.map((item, index) => {
                return(
                    <MostProduct key={index} item={item}/>   
                )
            })
        }
      </ExploreContainer>
    </ExploreWrapper>
  )
}

export default MostSold