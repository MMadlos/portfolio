import content from "./Content"
import ProjectCard from "./ProjectCard"

function More() {
	return (
		<section className="more-projects">
			<h1>More projects</h1>

			<div className="projects-container">
				{content.map((content, index) => {
					return (
						<ProjectCard
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
