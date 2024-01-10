function QAContainer({ question, children }) {
	return (
		<article className="question-container">
			<p className="question">{question}</p>
			<div className="answer">{children}</div>
		</article>
	)
}

function QAListEN() {
	return (
		<>
			<QAContainer question="¿Cómo aprendiste a programar?">
				<p>
					In <a href="#">The Odin Project</a>. An online platform that teaches by explaining concepts and by providing resources as you progress the course,
					rather than following a tutorial and copying the code.
				</p>
				<p>
					That way of teaching makes me feel that I've learnt to solve problems autonomously. The study path I've follow was the{" "}
					<strong>Full Stack JavaScript path</strong>.
				</p>
			</QAContainer>
			<QAContainer question="¿Por qué quieres iniciarte en el mundo del desarrollo?">
				<p>
					I have always been passionate about technology and I have been curious about development for a long, long time. I did related things, but in the end I
					put it off for various reasons. Thinking that I was not qualified because it was too difficult, or that it was too late for me, or that I could not
					learn it on my own are some of the reasons.
				</p>
				<p>I'm sure you know that feeling of losing track of time when you're having fun or when your concentration is at its highest. </p>
				<p>
					This is what happens to me when programming. I have realized that it motivates me so much that time flies by. Furthermore, I find it mentally
					stimulating and pushes me to keep learning. I love the feeling I get when I solve a problem and see that I get the result I was looking for.
				</p>
			</QAContainer>
			<QAContainer question={"¿Cómo te visualizas profesionalmente a largo plazo?"}>
				<p>
					Right now I'm focused on (1) putting into practice what I have learnt and (2) learning new things by facing challenges that you mostly find at work.
				</p>
				<p>
					I have realized that code is a fraction of development and I am fascinated by the whole process behind it. Before coding, there is a whole strategy
					that involves many people and many different disciplines.
				</p>
				<p>
					In the future, I would love to be part of all that machinery and be able to give voice and shape to that process. If a role had to be specified for
					this vision, I suppose it would be close to what a Product Manager / Product Owner would be.
				</p>
			</QAContainer>
		</>
	)
}

export default QAListEN
