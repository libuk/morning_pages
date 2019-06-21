const program = require('commander');

program.option('-h', '--help', 'View help guide');

program.parse(process.argv);

if (program.help) console.log(`Input help screen`);
