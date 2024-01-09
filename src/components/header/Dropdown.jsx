import { useState } from "react"

function Dropdown() {
	const [lang, setLang] = useState("Castellano")
	const [isOpen, setIsOpen] = useState(false)

	const switchedLang = lang === "Castellano" ? "English" : "Castellano"

	const handleOpen = () => setIsOpen(!isOpen)
	const handleLang = () => setLang(switchedLang)
	const switchLang = () => {
		handleOpen()
		handleLang()
	}

	return (
		<div className="dropdown">
			<button onClick={handleOpen}>
				{lang} <i className="fa-solid fa-chevron-down" />
			</button>
			<div
				data-is-Open={isOpen}
				className="dropdown-options">
				<button onClick={switchLang}>{switchedLang}</button>
			</div>
		</div>
	)
}

export default Dropdown
