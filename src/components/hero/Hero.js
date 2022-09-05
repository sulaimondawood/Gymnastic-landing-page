import "./Hero.css";
import Header from "../../components/header/Header";
import Calories from "../../assets/calories.png";
import HeroImage from "../../assets/hero_image.png";
import Heart from "../../assets/heart.png";
import HeroImageBack from "../../assets/hero_image_back.png";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero">
      <div className="blur-circle"></div>
      <div className="hero-left">
        <Header />
        <div className="fitness-ad-container">
          <motion.div
            className="ad-circle"
            initial={{ left: "200px" }}
            whileInView={{ left: "9px" }}
            transition={{ type: "spring", duration: 3 }}
          ></motion.div>
          <p className="ad-text">the best fitness club in town</p>
        </div>

        <div className="hero-left-text">
          <p className="title">
            <span className="stroke">Shape</span>
            <span>your ideal body</span>
          </p>
          <p className="desc">
            In here we will help you to shape and build your ideal body and live
            up your life to the fullest
          </p>
          <div className="number-container">
            <div className="number">
              <p>+118</p>
              <p>Expert coaches</p>
            </div>
            <div className="number">
              <p>+946</p>
              <p>Member Joined</p>
            </div>
            <div className="number">
              <p>+13</p>
              <p>fitness program</p>
            </div>
            <motion.div
              className="calory-container"
              initial={{ top: "-199px" }}
              transition={{ duration: 2 }}
              whileInView={{ top: "10px" }}
            >
              <img className="calory" src={Calories} alt="" />
              <div className="calory-text">
                <p>Calories burned</p>
                <p>220 kcal</p>
              </div>
            </motion.div>
          </div>
          <div className="btn-container">
            <button className="btn get-started">Get Started</button>
            <button className="btn learn-more">Learn More</button>
          </div>
        </div>
        <div className="hero-img-bg">
          <motion.img
            initial={{ top: "8px" }}
            whileInView={{ top: "50px" }}
            transition={{ duration: 2 }}
            className="hero-back"
            src={HeroImageBack}
            alt=""
          />
        </div>
      </div>

      {/* Hero right begins */}
      <div className="hero-right">
        <button id="join" className="btn join">
          Join Now
        </button>
        <img className="hero-img" src={HeroImage} alt="" />

        <motion.div
          className="heart-container"
          transition={{ type: "spring", duration: 3 }}
          initial={{ right: ".5rem" }}
          whileInView={{ right: "11rem" }}
        >
          <motion.img
            initial={{ scale: 0 }}
            transition={{ duration: 0.3 }}
            animate={{ scale: 1.5 }}
            // exit={{ scale: 0 }}

            // transition={{ duration: "}}
            src={Heart}
            alt=""
          />
          <p className="heart-text">Heart Rate</p>
          <p className="heart-number">116 bpm</p>
        </motion.div>
      </div>
    </section>
  );
}
