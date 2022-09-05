import "./Testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import { useState } from "react";
import LeftArrow from "../../assets/leftArrow.png";
import RightArrow from "../../assets/rightArrow.png";
import { motion } from "framer-motion";

export default function Testimonials() {
  const [position, setPosition] = useState(0);
  const initialTestimonialData = testimonialsData[position];
  const { image, review, name, status } = initialTestimonialData;
  // console.log(initialTestimonialData);
  function prevPosition() {
    setPosition((position) => {
      let currPosition = position - 1;
      return curr(currPosition);
    });
  }
  function nextPosition() {
    setPosition((position) => {
      let currPosition = position + 1;
      return curr(currPosition);
    });
  }
  function curr(number) {
    if (number > testimonialsData.length - 1) {
      return 0;
    }
    if (number < 0) {
      return testimonialsData.length - 1;
    }
    return number;
  }
  return (
    <section className="testimonial-section container">
      <div className="testimonial-left">
        <p className="title">What They Say About Us</p>
        <p className="stroke">WHAT THEY</p>
        <p>SAY ABOUT US</p>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          key={review}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", damping: 100, stiffness: 400 }}
          className="review-container"
        >
          <p className="review">{review}</p>
          <p className="name-status">
            <span className="name">{name}</span>
            <span className="status">-{status}</span>
          </p>
        </motion.div>
      </div>
      <div className="testimonial-right">
        <div className="btn-container">
          <img src={LeftArrow} alt="" onClick={prevPosition} />
          <img src={RightArrow} alt="" onClick={nextPosition} />
        </div>
        <div className="testimonial-img">
          <motion.img
            key={image}
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            src={image}
            alt=""
          />
          <div className="border"></div>
          <div className="filled-border"></div>
        </div>
      </div>
    </section>
  );
}
