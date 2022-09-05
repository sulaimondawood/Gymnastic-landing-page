import "./App.css";
import Hero from "./components/hero/Hero";
import Program from "./components/program/Program";
import Reason from "./components/reason/Reason";
import Journey from "./components/journey/Journey";
import Testimonials from "./components/testimonials/Testimonials";
import Level from "./components/level/Level";
// import Program from "./components/program/Program";
function App() {
	return (
		<div className="App">
			<Hero />
			<Program />
			<Reason />
			<Journey />
			<Testimonials />
			<Level />
		</div>
	);
}

export default App;
