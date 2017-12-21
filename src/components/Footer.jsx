import React from 'react';

const text = 'Source: DataHaven analysis (2017) of US Census Bureau American Community Survey 2016 5-year estimates.';

const Footer = () => (
	<div className="Footer">
		<p>{text}</p>
		<p><a href="https://github.com/camille-s/waterbury2016/blob/master/public/data/2016_wby_display.csv">Download all Waterbury 2016 profile data</a></p>
	</div>
);

export default Footer;
