import Buttons from "./Buttons"

function ProjectCard({ project, lang = "en" }) {
	const { title, description, src, alt, website, github } = project
	return (
		<div className="project">
			<img
				src={src}
				alt={alt}
			/>
			<div className="content">
				<h2>{title[lang]}</h2>
				<p>{description[lang]}</p>
			</div>
			<Buttons
				website={website}
				github={github}
			/>
		</div>
	)
}

export default ProjectCard
