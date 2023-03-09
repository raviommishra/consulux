import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";

import { useMedia } from "../../helper/usemedia";
import navbarStyles from "./navbar.module.css";
import toClass from "../../helper/toClass";

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
    path: "#team",
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
  const [isScrolling, setIsScrolling] = useState(false);

  const isMobile = useMedia(600);

  const handleNavbarClose = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const handleNavbarMenuIcon = () => handleNavbarClose();

  const handleScrollingListener = (sticky) => {
    if (window.scrollY > sticky) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const sticky = navbar.offsetTop;

    const listner = window.addEventListener("scroll", () =>
      handleScrollingListener(sticky)
    );

    return () => window.removeEventListener("scroll", listner);
  }, []);

  const WebComponent = () => {
    return (
      <nav>
        <div>
          <img
            src="/images/logo.png"
            alt="consulux logo"
            width="100%"
            height="60"
          />
        </div>
        <ul>
          {NAV_ITEMS.map((item) => {
            return (
              <li key={item.title}>
                {item.path !== "#team" ? (
                  <Link to={item.path} className={StyleSheet.title}>
                    {item.title}
                  </Link>
                ) : (
                  <a href={item.path} className={StyleSheet.title}>
                    {item.title}
                  </a>
                )}
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
              width="70%"
              height="30"
            />
          </div>
          <div>
            <div onClick={handleNavbarMenuIcon}>
              {!isNavbarOpen ? (
                <IoMenu size={20} color={isScrolling ? "#274585" : "#fff"} />
              ) : (
                <IoClose size={20} color={isScrolling ? "#274585" : "#fff"} />
              )}
            </div>
          </div>
        </div>
        {isNavbarOpen && (
          <div className={navbarStyles.navbarItemsComponent}>
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
          </div>
        )}
      </div>
    );
  };
  return (
    <div
      id="navbar"
      className={
        isScrolling
          ? toClass([navbarStyles.rootComponent, navbarStyles.isSticky])
          : navbarStyles.rootComponent
      }
    >
      {!isMobile ? <WebComponent /> : <MobileComponent />}
    </div>
  );
};

export default Navbar;
