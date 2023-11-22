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
  "https://prod.aaw.com/media/catalog/product/cache/f7004b71e64366ff7dbeac9cccf91df6/8/8/88f92ae00ea40bc0ef443ee4fc23dbcda4cb1e0442c2dd6cb3a08a8b6c1193da.jpeg",
  "https://prod.aaw.com/media/catalog/product/cache/f7004b71e64366ff7dbeac9cccf91df6/0/e/0ea0f937d59debca0a62f2b651f09ea8372c24c5ce7b2cd98d92cb040ca145c6.jpeg",
  "https://prod.aaw.com/media/catalog/product/cache/f7004b71e64366ff7dbeac9cccf91df6/f/e/fe5636b9714ad021bfe9bac096c36def12d82e0d868cf53ef4dff09b77472569.jpeg",
  "https://prod.aaw.com/media/catalog/product/cache/f7004b71e64366ff7dbeac9cccf91df6/6/9/69e8f858a1c91642e3126a9fc245bb16942362b32c48ae49acf6a18128c90e54.jpeg",
  "https://prod.aaw.com/media/catalog/product/cache/f7004b71e64366ff7dbeac9cccf91df6/e/9/e9e58311b507a7e775109aa32deee30523659e24118c2bb15200157a1c925165.jpeg"
]


const CategorySlides3 = () => {
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
            <img className="img-fluid d-block" src="https://static.aawweb.com/media/wysiwyg/assets/crocs/sandals_img-2023.png" alt=""/>
                                <div className="widget__title">CLOGS</div>
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

export default CategorySlides3