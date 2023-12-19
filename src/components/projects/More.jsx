import IMAGE from "../../assets/avatar_test.jpg"

const content = [
	{
		title: "Battleship",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida eleifend urna nec molestie. Cras non sem sodales velit dictum molestie.",
		src: IMAGE,
		alt: "",
		website: "#",
		github: "#",
	},
	{
		title: "To do list",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat rerum repudiandae culpa eum? Enim doloremque fugiat a alias placeat?        Accusantium, libero? Nam placeat mollitia quisquam id debitis reprehenderit quod labore. Nam placeat mollitia quisquam id debitis reprehenderit quod labore.",
		src: IMAGE,
		alt: "",
		website: "#",
		github: "#",
	},
	{
		title: "Card memory game",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat rerum repudiandae culpa eum? Enim doloremque fugiat a alias placeat?        Accusantium, libero? Nam placeat mollitia quisquam id debitis reprehenderit quod labore.",
		src: IMAGE,
		alt: "",
		website: "#",
		github: "#",
	},
]

function ProjectCard({ project }) {
	const { title, description, src, alt, website, github } = project
	return (
		<div className="project">
			<img
				src={src}
				alt={alt}
			/>
			<div className="content">
				<h2>{title}</h2>
				<p>{description}</p>
			</div>
			<div className="buttons">
				<a
					href={website}
					className="button main">
					Website <i className="fa-solid fa-arrow-up-right-from-square"></i>
				</a>
				<a
					href={github}
					className="button secondary">
					Github <i className="fa-solid fa-arrow-up-right-from-square"></i>
				</a>
			</div>
		</div>
	)
}

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
