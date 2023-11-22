import React from "react";
import Banner from "./Banner";
import ProductSlider from "./ProductSlider";
import BannerItem from "./BannerItem";
import Poster from "./Poster";

import CategorySlides from "./CategorySlides";
import Category from "./Category";
import CategorySlides2 from "./CategorySlides2";
import CategorySlides3 from "./CategorySlides3";
import CategoryBox from "./CategoryBox";

const productImages1 = [
  "https://prod.aaw.com/media/catalog/product/cache/f7004b71e64366ff7dbeac9cccf91df6/1/e/1eea0352215e31da5450337f3b7e0f4f89e747c8e72bb9b69e1ea0e3ff917423.jpeg",
  "https://prod.aaw.com/media/catalog/product/cache/f7004b71e64366ff7dbeac9cccf91df6/3/2/32168cf5f0fab6e106daf5a1a6dc48e45a4eff19ef3f1e6d4cbe25316c5dcc56.jpeg",
  "https://prod.aaw.com/media/catalog/product/cache/f7004b71e64366ff7dbeac9cccf91df6/7/f/7fb7decce6cfca95849345a6c55824076e1674aca7d45036df4beb95ce024932.jpeg",
  "https://prod.aaw.com/media/catalog/product/cache/f7004b71e64366ff7dbeac9cccf91df6/2/b/2bc1b5f0792f692a9857d0b6e40670688c8618252ad0facd2f43c99d67d4365b.jpeg",
  "https://prod.aaw.com/media/catalog/product/cache/f7004b71e64366ff7dbeac9cccf91df6/4/3/43ad7c17aa7758bb44209e5e8303cbb708594ab0300abf988edf3e02b1d783e9.jpeg",
];
const productImages2 =[
  "https://prod.aaw.com/media/catalog/product/cache/f7004b71e64366ff7dbeac9cccf91df6/8/8/888444e80b10408bb460f70d24a60b404d30a4965122823307b20965b66b6b9c.jpeg",
"https://prod.aaw.com/media/catalog/product/cache/f7004b71e64366ff7dbeac9cccf91df6/f/e/feb40a9e8b310ec5c8f6dae673f8b9222b306a96e9d3eba512c071825b37ccc0.jpeg",
"https://prod.aaw.com/media/catalog/product/cache/f7004b71e64366ff7dbeac9cccf91df6/c/8/c86d05560e2e3e11750d923dd4cbd9f67116599794f230e5ebd7b81721fdbfa6.jpeg",
"https://prod.aaw.com/media/catalog/product/cache/f7004b71e64366ff7dbeac9cccf91df6/c/3/c3c925b08dcea14633ae483df38a615820140a6ab660e65b9074f3f7c9f8deba.jpeg",
"https://prod.aaw.com/media/catalog/product/cache/f7004b71e64366ff7dbeac9cccf91df6/4/3/4363f1109e6eb4ee2ab6f991a0ac9f6a5037370e57b378bc8a1aee86a8e64abd.jpeg"
];
const HomePage = () => {
  return (
    <div>
      <Banner />
      <Poster src="https://prod.aaw.com/media/wysiwyg/brands-logo/new-tabby-blk-en.jpg" />
      <ProductSlider
        title="UP TO 25% - 70% OFF!"
        backGroundColor="#e41e2d"
        images={productImages1}
      />
      <ProductSlider
        title="NEW ARRIVALS"
        backGroundColor="#6b599f"
        images={productImages2}
      />
      <Category />
      <ProductSlider
        title="TRENDING"
        backGroundColor="#36a585"
        images={productImages1}
      />
      <Poster src="https://prod.aaw.com/media/wysiwyg/brands-logo/new-tamara-blk-en.jpg" />
      <Poster src="https://static.aawweb.com/media/wysiwyg/assets/crocs/2023/cx-jibbitz-hp-en-large.jpg" />
      <Poster src="https://prod.aaw.com/media/weltpixel/owlcarouselslider/images/1/_/1_2560x788_en_crocsatwork-min.jpg" />


<CategorySlides2 />
      <CategorySlides />
      <BannerItem />
      <CategorySlides3 />
      <Poster src="https://static.aawweb.com/media/wysiwyg/assets/crocs/2023/crocs-jibbitx-june-21-23-2560x788.jpg" />
      <Poster src="https://prod.aaw.com/media/weltpixel/owlcarouselslider/images/2/5/2560x788-min_3__1.jpg" />

    <CategoryBox />  
    </div>
  );
};

export default HomePage;
