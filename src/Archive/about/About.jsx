import Personal from "./Personal"
import Faq from "./FAQ"
import Stack from "./Stack"

function About() {
	return (
		<section className="about">
			<Personal />
			<Stack />
			<Faq />
		</section>
	)
}

export default About
