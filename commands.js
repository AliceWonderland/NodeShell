module.exports = {
    pwd: function() {
        // pwd code
        process.stdout.write("My current directory is "+ process.cwd());
    },
    date: function () {
        var now = new Date();
        process.stdout.write("Today's Date is "+now);
        
    },
    ls: function () {
        var fs = require('fs');
        fs.readdir('.', function(err, files) {
            if (err) throw err;
            files.forEach(function(file) {
                process.stdout.write(file.toString() + "\n");
            })
            process.stdout.write("prompt > ");
        });
    },
    echo: function (args) {
        process.stdout.write(args);
    },
    cat: function (args) {
        // returns the contents of a file
        var fs = require('fs');
        fs.readFile(args, (err, data) => {
            if (err) throw err;
            process.stdout.write(data+"\n");
            process.stdout.write("prompt > ");
        });
    },
    head: function (args) {
        // returns first N lines
        var fs = require('fs');
        fs.readFile(args, (err, data) => {
            if (err) throw err;
            var arr=data.toString().split("\n");
            var output="";
            for(var i=0;i<3;i++){
                output+=arr[i]+"\n";
            }
            
            process.stdout.write(output);
            process.stdout.write("prompt > ");
        });
    },
    tail: function (args) {
        // returns last N lines
        var fs = require('fs');
        fs.readFile(args, (err, data) => {
            if (err) throw err;
            var arr=data.toString().split("\n");
            var output="";
            for(var i=arr.length-3;i<arr.length;i++){
                output+=arr[i]+"\n";
            }
        
            process.stdout.write(output);
            process.stdout.write("prompt > ");
        });
    },
    sort: function (args) {
        var fs = require('fs');
        fs.readFile(args, (err, data) => {
            if (err) throw err;
            var arr=data.toString().split("\n");
            process.stdout.write(arr.sort().join("\n").toString()+"\n");
            process.stdout.write("prompt > ");
        });
    },
    wc: function (args) {
        // returns numlines
        var fs = require('fs');
        fs.readFile(args, (err, data) => {
            if (err) throw err;
            var arr=data.toString().split("\n");
            process.stdout.write(arr.length.toString()+"\n");
            process.stdout.write("prompt > ");
        });
    },
    uniq: function () {
        // sort to remove duplicate lines
    }
}

