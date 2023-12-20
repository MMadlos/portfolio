import IMAGE from "../../assets/avatar_test.jpg"
import Buttons from "./Buttons"

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

			<Buttons
				website="https://online-shop-brown-two.vercel.app/"
				github="https://github.com/MMadlos/online-shop"
			/>
		</section>
	)
}

export default Featured
