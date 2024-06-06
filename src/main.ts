#! /usr/bin/env node

import { compile } from './compiler';

function printHelp() {
    console.log(`brainfucker 0.1.0
Luke White <luke_white@yahoo.com>
A Brainfuck interpreter written in Typescript

Usage: brainfucker [OPTIONS] <source_file>

Arguments:
    <source_file>  The source file name/filepath

Options:
    -h, --help            Print help`);
}


function main() {
    const args = process.argv;
    const fs = require('node:fs');
    
    const arg1: string = args[2];
    
    if (arg1 == "--help" || arg1 == "-h") {
        printHelp();
        return;
    }

    if (arg1 == undefined) {
        console.log("No args\n");
        printHelp();
        return;
    }
    
    const data = fs.readFileSync(arg1, 'utf-8');
    compile(data);
}


main();
