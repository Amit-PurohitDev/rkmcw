import React from 'react'
import { ExploreWrapper, FeedBackContainer } from '../../style/common/ExploreSt'
import { SubTitle, Title } from '../../style/common/CategorySt'
import FeedbackCard from '../cards/FeedbackCard';

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
    }
  ]  
  

const UserFeedback = () => {
  return (
    <ExploreWrapper style={{
      background: "linear-gradient(127deg, #efe6ff 0%, #673AB7 35%, rgba(46,46,2,1) 100%)",
      fontWeight: "600",
      boxShadow: "0px 0px 10px #673AB7"
      }}>
      <SubTitle>This Week’s</SubTitle>
      <Title>Users Feedback</Title>
      <FeedBackContainer>
      {
            productData.map((item, index) => {
                return(
                    <FeedbackCard key={index} item={item}/>   
                )
            })
        }
      </FeedBackContainer>
    </ExploreWrapper>
  )
}

export default UserFeedback