import React from "react";
import Arrow from "./images/icon-arrow.svg";
import AngleLeft from "./images/icon-angle-left.svg";
import AngleRight from "./images/icon-angle-right.svg";
import Cancel from "./images/icon-close.svg";
import Menu from "./images/icon-hamburger.svg";

import { useState } from "react";
import { useMediaQuery } from "react-responsive";

import BackgroundOne from "./images/desktop-image-hero-1.jpg";
import BackgroundTwo from "./images/desktop-image-hero-2.jpg";
import BackgroundThree from "./images/desktop-image-hero-3.jpg";

import MobileBackgroundOne from "./images/mobile-image-hero-1.jpg";
import MobileBackgroundTwo from "./images/mobile-image-hero-2.jpg";
import MobileBackgroundThree from "./images/mobile-image-hero-3.jpg";

const Home: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const switchDesktopImages: string[] = [
    BackgroundOne,
    BackgroundTwo,
    BackgroundThree,
  ];

  const switchMobileImages: string[] = [
    MobileBackgroundOne,
    MobileBackgroundTwo,
    MobileBackgroundThree,
  ];

  //Determine screen sixe using react responsive hook
  const isMobile: boolean = useMediaQuery({ maxWidth: 375 });

  //Determine Image Array Based On Screen Size
  const images: string[] = isMobile ? switchMobileImages : switchDesktopImages;

  const [currentArticleIndex, setCurrentArticleIndex] = useState<number>(0);
  const switchArticles: string[] = ["ArticleOne", "ArticleTwo", "ArticleThree"];

  const handleNext = (): void => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    setCurrentArticleIndex(
      (prevIndex) => (prevIndex + 1) % switchArticles.length
    );
  };

  const handlePrevious = (): void => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
    setCurrentArticleIndex(
      (prevIndex) =>
        (prevIndex - 1 + switchArticles.length) % switchArticles.length
    );
  };

  const [isMenuVisible, setMenuVisible] = useState<boolean>(true);
  const [isContentVisible, setContentVisible] = useState<boolean>(false);

  const handleMenuClick = (): void => {
    setContentVisible(true);
    setMenuVisible(false);
  };

  const handleCancelClick = (): void => {
    setContentVisible(false);
    setMenuVisible(true);
  };

  return (
    <main>
      <div className="main-content">
        <div
          className="navbar"
          style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
        >
          <div className="navbar-content">
            {isMenuVisible && (
              <div className="menu-box" onClick={handleMenuClick}>
                <img className="menu" src={Menu} alt="menu" />
              </div>
            )}
            <span className="room">room</span>
            {isContentVisible && (
              <div className="overlay">
                <div className="links">
                  <div className="cancel-box" onClick={handleCancelClick}>
                    <img className="cancel" src={Cancel} alt="close" />
                  </div>
                  <a href="/">home</a>
                  <a href="/shop">shop</a>
                  <a href="/about">about</a>
                  <a href="/contact">contact</a>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="side-content">
          <div className="article-container">
            {switchArticles.map((article, index) => (
              <div
                key={index}
                className={index === currentArticleIndex ? "visible" : "hidden"}
              >
                {index === 0 && (
                  <div>
                    <h3>Discover innovative ways to decorate</h3>

                    <p className="side-para">
                      {" "}
                      We provide unmatched quality, comfort, and style for
                      property owners across the country. Our experts combine
                      form and function in bringing your vision to life. Create
                      a room in your own style with our collection and make your
                      property a reflection of you and what you love.
                    </p>
                  </div>
                )}

                {index === 1 && (
                  <div>
                    <h3>We are available all across the globe</h3>

                    <p className="side-para">
                      {" "}
                      With stores all over the world, it's easy for you to find
                      furniture for your home or place of business. Locally,
                      we’re in most major cities throughout the country. Find
                      the branch nearest you using our store locator. Any
                      questions? Don't hesitate to contact us today.
                    </p>
                  </div>
                )}

                {index === 2 && (
                  <div>
                    <h3>Manufactured with the best materials</h3>

                    <p className="side-para">
                      {" "}
                      Our modern furniture store provide a high level of
                      quality. Our company has invested in advanced technology
                      to ensure that every product is made as perfect and as
                      consistent as possible. With three decades of experience
                      in this industry, we understand what customers want for
                      their home and office.
                    </p>
                  </div>
                )}
              </div>
            ))}
            <div className="shop-box">
              <p>
                Shop now <img src={Arrow} alt="" />
              </p>
            </div>
            <div className="navigation">
              <button
                className="prev"
                onClick={handlePrevious}
                disabled={currentArticleIndex === 0}
              >
                <img src={AngleLeft} alt="" />
              </button>
              <button
                className="next"
                onClick={handleNext}
                disabled={currentArticleIndex === switchArticles.length - 1}
              >
                <img src={AngleRight} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
