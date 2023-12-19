import stackLogos from "./stackLogos"

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

function Stack() {
	const { js, html, css, react, react_router, git, github, vite, webpack, vitest, jest, rtl, figma } = stackLogos

	return (
		<section className="about-content">
			<h2>My stack</h2>

			<div className="groups-container">
				<StackGroup name="Programming languages">
					<StackElement source={js} />
					<StackElement source={html} />
					<StackElement source={css} />
				</StackGroup>

				<StackGroup name="Libraries and Frameworks">
					<StackElement source={react} />
					<StackElement source={react_router} />
				</StackGroup>

				<StackGroup name="Test">
					<StackElement source={vitest} />
					<StackElement source={jest} />
					<StackElement source={rtl} />
				</StackGroup>

				<StackGroup name="Dev tools">
					<StackElement source={git} />
					<StackElement source={github} />
					<StackElement source={vite} />
					<StackElement source={webpack} />
				</StackGroup>

				<StackGroup name="Design">
					<StackElement source={figma} />
				</StackGroup>
			</div>
		</section>
	)
}

export default Stack
