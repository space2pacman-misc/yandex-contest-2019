var fs = require('fs');
var lines = fs.readFileSync('input.txt', "utf8").split("\r\n");
var result = "";

//slines.splice(0, 1);

for(var i = 1; i < lines.length; i++) {
	result += lines[i].slice(1)
}

//result = result.split(" ").sort((a, b) => a-b).splice(1);

result = gnomeSort(result.split(" "));

function gnomeSort(arr) {
    var l = arr.length;
    var i = 1;
    while (i < l) {
        if (i > 0 && Number(arr[i - 1]) > Number(arr[i])) {
            [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
            i--;
        } else {
            i++;
        }
    }
    return arr.splice(1);
};

fs.appendFileSync('output.txt', result.join(" "));