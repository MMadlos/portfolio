async function copyEmail() {
	const email = "michaelmadlos@gmail.com"
	await navigator.clipboard.writeText(email)
}

export { copyEmail }
