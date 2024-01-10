import { useState } from "react"
import { copyEmail } from "../utilities/copyEmail"
import CopyNotification from "./CopyNotification"

function SocialMedia() {
	const [alert, setAlert] = useState(false)

	function toggleNotification() {
		copyEmail()
		setAlert(true)
		setTimeout(setAlert, 3000, false)
	}

	return (
		<div className="social-media-container">
			<div className="social-media-icon">
				<a
					href="https://github.com/MMadlos"
					target="_blank"
					rel="noreferrer noopener">
					<i className="fa-brands fa-github" />
				</a>
			</div>
			<div className="social-media-icon">
				<a
					href="https://www.linkedin.com/in/michaelmadlos/"
					target="_blank"
					rel="noreferrer noopener">
					<i className="fa-brands fa-linkedin" />
				</a>
			</div>
			<div className="social-media-icon">
				{alert && <CopyNotification />}
				<i
					className="fa-solid fa-envelope"
					onClick={toggleNotification}
				/>
			</div>
		</div>
	)
}

export default SocialMedia
