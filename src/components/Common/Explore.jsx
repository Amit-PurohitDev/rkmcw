import React, { useEffect, useState } from "react";
import { SubTitle, Title } from "../../style/common/CategorySt";
import {
  ExploreContainer,
  ExploreWrapper,
  Viewall,
} from "../../style/common/ExploreSt";
import ProductCard from "../cards/ProductCard";
import { Link } from "react-router-dom";
import dataReturn from "../../firebase/Data";

const Explore = () => {

    const [products, setproducts] = useState();

    useEffect(() => {
      dataReturn("productdata").then((res) => {
        return res
      }).then((response) => {
        setproducts(response)
      })
    }, []);

  return (
    <ExploreWrapper>
      <SubTitle>Our Products</SubTitle>
      <Title>Explore our Products</Title>
      <ExploreContainer>
        {products && products.map((item, index) => {
          return <ProductCard key={index} item={item} />;
        })}
      </ExploreContainer>
      <Link to="/productgallery">
        <Viewall>View All Products</Viewall>
      </Link>
    </ExploreWrapper>
  );
};

export default Explore;
