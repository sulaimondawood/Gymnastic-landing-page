import "./Reason.css";
import Image1 from "../../assets/image1.png";
import Image2 from "../../assets/image2.png";
import Image3 from "../../assets/image3.png";
import Image4 from "../../assets/image4.png";
import Tick from "../../assets/tick.png";

export default function Reason() {
  return (
    <div className="container">
      <section className="reason-section">
        <div className="reason-left">
          <div className="img-container">
            <div>
              <img src={Image1} alt="" />
            </div>
            <div>
              <img src={Image2} alt="" />
              <img src={Image3} alt="" />
              <img src={Image4} alt="" />
            </div>
          </div>
        </div>
        <div className="reason-right">
          <p>Some reasons</p>
          <h1>
            <span className="stroke">why</span>choose us?
          </h1>
          <div className="info-container">
            <div className="info">
              <img src={Tick} alt="" />
              <p>Over 140+ expert coachs</p>
            </div>
            <div className="info">
              <img src={Tick} alt="" />
              <p>Train smarter and faster than before</p>
            </div>
            <div className="info">
              <img src={Tick} alt="" />
              <p>1 free program for new member</p>
            </div>
            <div className="info">
              <img src={Tick} alt="" />
              <p>reliable partners</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
