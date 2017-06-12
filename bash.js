// console.log("global variable",process);
// console.log("obj.keys",Object.keys(process));


var commands = require('./commands');
// var userCommand = 'pwd';
// commands[userCommand]();
const chalk=require("chalk");
const prompt=chalk.blue("\nprompt >");



// Output a prompt
process.stdout.write(prompt);

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
    var cmd = data.toString().trim(); // remove the newline
    var flags="";
    if (cmd.indexOf(" ")>=0) {
        flags=cmd.slice(cmd.indexOf(" ")+1);
        cmd=cmd.slice(0,cmd.indexOf(" "));
        // console.log(cmd,flags);
    }
    
    process.stdout.write('You typed: ' + cmd+"\n");
    commands[cmd](flags);
    
    
    
    // if (cmd==="pwd") {
    //     process.stdout.write('\n\nYou typed: ' + cmd);
    //     process.stdout.write('\nprompt > ');
    // }
    
    // if (cmd==="date") {
    //     var now = new Date();
    //     process.stdout.write("Today's Date "+now);
    // }
    
    
    
    process.stdout.write(prompt);
    
    
    
});