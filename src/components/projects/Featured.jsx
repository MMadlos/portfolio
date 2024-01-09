import IMAGE from "../../assets/avatar_test.jpg"
import Buttons from "./Buttons"

import { useContext } from "react"
import { LanguageContext } from "../../App"

function ImageComposition() {
	return (
		<div className="main-container">
			<div className="left">
				<img
					src={IMAGE}
					alt=""
				/>
				<img
					src={IMAGE}
					alt=""
				/>
			</div>
			<div className="center">
				<img
					src={IMAGE}
					alt=""
				/>
			</div>
			<div className="right">
				<div className="top">
					<img
						src={IMAGE}
						alt=""
					/>
					<img
						src={IMAGE}
						alt=""
					/>
				</div>
				<div className="btm">
					<img
						src={IMAGE}
						alt=""
					/>
				</div>
			</div>
		</div>
	)
}

const content = {
	sectionName: {
		en: "Featured project",
		es: "Proyecto destacado",
	},
	description: {
		en: "My most complete use of React. It includes React Router, React Testing library and the API is from fakestore.com",
		es: "Proyecto en el que recopila todo lo aprendido de React. Incluye el uso de React Router, React Testing Library y la API es de fakestore.com.",
	},
}

function Featured() {
	const { contentLang } = useContext(LanguageContext)
	const { sectionName, description } = content

	return (
		<section className="featured-project">
			<div className="title">
				<h1>{sectionName[contentLang]}</h1>
				<h2>OSHOP</h2>
			</div>
			<ImageComposition />
			<p className="description">{description[contentLang]}</p>

			<Buttons
				website="https://online-shop-brown-two.vercel.app/"
				github="https://github.com/MMadlos/online-shop"
			/>
		</section>
	)
}

export default Featured
