import React from 'react'
import { ExploreWrapper, FeedBackContainer } from '../../style/common/ExploreSt'
import { SubTitle, Title } from '../../style/common/CategorySt'
import FeedbackCard from '../cards/FeedbackCard';

const productData = [
    {
        Name:"Bubbly",
        image:"https://i.pinimg.com/originals/a7/f1/ca/a7f1cabd200366dabf074ea0e5ec225e.jpg",
        title:"Head of Idea",
        des:"I appreciate the fact that you have been covering Tim's work since he went on vacation. What distinguishes you is that you don't just do the work for the sake of doing it; instead, you strive to make it as perfect as possible. You make the team stronger than it was before. Keep up the good work.",
    },
    {
        Name:"Munni",
        image:"https://i.pinimg.com/170x/b4/d0/a3/b4d0a3458a11ef883e4fd876d53ef83a.jpg",
        title:"Head of Idea",
        des:"I really appreciated your efforts to keep every team member up to date on your tasks. It also encourages your team to make more informed decisions and to be more accountable to the team. Thank you for promoting such strong collaborative values. It is an essential part of our company's culture.",
    },
    {
        Name:"Bunty",
        image:"	https://c4.wallpaperflare.com/wallpaper/948/78/527/tom-cruise-face-picture-wallpaper-thumb.jpg",
        title:"Head of Idea",
        des:"It is commendable that you acted as a mediator in the recent conflict involving your team members. You were the voice of reason that kept things from blowing out of proportion. You're doing an excellent job of being a team player on whom everyone can rely. Great job!",
    }
  ]  
  

const UserFeedback = () => {
  return (
    <ExploreWrapper style={{
      background: "#455056",
      fontWeight: "600",
      color:"#fff"
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