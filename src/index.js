const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
       
    let sentence = '';
    let word = '';

    for (let char = 0; char + 10 <= expr.length; char += 10) {
        let element = expr.substr(char, 10);

        if (element.includes('*')){
            sentence += ' ';

        } else {

            for (let num = 0; num + 2 <= element.length; num += 2) { 
                let letter = element.substr(num, 2);

                if (letter == '10'){
                    word += '.';
                } else if (letter == '11'){
                    word += '-';
                }
            }
            sentence += MORSE_TABLE[word];
        }

    }

    return sentence;
    
     // write your solution here
}

module.exports = {
    decode
}