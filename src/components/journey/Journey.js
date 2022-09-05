import "./Journey.css";
import { plansData } from "../../data/plansData";
import WhiteTick from "../../assets/whiteTick.png";
import RightArrow from "../../assets/rightArrow.png";
function Journey() {
  return (
    <section className="journey-section">
      <div className="blur-circle width"></div>

      <p>
        <span className="stroke">ready to start</span>your journey
        <span className="stroke">now with us</span>
      </p>
      <div className="journey-row">
        {plansData.map((plan) => {
          const { icon, name, price, features } = plan;
          return (
            <div key={price} className="col">
              <p>{icon}</p>
              <p style={{ color: "var(--lightgray)" }}>{name} </p>
              <h1>${price}</h1>
              <div>
                {features.map((feat) => {
                  return (
                    <article>
                      <img src={WhiteTick} alt="" />
                      <p>{feat}</p>
                    </article>
                  );
                })}
              </div>
              <p className="seemore" style={{ color: "var(--lightgray)" }}>
                See more benefits
                <img
                  style={{ width: "10px", marginLeft: "10px" }}
                  src={RightArrow}
                  alt=""
                />
              </p>
              <button>Join Now</button>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Journey;
