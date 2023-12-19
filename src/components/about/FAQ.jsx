import { faq_list } from "./FAQ_list"

function FaqContainer({ question, answer }) {
	return (
		<div className="question-container">
			<p className="question">{question}</p>
			<p className="answer">{answer}</p>
		</div>
	)
}

function Faq() {
	return (
		<section className="about-content faq">
			<h2>FAQ</h2>

			{faq_list.map((faq, index) => {
				const { question, answer } = faq

				return (
					<FaqContainer
						key={index}
						question={question}
						answer={answer}
					/>
				)
			})}
		</section>
	)
}

export default Faq
