import React, { useEffect, useState } from "react";
import { LiaSearchSolid } from "react-icons/lia";
import { FaHeart } from "react-icons/fa";
import { ImUser } from "react-icons/im";
import { BsCartFill } from "react-icons/bs";
import axios from "axios";

const HeaderLayout = () => {
    const [productItems, setProductItems] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);

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



  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className={`header-content ${showSidebar ? "sidebar-open" : ""}`}>
      {/* Sidebar */}
      <div className="sidebar">
        <ul className="sidebar-links">
        <div className="sidebar">
          <ul className="sidebar-links">
            {productItems.map((item, id) => (
              <li key={id}>
                <a href={`#${item.path}`} onClick={toggleSidebar}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        </ul>
      </div>

      {/* Main content */}
      <div className="header-content-top">
        <div className="menu-icon" onClick={toggleSidebar}>
          {/* Icon for opening/closing the sidebar */}
          {!showSidebar ? <span>&#9776;</span> : <span>&times;</span>}
        </div>

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

        {/* Right links */}
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

      {/* Search input */}
      <div className="search-input-container">
        <input type="text" placeholder="Search..." />
      </div>
    </div>
  );
};

export default HeaderLayout;
