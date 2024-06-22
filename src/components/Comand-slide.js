import React, { useState } from "react";
import "./../css/comand-slide.css";

function Slide() {
  const [activeSlide, setActiveSlide] = useState(1);

  const handleCheckboxChange = (slideNumber) => {
    setActiveSlide(slideNumber);
  };

  return (
    <div className="section full-height over-hide px-4 px-sm-0">
      <div className="container">
        <div className="row full-height justify-content-center">
          <div className="col-lg-10 col-xl-8 align-self-center padding-tb">
            <div className="section mx-auto text-center slider-height-padding">
              <input
                className="checkbox frst"
                type="radio"
                id="slide-1"
                name="slider"
                checked={activeSlide === 1}
                onChange={() => handleCheckboxChange(1)}
              />
              <label htmlFor="slide-1"></label>
              <input
                className="checkbox scnd"
                type="radio"
                id="slider-2"
                name="slider"
                checked={activeSlide === 2}
                onChange={() => handleCheckboxChange(2)}
              />
              <label htmlFor="slider-2"></label>
              <input
                className="checkbox thrd"
                type="radio"
                id="slider-3"
                name="slider"
                checked={activeSlide === 3}
                onChange={() => handleCheckboxChange(3)}
              />
              <label htmlFor="slider-3"></label>
              <input
                className="checkbox foth"
                type="radio"
                id="slider-4"
                name="slider"
                checked={activeSlide === 4}
                onChange={() => handleCheckboxChange(4)}
              />
              <label htmlFor="slider-4"></label>

              <ul className="ulll">
                <li
                  className="slides"
                  style={{
                    opacity: activeSlide === 1 ? 1 : 0,
                    pointerEvents: activeSlide === 1 ? "auto" : "none",
                  }}
                >
                  <div className="slide-content">
                    <div
                      className="image"
                      style={{
                        backgroundImage:
                          'url("https://assets.codepen.io/1462889/sl1.jpg")',
                      }}
                    ></div>
                    <div className="text">
                      <p>Имя: Ольга</p>
                      <p>VK: <a href="https://vk.com" target="_blank" rel="noopener noreferrer">ссылка</a></p>
                      <p>Телефон: 89529999999</p>
                    </div>
                  </div>
                </li>
                <li
                  className="slides"
                  style={{
                    opacity: activeSlide === 2 ? 1 : 0,
                    pointerEvents: activeSlide === 2 ? "auto" : "none",
                  }}
                >
                  <div className="slide-content">
                    <div
                      className="image"
                      style={{
                        backgroundImage:
                          'url("https://assets.codepen.io/1462889/sl2.jpg")',
                      }}
                    ></div>
                    <div className="text">
                      <p>Имя: Алексей</p>
                      <p>VK: <a href="https://vk.com" target="_blank" rel="noopener noreferrer">ссылка</a></p>
                      <p>Телефон: 89527777777</p>
                    </div>
                  </div>
                </li>
                <li
                  className="slides"
                  style={{
                    opacity: activeSlide === 3 ? 1 : 0,
                    pointerEvents: activeSlide === 3 ? "auto" : "none",
                  }}
                >
                  <div className="slide-content">
                    <div
                      className="image"
                      style={{
                        backgroundImage:
                          'url("https://assets.codepen.io/1462889/sl3.jpg")',
                      }}
                    ></div>
                    <div className="text">
                      <p>Имя: Мария</p>
                      <p>VK: <a href="https://vk.com" target="_blank" rel="noopener noreferrer">ссылка</a></p>
                      <p>Телефон: 89525555555</p>
                    </div>
                  </div>
                </li>
                <li
                  className="slides"
                  style={{
                    opacity: activeSlide === 4 ? 1 : 0,
                    pointerEvents: activeSlide === 4 ? "auto" : "none",
                  }}
                >
                  <div className="slide-content">
                    <div
                      className="image"
                      style={{
                        backgroundImage:
                          'url("https://assets.codepen.io/1462889/sl4.jpg")',
                      }}
                    ></div>
                    <div className="text">
                      <p>Имя: Дмитрий</p>
                      <p>VK: <a href="https://vk.com" target="_blank" rel="noopener noreferrer">ссылка</a></p>
                      <p>Телефон: 89524444444</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slide;
