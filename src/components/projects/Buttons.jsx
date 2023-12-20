function Buttons({ website, github }) {
	return (
		<div className="buttons-container">
			<a
				href={website}
				target="_blank"
				rel="noreferrer noopener"
				className="button main">
				Website <i className="fa-solid fa-arrow-up-right-from-square"></i>
			</a>
			<a
				href={github}
				target="_blank"
				rel="noreferrer noopener"
				className="button secondary">
				Github <i className="fa-solid fa-arrow-up-right-from-square"></i>
			</a>
		</div>
	)
}

export default Buttons
