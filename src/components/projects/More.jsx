import { useContext } from "react"
import { LanguageContext } from "../../App"

import content from "./Content"
import ProjectCard from "./ProjectCard"

const title = {
	es: "Más proyectos",
	en: "More projects",
}

function More() {
	const { contentLang } = useContext(LanguageContext)

	return (
		<section className="more-projects">
			<h1>{title[contentLang]}</h1>

			<div className="projects-container">
				{content.map((content, index) => {
					return (
						<ProjectCard
							lang={contentLang}
							key={index}
							project={content}
						/>
					)
				})}
			</div>
		</section>
	)
}

export default More
