import React, { Suspense, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Settings from "settings/Settings";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<h1>Host</h1>
			<h2>Remotes:</h2>
			<div style={{border: "1px solid red"}}>
			<Suspense fallback={<div>Loading...</div>}>
				<Settings />
			</Suspense>
			</div>
		</div>
	);
}

export default App;
