process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch(instruction) {
            case '/exit': {
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            }
            case '/lang': {
                process.stdout.write('Your system language symbol is: ' + process.env.LANG + '\n');
                break;
            }
            case '/version': {
                process.stdout.write('Your Node.JS version is: ' + process.versions.node + '\n');
                break;
            }
            default: {
                process.stdout.write('Wrong instruction!\n');
            }
        };
    }
});