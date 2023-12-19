import "./Header.css"

function Header() {
	return (
		<header>
			<nav>
				<p className="logo">MM</p>

				<ul>
					<li>Projects</li>
					<li>About</li>
				</ul>
			</nav>

			<div className="btm-container">
				<div className="description">
					<h1>Front end developer</h1>
					<div className="name">
						<h2>Michael Madlos</h2>
						<p>Barcelona, Spain</p>
					</div>
				</div>
				<div className="social-media-container">
					<div className="social-media-icon">
						<a href="#">
							<i className="fa-brands fa-github" />
						</a>
					</div>
					<div className="social-media-icon">
						<a href="#">
							<i className="fa-brands fa-linkedin" />
						</a>
					</div>
					<div className="social-media-icon">
						<a href="#">
							<i className="fa-solid fa-envelope" />
						</a>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
