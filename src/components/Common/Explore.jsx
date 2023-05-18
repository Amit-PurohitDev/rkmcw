import React from 'react'
import { SubTitle, Title } from '../../style/common/CategorySt'
import { ExploreContainer, ExploreWrapper, Viewall } from '../../style/common/ExploreSt'
import ProductCard from '../cards/ProductCard'
import product from '../../constants/products'


const productData = [
    {
        image:product.headphone,
        title:"Level 20 RGB Cherry",
        discounted:"$2.99",
        price:"$49.99",
        stars:3
    },
    {
        discount:"20% OFF",
        image:product.cam,
        title:"Level 20 RGB Cherry",
        discounted:"$2.99",
        price:"$49.99",
        stars:2
    },
    {
        image:product.keyboard,
        title:"Level 20 RGB Cherry",
        discounted:"$2.99",
        price:"$49.99",
        stars:1
    },
    {
        image:product.laptop,
        title:"Level 20 RGB Cherry",
        discounted:"$2.99",
        price:"$49.99",
        stars:5
    },
    {
        image:product.mouse,
        title:"Level 20 RGB Cherry",
        discounted:"$2.99",
        price:"$49.99",
        stars:4
    },
    {
        discount:"20% OFF",
        image:product.portable,
        title:"Level 20 RGB Cherry",
        discounted:"$2.99",
        price:"$49.99",
        stars:2
    },
    {
        discount:"20% OFF",
        image:product.speaker,
        title:"Level 20 RGB Cherry",
        discounted:"$2.99",
        price:"$49.99",
        stars:4
    },
    {
        image:product.cam,
        title:"Level 20 RGB Cherry",
        discounted:"$2.99",
        price:"$49.99",
        stars:3
    },
]  

const Explore = () => {
  return (
    <ExploreWrapper>
      <SubTitle>Our Products</SubTitle>
      <Title>Explore our Products</Title>
      <ExploreContainer>
        {
            productData.map((item, index) => {
                return(
                    <ProductCard key={index} item={item}/>   
                )
            })
        }
      </ExploreContainer>
      <Viewall>View All Products</Viewall>
    </ExploreWrapper>
  )
}

export default Explore