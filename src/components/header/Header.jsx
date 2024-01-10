import { copyEmail } from "../../utilities/copyEmail"
import { useContext } from "react"
import { LanguageContext } from "../../App"
import Dropdown from "./Dropdown"

const content = {
	nav: {
		projects: {
			en: "Projects",
			es: "Proyectos",
		},
		about: {
			en: "About",
			es: "Sobre mi",
		},
	},
	title: {
		en: "Front End developer",
		es: "Desarrollador Front End",
	},
	name: "Michael Madlos",
	location: {
		en: "Barcelona, Spain",
		es: "Barcelona, España",
	},
}

function Header() {
	const { contentLang } = useContext(LanguageContext)

	const { nav, title, name, location } = content

	return (
		<header>
			<nav>
				<a href="#">
					<p className="logo">MM</p>
				</a>
				<ul>
					<li>
						<a href="#">{nav.projects[contentLang]}</a>
					</li>
					<li>
						<a href="#">{nav.about[contentLang]}</a>
					</li>
					<li>
						<Dropdown />
					</li>
				</ul>
			</nav>

			<div className="btm-container">
				<div className="description">
					<h1>{title[contentLang]}</h1>
					<div className="name">
						<h2>{name}</h2>
						<p>
							<i className="fa-solid fa-location-dot" />
							{location[contentLang]}
						</p>
					</div>
				</div>

				<div className="social-media-container">
					<div className="social-media-icon">
						<a
							href="https://github.com/MMadlos"
							target="_blank"
							rel="noreferrer noopener">
							<i className="fa-brands fa-github" />
						</a>
					</div>
					<div className="social-media-icon">
						<a
							href="https://www.linkedin.com/in/michaelmadlos/"
							target="_blank"
							rel="noreferrer noopener">
							<i className="fa-brands fa-linkedin" />
						</a>
					</div>
					<div className="social-media-icon">
						<i
							className="fa-solid fa-envelope"
							onClick={() => copyEmail(contentLang)}
						/>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
