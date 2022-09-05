import "./Program.css";
// import prog"../../data/programsData";
import Arrow from "../../assets/rightArrow.png";
// import Running from "../../assets/runing.png";
import { programsData } from "../../data/programsData";

export default function Program() {
	return (
		<section className="program">
			<h1 className="program-title">
				<span className="stroke">EXPLORE OUR</span>PROGRAMS
				<span className="stroke">TO SHAPE YOU</span>
			</h1>
			<div className="row container">
				{programsData.map((data) => {
					const { image, heading, details } = data;
					return (
						<div className="col">
							<p className="program-img">{image}</p>
							<p>{heading}</p>
							<p>{details}</p>
							<button>
								Join Now <img src={Arrow} alt="" />
							</button>
						</div>
					);
				})}
			</div>
		</section>
	);
}
