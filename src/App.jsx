const NAME = "Himani Mishra";

const element = (
	<div className="container border">
		<h1 className="border">{NAME}</h1>
		<img className="border" src="https://static-beautyhigh.stylecaster.com/2014/05/477973067.jpg" width="300px" />
		<p>A Fullstack Web Developer from San Diego. International Graduate Student at San Diego State University pursuing Masters in Computer Science with an expected graduation date of May 2023. Actively seeking internships in Software Development for Summer 2022.</p>
		<a href="https://github.com/himani-sdsu" target="_blank">
			<button className="border"><h3>VIEW MY GITHUB REPO</h3></button>
		</a>
	</div>
);

ReactDOM.render(element, document.getElementById('root'));