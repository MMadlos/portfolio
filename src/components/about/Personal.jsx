import AVATAR from "../../assets/avatar_test.jpg"

import { useContext } from "react"
import { LanguageContext } from "../../App"
import SocialMedia from "../SocialMedia"

const content = {
	description: {
		en: "Self-taught Front-end developer with strong UX/UI skills. Love productivity apps.",
		es: "Castellano - lorem",
	},
}

function Personal() {
	const { contentLang } = useContext(LanguageContext)

	return (
		<section className="about-content personal-info">
			<img
				src={AVATAR}
				alt="Picture of Michael Madlos"
			/>
			<div className="description scroll-reveal">
				<h2>
					<span>Michael Madlos</span>
				</h2>

				<p>
					<span>{content.description[contentLang]}</span>
				</p>
			</div>
			<SocialMedia />
		</section>
	)
}

export default Personal
