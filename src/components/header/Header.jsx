import { useContext } from "react"
import { LanguageContext } from "../../App"
import Dropdown from "./Dropdown"
import SocialMedia from "../SocialMedia"

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

				<SocialMedia />
			</div>
		</header>
	)
}

export default Header
