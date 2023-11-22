import React, { useEffect, useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./ProductSlider.css";
import "./CategorySlides.css"

import axios from 'axios';

const productImages=[
  "https://prod.aaw.com/media/catalog/product/cache/f7004b71e64366ff7dbeac9cccf91df6/f/9/f94e387ec0ec5ad99ebb682b7d8b24198aead869f5b5710fd2a32ebe47738471.jpeg",
  "https://prod.aaw.com/media/catalog/product/cache/f7004b71e64366ff7dbeac9cccf91df6/1/2/12272391a4d6c8df59cc0f775ed13ba0fe69d9bc3b4b324f1c89e80dfe3e2711.jpeg",
  "https://prod.aaw.com/media/catalog/product/cache/f7004b71e64366ff7dbeac9cccf91df6/7/8/78c0022be5c13dffc1c2ce853b887bd4eae1fba9b5d2597ebd9769076908673b.jpeg",
  "https://prod.aaw.com/media/catalog/product/cache/f7004b71e64366ff7dbeac9cccf91df6/7/6/76adb01c04d4f8e0a67d772e6053e4c8279ad2bd41b5b788e78770b47c11e626.jpeg",
  "https://prod.aaw.com/media/catalog/product/cache/f7004b71e64366ff7dbeac9cccf91df6/0/d/0dd66e00046786c37647051796f6127c7d90594c11967d78fe15b4459b112d36.jpeg"
]


const CategorySlider = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const options = {
          method: 'POST',
          url: '/graphql',
          headers: {
            'content-type': 'application/json'
          },
          data: {
            query: `{
              products(search: "", pageSize: 10) {
                items {
                  id
                  name
                  sku
                  price {
                    regularPrice {
                      amount {
                        value
                        currency
                      }
                    }
                  }
                  image {
                    url
                  }
                }
              }
            }`
          }
        };
  
        try {
          const response = await axios.request(options);
          // console.log("data", response);
          setProduct(response?.data?.data?.products?.items)
        } catch (error) {
          console.log("error", error);
        }
      };
  
      fetchData();
    }, []);
  return (
    <div className="category-slides-container">
  <div className='category-slider'>
 <div className='widget__border-icon'>
        <div className="widget__icon">
            <img className="img-fluid d-block" src="https://static.aawweb.com/media/wysiwyg/assets/crocs/crocs-kw-widget-slides.png" alt=""/>
                                <div className="widget__title">SLIDES</div>
                                <div className="text-center"><a className="widget__viewall" href="#!">VIEW ALL</a></div>
                            </div>
    </div>
  
    <div className='product-card-container' id='card-container'>

<Swiper 
    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
    spaceBetween={10}
    slidesPerView={4}
    autoplay={true}
    navigation
    // pagination={{ clickable: true }}
  >
      {product.map((product, index) => (
        <SwiperSlide key={index}>
          <div className="product-card" >
            <div className='card'></div>
            <img src={productImages[index % productImages.length]} alt={`Product ${index + 1}`} />
            <p>{product.name}</p>
    
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
</div>

    </div>
    </div>
  
   
  )
}

export default CategorySlider