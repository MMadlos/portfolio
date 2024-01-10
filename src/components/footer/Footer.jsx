import { copyEmail } from "../../utilities/copyEmail"
import { useContext } from "react"
import { LanguageContext } from "../../App"

function Footer() {
	const { contentLang } = useContext(LanguageContext)

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
						<h1>Front end Developer</h1>
						<h2>Michael Madlos</h2>
					</div>
					<div className="contact-container">
						<p>Barcelona, Spain</p>
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
								<a href="#">Projects</a>
							</li>
							<li>
								<a href="#">About</a>
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
