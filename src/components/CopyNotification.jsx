const copyEmailText = {
	en: "Email copied",
	es: "Email copiado",
}

function CopyNotification({ lang }) {
	return (
		<div className="alert-copied blur-in-expand">
			<p>{copyEmailText[lang]}</p>
		</div>
	)
}

export default CopyNotification
