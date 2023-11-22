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
  "https://prod.aaw.com/media/catalog/product/cache/f7004b71e64366ff7dbeac9cccf91df6/d/6/d6fb265701d961da156169be90faeb5954c9f1e16abe557c5416380daf73ae47.jpeg",
  "https://prod.aaw.com/media/catalog/product/cache/f7004b71e64366ff7dbeac9cccf91df6/5/8/58d8f6da69e602a9af49133d686f615dd59cceccb3fe5b5e0ede8ce175ec346a.jpeg",
  "https://prod.aaw.com/media/catalog/product/cache/f7004b71e64366ff7dbeac9cccf91df6/0/0/00c644142dc5956afff85ae78dfce0f97a9ed3716abdc4daf53fe00cbb395f23.jpeg",
  "https://prod.aaw.com/media/catalog/product/cache/f7004b71e64366ff7dbeac9cccf91df6/8/b/8b850cb424421883568663bf4350082ad3d514719d4bab82f1fac9f997703fe1.jpeg",
  "https://prod.aaw.com/media/catalog/product/cache/f7004b71e64366ff7dbeac9cccf91df6/f/9/f9e93da6e5be550d37566d0e31dd9cea6a4091e846417956d27b76bdfeb51ec5.jpeg"
]


const CategorySlides2 = () => {
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
            <img className="img-fluid d-block" src="https://static.aawweb.com/media/wysiwyg/assets/crocs/crocs-kw-widget-clogs-2.png" alt=""/>
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

export default CategorySlides2