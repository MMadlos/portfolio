import AVATAR from "../../assets/avatar_test.jpg"
import { copyEmail } from "../../utilities/copyEmail"

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
						<strong>Self-taught Front-end developer with strong UX/UI skills.</strong> <br /> Love productivity apps.
					</span>
				</p>
			</div>
			<div className="social-media-container scroll-reveal">
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
					<a>
						<i
							className="fa-solid fa-envelope"
							onClick={copyEmail}
						/>
					</a>
				</div>
			</div>
		</section>
	)
}

export default Personal
