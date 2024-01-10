import QAListES from "./QAListES"
import QAListEN from "./QAListEN"

import { useContext } from "react"
import { LanguageContext } from "../../App"

function Faq() {
	const { contentLang } = useContext(LanguageContext)
	return (
		<section className="about-content faq">
			<h2>FAQ</h2>
			{contentLang === "es" ? <QAListES /> : <QAListEN />}
		</section>
	)
}

export default Faq
