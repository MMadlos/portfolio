import { copyEmail } from "../../utilities/copyEmail"
import { useContext } from "react"
import { LanguageContext } from "../../App"

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

function Footer() {
	const { contentLang } = useContext(LanguageContext)
	const { nav, title, name, location } = content

	return (
		<footer>
			<a
				href="#"
				className="logo">
				MM
			</a>
			<div className="btm">
				<div className="btm-left">
					<div className="title-container">
						<h1>{title[contentLang]}</h1>
						<h2>{name}</h2>
					</div>
					<div className="contact-container">
						<p className="location">
							<i className="fa-solid fa-location-dot" />
							{location[contentLang]}
						</p>
						<div
							className="copy-email"
							onClick={() => copyEmail(contentLang)}>
							<p className="email">MichaelMadlos@gmail.com</p>
							<i className="fa-solid fa-copy"></i>
						</div>
					</div>
					<nav>
						<ul>
							<li>
								<a href="#">{nav.projects[contentLang]}</a>
							</li>
							<li>
								<a href="#">{nav.about[contentLang]}</a>
							</li>
						</ul>
					</nav>
				</div>

				<div className="btm-right">
					<a href="#">
						{" "}
						Github <i className="fa-solid fa-arrow-up-right-from-square"></i>
					</a>
					<a href="#">
						Linkedin <i className="fa-solid fa-arrow-up-right-from-square"></i>
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
