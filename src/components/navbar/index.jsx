import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";

import { useMedia } from "../../helper/usemedia";
import navbarStyles from "./navbar.module.css";

const NAV_ITEMS = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Consulenze Bandi",
    path: "/aboutus",
  },
  {
    title: "Shopify",
    path: "/",
  },
  {
    title: "Team",
    path: "/",
  },
  {
    title: "Consula Azanda",
    path: "/",
  },
  {
    title: "Contact Us",
    path: "/",
  },
];

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const isMobile = useMedia(600);

  const handleNavbarClose = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const handleNavbarMenuIcon = () => handleNavbarClose()

  const WebComponent = () => {
    return (
      <nav>
        <div>
          <img
            src="/images/logo.png"
            alt="consulux logo"
            width="100"
            height="60"
          />
        </div>
        <ul>
          {NAV_ITEMS.map((item) => {
            return (
              <li key={item.title}>
                <Link to={item.path} className={StyleSheet.title}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  };

  const MobileComponent = () => {
    return (
      <div>
        <div className={navbarStyles.navbarComponent}>
          <div>
            <img
              src="/images/logo.png"
              alt="consulux logo"
              width="70"
              height="30"
            />
          </div>
          <div>
            <div onClick={handleNavbarMenuIcon}>
              {!isNavbarOpen ? (
                <IoMenu size={20} color="#fff" />
              ) : (
                <IoClose size={20} color="#fff" />
              )}
            </div>
          </div>
        </div>
        {isNavbarOpen && <div className={navbarStyles.navbarItemsComponent}>
          <ul>
            {NAV_ITEMS.map((item) => {
              return (
                <li key={item.title}>
                  <Link to={item.path} className={StyleSheet.title}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>}
      </div>
    );
  };
  return (
    <div className={navbarStyles.rootComponent}>
      {!isMobile ? <WebComponent /> : <MobileComponent />}
    </div>
  );
};

export default Navbar;
