function QAContainer({ question, children }) {
	return (
		<article className="question-container">
			<p className="question">{question}</p>
			<div className="answer">{children}</div>
		</article>
	)
}

function Faq() {
	return (
		<section className="about-content faq">
			<h2>FAQ</h2>

			<QAContainer question="¿Cómo aprendiste a programar?">
				<p>
					En <a href="#">The Odin Project</a>. Es una plataforma online en la que su forma de enseñar se basa en explicar los conceptos y en darte recursos a
					medida que avanzas en cada proyecto.
				</p>
				<p>
					Al no basarse en “tutoriales” de copiar el código, siento que he asentado mejor los conocimientos y que he aprendido a resolver problemas de forma
					autónoma. La guía de estudio que he seguido ha sido el de <strong>Full Stack JavaScript</strong>.
				</p>
			</QAContainer>
			<QAContainer question="¿Por qué quieres iniciarte en el mundo del desarrollo?">
				<p>
					Siempre me ha apasionado la tecnología y hace mucho mucho tiempo que tenía curiosidad por el desarrollo. Hice cosas relacionadas, pero al final lo he
					ido postergando por varios motivos. Entre ellos: el pensar que no estaba capacitado porque era muy difícil, o que ya era tarde para mi, o que no podía
					aprender por mi cuenta.
				</p>
				<p>Estoy seguro de que conoces esa sensación de perder la noción del tiempo cuando estás divirtiéndote o cuando tu concentración es máxima. </p>
				<p>
					Es lo que me pasa al programar. Me he dado cuenta que me motiva tanto que se me pasa el tiempo volando. Además, mentalmente me parece muy estimulante
					y hace que quiera seguir aprendiendo. Me encanta la sensación que tengo al descrifrar un problema y ver que consigo el resultado que buscaba.
				</p>
			</QAContainer>
			<QAContainer question={"¿Cómo te visualizas profesionalmente a largo plazo?"}>
				<p>
					Ahora mismo estoy centrado en (1) poner en práctica lo que he aprendido y (2) en aprender cosas nuevas enfrentándome a retos que sólo te encuentras en
					el mundo laboral.
				</p>
				<p>
					Me he dado cuenta de que el código es una fracción del desarrollo. Me fascina todo el proceso que hay detrás. Antes de picar código, hay toda una
					estrategia que involucra a mucha gente y a muchas disciplinas distintas. En un futuro, me encantaría formar parte de todo ese engranaje y poder dar
					voz y forma a ese proceso. Si hubiese que concretar un rol a esta visión, supongo que se acercaría a lo que sería un Product Manager / Product Owner.
				</p>
			</QAContainer>
		</section>
	)
}

export default Faq
