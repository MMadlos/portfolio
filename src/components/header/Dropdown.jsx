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

	const chevronDirection = isOpen ? "fa-chevron-up" : "fa-chevron-down"

	return (
		<div className="dropdown">
			<button onClick={handleOpen}>
				{lang} <i className={`fa-solid ${chevronDirection}`} />
			</button>
			<div
				className="dropdown-options"
				data-is-open={isOpen}>
				<button onClick={isOpen && switchLang}>{switchedLang}</button>
			</div>
		</div>
	)
}

export default Dropdown
