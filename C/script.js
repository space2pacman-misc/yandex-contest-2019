var fs = require('fs');
var numbers = fs.readFileSync('input.txt', "utf8").split("\n");
var result = [];

for(var i = 1; i < numbers.length; i++) {
   	if(numbers[i] != numbers[i + 1]) {
		result.push(numbers[i]);
	}
}

fs.appendFileSync('output.txt', result.join("\n"));