#! /usr/bin/env node

const args = process.argv;
const fs = require('node:fs');

const sourceFile: string = args[2];

console.log('First argument:', sourceFile);

const data = fs.readFileSync(sourceFile, 'utf-8');
console.log(data);