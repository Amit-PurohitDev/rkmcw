import React from 'react'
import { ExploreContainer, ExploreWrapper } from '../../style/common/ExploreSt'
import { SubTitle, Title } from '../../style/common/CategorySt'
import MostProduct from '../cards/MostProduct'

const productData = [
    {
        discount:"20% OFF",
        image:"https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-08.png",
        title:"Level 20 RGB Cherry",
        discounted:"$2.99",
        price:"$49.99",
        stars:5
    },
    {
        discount:"20% OFF",
        image:"https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-08.png",
        title:"Level 20 RGB Cherry",
        discounted:"$2.99",
        price:"$49.99",
        stars:5
    },
    {
        discount:"20% OFF",
        image:"https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-08.png",
        title:"Level 20 RGB Cherry",
        discounted:"$2.99",
        price:"$49.99",
        stars:5
    },
    {
        discount:"20% OFF",
        image:"https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-08.png",
        title:"Level 20 RGB Cherry",
        discounted:"$2.99",
        price:"$49.99",
        stars:5
    },
    {
        discount:"20% OFF",
        image:"https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-08.png",
        title:"Level 20 RGB Cherry",
        discounted:"$2.99",
        price:"$49.99",
        stars:5
    }
]  

const MostSold = () => {
  return (
    <ExploreWrapper>
      <SubTitle style={{textAlign:"center"}}>Our Products</SubTitle>
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