#! /usr/bin/env node

import { interpret } from './interpreter';

const logger = require('node-color-log');
const fs = require('node:fs');

function printHelp() {
    logger.log(`brainfucker 0.1.0
Luke White <luke_white@yahoo.com>
A Brainfuck interpreter written in Typescript

Usage: brainfucker [-h|--help] <source_file> [-d|--dump]

Arguments:
    <source_file>  The source file name/filepath

Options:
    -h, --help     Print help
    -d  --dump     Log contents of all cells`);
}


function main() {
    const args = process.argv;

    const arg1: string = args[2];
    const arg2: string = args[3];

    let dumpValues: boolean = false;

    if (arg1 == "--help" || arg1 == "-h") {
        printHelp();
        return;
    }

    if (arg1 == undefined) {
        logger.color('red').log("No args\n");
        printHelp();
        return;
    }

    if (!fs.existsSync(arg1)) {
        logger.color('red').log("File does not exist");
        return;
    }

    if (arg2 == "-d" || arg2 == "--dump") {
        dumpValues = true;
    }

    const data = fs.readFileSync(arg1, 'utf-8');
    interpret(data, dumpValues);
}


main();
