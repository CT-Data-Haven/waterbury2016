import React from 'react';
import { Alert } from 'react-bootstrap';

const text = 'Select a topic and indicator to view either a map or a chart. Clicking a zip code on the map or chart will bring up detailed information on that zip code. See all zip codes in the table below.';

const Intro = () => (
	<div className="Intro">
		<h1>Waterbury Zip Code Profiles, 2016</h1>
		<Alert bsStyle="info">
			<p>{text}</p>
			<p>For more information on Connecticut's communities and cities, visit DataHaven's <a href="http://www.ctdatahaven.org/communities">Communities</a> page or <a href="http://www.ctdatahaven.org">main website</a>.</p>
		</Alert>
	</div>
);

export default Intro;
