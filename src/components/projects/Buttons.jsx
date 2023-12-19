function Buttons(website = "#", github = "#") {
	return (
		<div className="buttons-container">
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
	)
}

export default Buttons
