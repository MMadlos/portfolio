import IMAGE from "../../assets/avatar_test.jpg"

function More() {
	return (
		<section className="more-projects">
			<h1>More projects</h1>
			<div className="projects-container">
				<div className="project">
					<img
						src={IMAGE}
						alt=""
					/>
					<div className="content">
						<h2>Battleship</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida eleifend urna nec molestie. Cras non sem sodales velit dictum molestie.</p>
					</div>
					<div className="buttons">
						<a className="button main">
							Website <i className="fa-solid fa-arrow-up-right-from-square"></i>
						</a>
						<a className="button secondary">
							Github <i className="fa-solid fa-arrow-up-right-from-square"></i>
						</a>
					</div>
				</div>
				<div className="project">
					<img
						src={IMAGE}
						alt=""
					/>
					<div className="content">
						<h2>To do List</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat rerum repudiandae culpa eum? Enim doloremque fugiat a alias placeat?
							Accusantium, libero? Nam placeat mollitia quisquam id debitis reprehenderit quod labore. Nam placeat mollitia quisquam id debitis reprehenderit
							quod labore.
						</p>
					</div>
					<div className="buttons">
						<a className="button main">
							Website <i className="fa-solid fa-arrow-up-right-from-square"></i>
						</a>
						<a className="button secondary">
							Github <i className="fa-solid fa-arrow-up-right-from-square"></i>
						</a>
					</div>
				</div>
				<div className="project">
					<img
						src={IMAGE}
						alt=""
					/>
					<div className="content">
						<h2>Card memory game</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat rerum repudiandae culpa eum? Enim doloremque fugiat a alias placeat?
							Accusantium, libero? Nam placeat mollitia quisquam id debitis reprehenderit quod labore.
						</p>
					</div>
					<div className="buttons">
						<a className="button main">
							Website <i className="fa-solid fa-arrow-up-right-from-square"></i>
						</a>
						<a className="button secondary">
							Github <i className="fa-solid fa-arrow-up-right-from-square"></i>
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default More
