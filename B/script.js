var fs = require('fs');
var lines = fs.readFileSync('input.txt', "utf8").split("\r\n");
var max = 0;
var current = 0;
var result;

for(var i = 1; i < lines.length; i++) {
	if(Number(lines[i]) === 1) {
    	current++;
    	if(current >= max) {
            max = current;
       	}
    } else {
        current = 0;
    }
}

result = max > current ? max : current;

fs.appendFileSync('output.txt', result.toString());