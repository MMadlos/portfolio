import { useState, useContext } from "react"
import { LanguageContext } from "../../App"

function Dropdown() {
	const { lang, switchedLang, handleLang } = useContext(LanguageContext)
	const [isOpen, setIsOpen] = useState(false)

	const handleOpen = () => setIsOpen(!isOpen)
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
			<div className={"dropdown-options"}>
				<button
					onClick={isOpen ? switchLang : undefined}
					className={isOpen ? "dropdown-fade-in" : "dropdown-fade-out"}>
					{switchedLang}
				</button>
			</div>
		</div>
	)
}

export default Dropdown
