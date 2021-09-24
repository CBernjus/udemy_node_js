/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const base = require('./jest.config.base');

module.exports = {
    ...base,
    roots: ['<rootDir>'],
    projects: ['<rootDir>/packages/notes_app'],
};
