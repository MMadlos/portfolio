function Footer() {
	return (
		<footer>
			<a href="#">
				<p className="logo">MM</p>
			</a>
			<div className="btm">
				<div className="btm-left">
					<div className="title-container">
						<h1>Front end Developer</h1>
						<h2>Michael Madlos</h2>
					</div>
					<div className="contact-container">
						<p>Barcelona, Spain</p>
						<p>MichaelMadlos@gmail.com</p>
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
					<a href="#"> Github</a>
					<a href="#">Linkedin</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
