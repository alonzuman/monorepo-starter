import React from "react";
import a from "a";
import { Button } from "shared/dist";

const HomePage = () => {
	return (
		<div>
			HomePage: <h1>{a()}</h1>
			<Button>Hi</Button>
		</div>
	);
};

export default HomePage;
