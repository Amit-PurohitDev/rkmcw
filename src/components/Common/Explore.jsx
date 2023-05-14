import React from 'react'
import { SubTitle, Title } from '../../style/common/CategorySt'
import { ExploreContainer, ExploreWrapper, Viewall } from '../../style/common/ExploreSt'
import ProductCard from '../cards/ProductCard'

const productData = [
    {
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
        image:"https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-08.png",
        title:"Level 20 RGB Cherry",
        discounted:"$2.99",
        price:"$49.99",
        stars:5
    },
    {
        image:"https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-08.png",
        title:"Level 20 RGB Cherry",
        discounted:"$2.99",
        price:"$49.99",
        stars:5
    },
    {
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
        image:"https://new.axilthemes.com/demo/template/etrade/assets/images/product/electric/product-08.png",
        title:"Level 20 RGB Cherry",
        discounted:"$2.99",
        price:"$49.99",
        stars:5
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