async function copyEmail(contentLang) {
	const email = "michaelmadlos@gmail.com"
	await navigator.clipboard.writeText(email)

	// TODO -> Animación para indicar que el texto se ha copiado
	const copyEmailText = {
		en: "Email copied",
		es: "Email copiado",
	}

	alert(copyEmailText[contentLang])
}

export { copyEmail }
