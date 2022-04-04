import { useState } from "react";
import BtnSlider from "./BtnSlider";
import dataSlider from "./dataSlider";
import "./Slider.css";

export default function Slider() {
  const [slideAnim, setSlideAnim] = useState({ index: 1, inProgress: false });

  const nextSlide = () => {
    if (slideAnim.index !== dataSlider.length && !slideAnim.inProgress) {
      setSlideAnim({ index: slideAnim.index + 1, inProgress: true });
      setTimeout(() => {
        setSlideAnim({ index: slideAnim.index + 1, inProgress: false });
      }, 300);
    } else if (slideAnim.index === dataSlider.length && !slideAnim.inProgress) {
      setSlideAnim({ index: 1, inProgress: true });
      setTimeout(() => {
        setSlideAnim({ index: 1, inProgress: false });
      }, 300);
    }
  };

  const prevSlide = () => {
    if (slideAnim.index !== 1 && !slideAnim.inProgress) {
      setSlideAnim({ index: slideAnim.index - 1, inProgress: true });
      setTimeout(() => {
        setSlideAnim({ index: slideAnim.index - 1, inProgress: false });
      }, 300);
    } else if (slideAnim.index === 1 && !slideAnim.inProgress) {
      setSlideAnim({ index: dataSlider.length, inProgress: true });
      setTimeout(() => {
        setSlideAnim({ index: dataSlider.length, inProgress: false });
      }, 300);
    }
  };

  const moveDot = (index) => {
    setSlideAnim({ index: index, inProgress: false });
  };

  return (
    <div className="container-slider">
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={
              slideAnim.index === index + 1 ? "slide active-anim" : "slide"
            }
          >
            <img
              src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`}
              alt=""
            />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots">
        {Array.from({ length: 5 }).map((item, index) => {
          return (
            <button
              className={slideAnim.index === index + 1 ? "dot active" : "dot"}
              onClick={() => {
                moveDot(index + 1);
              }}
            ></button>
          );
        })}
      </div>
    </div>
  );
}
