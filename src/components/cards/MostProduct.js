import React from "react";
import { NewProSubText } from "../../style/cards/NewProductST";
import { FaStar, FaCartPlus, FaHeart } from "react-icons/fa";
import { MostProductContainer, MostProductWrap, MostProductImage, MostProductContent, MostProductReview, MostProductTitle, MostProductCost, MostProductLike,  MostProductCart, MostProductCta} from "../../style/cards/MostProduct";

const MostProduct = (props) => {
  return (
    <MostProductWrap>
      <MostProductContainer>
        <MostProductImage><img src={props.item.image} alt="as" /></MostProductImage>
        <MostProductContent>
          <MostProductReview>
              <NewProSubText>
                {Array(5)
                  .fill(1)
                  .map((el, i) => (
                    <FaStar key={el+i} size={14} color="#ff2c53" />
                  ))}
              </NewProSubText>
            <span>100+</span>
            <span> Reviews</span>
          </MostProductReview>
          <MostProductTitle>Media Remote</MostProductTitle>
          <MostProductCost>
            <span>$29.99</span>
          </MostProductCost>
        </MostProductContent>
        <MostProductCta>
          <MostProductCart><FaCartPlus className="icon" size={20} /></MostProductCart>
          <MostProductLike><FaHeart className="icon" size={20} /></MostProductLike>
        </MostProductCta>
      </MostProductContainer>
    </MostProductWrap>
  );
};

export default MostProduct;
