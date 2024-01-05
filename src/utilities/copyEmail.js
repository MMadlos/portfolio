async function copyEmail() {
	const email = "michaelmadlos@gmail.com"

	await navigator.clipboard.writeText(email)

	// TODO -> Animación para indicar que el texto se ha copiado
	alert("Email copied")
}

export { copyEmail }
