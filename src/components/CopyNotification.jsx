import { useContext } from "react"
import { LanguageContext } from "../App"

const copyEmailText = {
	en: "Email copied",
	es: "Email copiado",
}

function CopyNotification() {
	const { contentLang } = useContext(LanguageContext)

	return (
		<div className="alert-copied blur-in-expand">
			<p>{copyEmailText[contentLang]}</p>
		</div>
	)
}

export default CopyNotification
