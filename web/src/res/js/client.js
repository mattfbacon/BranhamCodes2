'use strict';

const get_problems = function() {
	const xmlhttp = new XMLHttpRequest();
	let string;
	xmlhttp.open('GET', '/user_problems', true);
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
			string = xmlhttp.responseText;
			const problems = JSON.parse(string);
			localStorage.setItem('problems', problems);
		}
	};
	xmlhttp.send();
};

if (localStorage.getItem('problems') === null) {
	get_problems();
};
