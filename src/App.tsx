import { Component } from "react";
import { Flex } from "./pages/Flex";
import ReduxPage from "./pages/ReduxPage";
import "./style/App.css"

export class App extends Component {
	render() {
		return (
			<div className="App">
				App.tsx
				<ReduxPage />
				{/* <div><Flex /></div> */}
			</div >
		);
	}
}