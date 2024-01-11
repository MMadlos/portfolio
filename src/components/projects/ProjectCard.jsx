import Buttons from "./Buttons"

function ProjectCard({ project, lang = "en" }) {
	const { title, description, src, alt, website, github } = project
	return (
		<article className="project">
			<img
				src={src}
				alt={alt}
			/>
			<div className="content-container">
				<h2 className="project-title">{title[lang]}</h2>
				<p className="project-description">{description[lang]}</p>
			</div>
			<Buttons
				website={website}
				github={github}
			/>
		</article>
	)
}

export default ProjectCard
