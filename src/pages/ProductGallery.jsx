import React, { useEffect, useState } from "react";
import Navbar from "../components/Common/Navbar";
import {
  FilterBar,
  Gallery,
  Prodgallery,
  Wrapper,
  GallContainer,
  SortingBar
} from "../style/pages/ProductGallerySt";
import ProductCard from "../components/cards/ProductCard";
import WeeklyUpdate from "../components/Common/WeeklyUpdate";
import SelectDrop from "../components/cta/SelectDrop";
import dataReturn from "../firebase/Data";

const ProductGallery = () => {
  const [products, setproducts] = useState();

  useEffect(() => {
    dataReturn("productdata").then((res) => {
      return res
    }).then((response) => {
      setproducts(response)
    })
  }, []);

  const select  = [
    "Latest", "Oldest",  "Price",  "Popular"
  ]

  return (
    <Wrapper>
      <Navbar />
      <Prodgallery>
        <FilterBar>
          
        </FilterBar>
        <Gallery>
          <SortingBar>
            <p>Showing 1-12 of 84 results</p>
            <SelectDrop  list={select}/>
          </SortingBar>
          <GallContainer>
            {products &&
              products.map((item, index) => {
                return <ProductCard prooductId={item.id} key={item + index} item={item} />;
              })}
          </GallContainer>
          <WeeklyUpdate />
        </Gallery>
      </Prodgallery>
    </Wrapper>
  );
};

export default ProductGallery;
