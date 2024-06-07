class Interpreter {
    currentToken: number;
    pointer: number;
    values: number[];
    whileIndexes: number[];

    constructor() {
        this.currentToken = 0;
        this.pointer = 0;
        this.values = [0];
        this.whileIndexes = [];
    }

    interpret(source: string) {
        while (this.currentToken != source.length) {
            if (source[this.currentToken] == ">") { this.runPointerInc(); }
            else if (source[this.currentToken] == "<") { this.runPointerDec(); }
            else if (source[this.currentToken] == "+") { this.runValueInc(); }
            else if (source[this.currentToken] == "-") { this.runValueDec(); }
            else if (source[this.currentToken] == ",") { this.runGetChar(); }
            else if (source[this.currentToken] == ".") { this.runPutChar(); }
            else if (source[this.currentToken] == "[") { this.runWhile(); }
            else if (source[this.currentToken] == "]") { this.runCheckWhile(); }

            this.currentToken++;
        }
    }

    runPointerInc() {
        this.pointer++;
        if (this.pointer == this.values.length) {
            this.values.push(0);
        }
    }

    runPointerDec() {
        if (this.pointer != 0) {
            this.pointer--;
        }
    }

    runValueInc() {
        this.values[this.pointer]++;
    }

    runValueDec() {
        if (this.values[this.pointer] != 0) {
            this.values[this.pointer]--;
        }
    }

    runWhile() {
        this.whileIndexes.push(this.currentToken);
    }

    runCheckWhile() {
        if (this.values[this.pointer] != 0) {
            this.currentToken = this.whileIndexes[this.whileIndexes.length - 1];
        } else {
            this.whileIndexes.pop();
        }
    }

    runGetChar() {

    }

    runPutChar() {
        const char = String.fromCharCode(this.values[this.pointer]);
        process.stdout.write(char);
    }
}



export function interpret(source: string) {
    let interpreter: Interpreter = new Interpreter();
    interpreter.interpret(source);
}