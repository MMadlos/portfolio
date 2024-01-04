import AVATAR from "../../assets/avatar_test.jpg"

function Personal() {
	return (
		<section className="about-content personal-info">
			<img
				src={AVATAR}
				alt="Picture of Michael Madlos"
			/>
			<div className="description scroll-reveal">
				<h2>
					<span>Michael Madlos</span>
				</h2>

				<p>
					<span>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida eleifend urna nec molestie. Cras non sem sodales velit dictum molestie.
					</span>
				</p>
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
		</section>
	)
}

export default Personal
