import React from 'react';

const text = 'Select a topic and indicator to view either a map or a chart. Clicking a zip code on the map or chart will bring up detailed information on that zip code. See all zip codes in the table below.';

const Intro = () => (
	<div className="Intro">
		<h1>Waterbury Zip Code Profiles, 2016</h1>
		<p>{text}</p>
	</div>
);

export default Intro;
