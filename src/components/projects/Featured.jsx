import IMAGE from "../../assets/avatar_test.jpg"

function Featured() {
	return (
		<section className="featured-project">
			<div className="title">
				<h1>Featured project</h1>
				<h2>OSHOP</h2>
			</div>
			<img
				src={IMAGE}
				alt=""
			/>
			<p className="description">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida eleifend urna nec molestie. Cras non sem sodales velit dictum molestie.
			</p>

			<div className="btn-container">
				<a className="button main">
					Website <i className="fa-solid fa-arrow-up-right-from-square"></i>
				</a>
				<a className="button secondary">
					Github <i className="fa-solid fa-arrow-up-right-from-square"></i>
				</a>
			</div>
		</section>
	)
}

export default Featured
