import { stackLogos } from "./stackLogos"
import { useContext } from "react"
import { LanguageContext } from "../../App"

function StackGroup({ name, children }) {
	return (
		<div className="stack-container">
			<h3>{name}</h3>
			<div className="stack-group">{children}</div>
		</div>
	)
}

function StackElement({ source }) {
	const { src, alt, text } = source

	return (
		<div className="stack">
			<img
				src={src}
				alt={alt}
			/>
			<p>{text}</p>
		</div>
	)
}

const content = {
	title: {
		en: "My stack",
		es: "Mi stack",
	},
	languages: {
		en: "Programming languages",
		es: "Lenguajes de programación",
	},
	libraries: {
		en: "Libraries and frameworks",
		es: "Librerías y frameworks",
	},
	test: {
		en: "Test",
		es: "Test",
	},
	tools: {
		en: "Dev tools",
		es: "Herramientas de desarrollo",
	},
	design: {
		en: "Design",
		es: "Diseño",
	},
}

function Stack() {
	const { js, html, css, react, react_router, git, github, vite, webpack, vitest, jest, rtl, figma } = stackLogos

	const { contentLang } = useContext(LanguageContext)

	return (
		<section className="about-content">
			<h2>{content.title[contentLang]}</h2>

			<div className="groups-container">
				<StackGroup name={content.languages[contentLang]}>
					<StackElement source={js} />
					<StackElement source={html} />
					<StackElement source={css} />
				</StackGroup>

				<StackGroup name={content.libraries[contentLang]}>
					<StackElement source={react} />
					<StackElement source={react_router} />
				</StackGroup>

				<StackGroup name={content.test[contentLang]}>
					<StackElement source={vitest} />
					<StackElement source={jest} />
					<StackElement source={rtl} />
				</StackGroup>

				<StackGroup name={content.tools[contentLang]}>
					<StackElement source={git} />
					<StackElement source={github} />
					<StackElement source={vite} />
					<StackElement source={webpack} />
				</StackGroup>

				<StackGroup name={content.design[contentLang]}>
					<StackElement source={figma} />
				</StackGroup>
			</div>
		</section>
	)
}

export default Stack
