import ReactDOM from "react-dom";

const Popup = () => {
	return (
		<div>
			<h1>Hello from Chrome Extension Popup</h1>
			<button type="button" onClick={() => alert("Button clicked!")}>
				Click me
			</button>
		</div>
	);
};

ReactDOM.render(<Popup />, document.getElementById("popup-root"));
