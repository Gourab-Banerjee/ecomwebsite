import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./ProductSlider.css";

import axios from "axios";



const ProductSlider = ({ title, backGroundColor, images }) => {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "POST",
        url: "/graphql",
        headers: {
          "content-type": "application/json",
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
          }`,
        },
      };

      try {
        const response = await axios.request(options);
        // console.log("data", response);
        setProduct(response?.data?.data?.products?.items);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);
  const handleViewAllClick = () => {
    // Navigate to the product listing page
    navigate('/productList');
  };

  return (
    <div
      className="product-container"
      style={{ backgroundColor: backGroundColor || "#ffffff" }}
    >
      <div className="product-offer">
        <h2 className="offer-price">{title}</h2>
      </div>
      <div className="view" onClick={handleViewAllClick}>
        <p>VIEW ALL</p>
      </div>
      <div className="product-card-container">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={10}
          slidesPerView={4}
          autoplay={true}
          navigation
          // breakpoints={{
          //   580: {
          //     slidesPerView: 2,
          //   },
          // }}
          // pagination={{ clickable: true }}
        >
          {product.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="product-card">
                <div className="card"></div>
                <img
                  src={images[index % images.length]}
                  alt={`Product ${index + 1}`}
                />
                <p>{product.name}</p>
                <h5>KD{product.price.regularPrice.amount.value}</h5>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductSlider;
