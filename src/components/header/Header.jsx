function Header() {
	return (
		<header>
			<nav>
				<a href="#">
					<p className="logo">MM</p>
				</a>
				<ul>
					<li>
						<a href="#">Projects</a>
					</li>
					<li>
						<a href="#">About</a>
					</li>
				</ul>
			</nav>

			<div className="btm-container">
				<div className="description">
					<h1>
						Front end <br />
						developer
					</h1>
					<div className="name">
						<h2>Michael Madlos</h2>
						<p>Barcelona, Spain</p>
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
						<a
							href="#"
							target="_blank"
							rel="noreferrer noopener">
							<i className="fa-solid fa-envelope" />
						</a>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
