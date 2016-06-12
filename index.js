// Commander Docs: https://github.com/tj/commander.js

const program = require('commander');
const listMeetups = require('./app/commands/listMeetups');

program
    .version('0.0.1')
    .description('supporting tools for the meetup group JavaScript Coding Nights')

program
    .command('list-meetups')
    .description('show list of meetups')
    .action(listMeetups)

program.parse(process.argv);
