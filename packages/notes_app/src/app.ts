import yargs from 'yargs';

yargs.version('1.1.0');

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler() {
        console.log('Adding a new note');
    },
});

yargs.command({
    command: 'remove',
    describe: 'remove a note',
    handler: () => {
        console.log('Removing the note');
    },
});

yargs.command({
    command: 'read',
    describe: 'Show the note',
    handler: () => {
        console.log('Showing the note');
    },
});

yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: () => {
        console.log('List all notes');
    },
});

console.log(yargs.argv);
