const fs = require('fs');

const getRandomInt = (max) => {
	return Math.floor(Math.random() * max);
};
const prng = (numbers, trials) => {
	const frequency = {};
	const probability = {};
	const output = [];

	for (let i = 0; i < trials; i++) {
		const randomInt = getRandomInt(numbers);
		if (frequency[randomInt] == null) {
			frequency[randomInt] = 0;
		}
		frequency[randomInt] += 1;
	}

	for (const number in Object.keys(frequency)) {
		probability[number] = frequency[number] / trials;
		output.push(`${number}:${probability[number]}`);
	}

	const filename = `js_${numbers}_${trials}`;
	const outputString = output.join('\n');

	writeOutputToFile(filename, outputString);
};
const writeOutputToFile = (filename, content) => {
	try {
		fs.writeFileSync(filename, content);
	} catch (err) {
		console.error(err);
	}
};
const main = (() => {
	prng(10, 1000000);
	prng(1000, 1000000);
	prng(10, 1000000000);
})();
