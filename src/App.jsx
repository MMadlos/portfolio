import "./App.css"
import { useState, createContext } from "react"

import Header from "./components/header/Header"
import Projects from "./components/projects/Projects"
import About from "./components/about/About"
import Footer from "./components/footer/Footer"

export const LanguageContext = createContext({
	lang: "",
	switchedLang: "",
	setLang: () => {},
	handleLang: () => {},
})

function App() {
	const [lang, setLang] = useState("Castellano")

	const switchedLang = lang === "Castellano" ? "English" : "Castellano"
	const handleLang = () => setLang(switchedLang)

	return (
		<LanguageContext.Provider value={{ lang, switchedLang, setLang, handleLang }}>
			<Header />
			<Projects />
			<About />
			<Footer />
		</LanguageContext.Provider>
	)
}

export default App
