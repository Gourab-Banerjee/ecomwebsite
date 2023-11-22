import React, { useEffect, useState } from "react";
import "./HeaderMenu.css";

import { LiaSearchSolid } from "react-icons/lia";
import { FaHeart } from "react-icons/fa";
import { ImUser } from "react-icons/im";
import { BsCartFill } from "react-icons/bs";
import axios from "axios";

// import { TbGps } from "react-icons/tb";

const HeaderMenu = () => {
  const [productItems, setProductItems] = useState([]);

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
            categoryList(filters: {ids:{eq: "467"}}) {
              uid,
              name,
              id,
              level,
              children_count
              children {
                id
                level
                name
                path
                url_path
                url_key
                image
                description
                children {
                  id
                  level
                  name
                  path
                  url_path
                  url_key
                  image
                  description
                }
              }
            }
          }`,
        },
      };

      try {
        const response = await axios.request(options);
        setProductItems(response?.data?.data?.categoryList[0]?.children);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
    
  }, []);
  console.log(productItems);
  const renderDropdown = (children) => {
    return (
      <ul className="dropdown">
        {children.map((child, idx) => (
          <li key={idx}>
            <a href={`#${child.path}`}>{child.name}</a>
          </li>
        ))}
      </ul>
    );
  };
  return (
    <div className="header-content">
      <div className="header-content-top">
        <div className="logo desktop-logo desktop-logo-all">
          <a href="https://www.crocs.com.kw/" className="anchorLogo">
            <img
              src="https://static.aawweb.com/media/logo/stores/5/Crocs_logo_wordmark_logotype-01.png"
              title=""
              alt=""
              width="170"
            />
          </a>
        </div>
        <div className="navigation">
        {productItems?.length !== 0 && (
  <ul className="megamenu">
    {productItems.map((item, id) => {
      if (item?.children?.length !== 0) {
        console.log(item);
        return (
          <li key={id}>
            <a href="#!">{item?.name}</a>
            {renderDropdown(item.children)}
          </li>
        );
      }
      return null;
    })}
  </ul>
)}       
            
            
            
          
         
        </div>
      </div>

      <div className="header-content-right">
        <ul className="right-links">
          <li className="search-icon">
            <a href="#!">
              <LiaSearchSolid size={30} color="black" />
            </a>
          </li>
          <li>
            <a href="#!">
              <FaHeart size={25} color="black" />
            </a>
          </li>
          <li>
            <a href="#!">
              <ImUser size={25} color="black" />
            </a>
          </li>
          <li>
            <a href="#!">
              <BsCartFill size={25} color="black" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderMenu;
