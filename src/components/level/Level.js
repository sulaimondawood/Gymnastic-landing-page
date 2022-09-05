import "./Level.css";
import Github from "../../assets/github.png";
import LinkedIn from "../../assets/linkedin.png";
import Instagram from "../../assets/instagram.png";
import Logo from "../../assets/logo.png";
export default function Level() {
	return (
		<main className="footer-main">
			<section className="level-section container">
				<div className="left">
					<p>
						<span className="stroke">READY TO</span>
						<span>LEVEL UP YOUR BODY</span> <span className="stroke">WITH US?</span>
					</p>
				</div>
				<div className="right">
					<form action="">
						<input type="email" placeholder="Enter Your Email Address" />
						<button>Join Now</button>
					</form>
				</div>
			</section>
			<div className="footer">
				<div className="footer-img-container">
					<img src={Github} alt="" />
					<img src={Instagram} alt="" />
					<img src={LinkedIn} alt="" />
				</div>
				<img src={Logo} alt="" />
			</div>
			{/* <div className="blur-circle height"></div> */}
		</main>
	);
}
