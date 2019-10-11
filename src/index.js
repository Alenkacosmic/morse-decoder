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
    let sentence = [];

    for (let char = 0; char < expr.length; char +=10) {
        sentence.push(expr.slice(char, char+=10));
        
    }

    for (let word = 0; word < sentence.length; word++) {
        
        if (sentence[word] == '**********') {
            sentence[word] = ' ';
            break;
        } else {   
            sentence[word] = sentence[word].replace(/'00'/g, '');
            sentence[word] = sentence[word].replace(/'10'/g, '.');
            sentence[word] = sentence[word].replace(/'11'/g, '-');
            sentence[word] = MORSE_TABLE[sentence[word]];
        }
    }

    return sentence.join('')
    
     // write your solution here
}

module.exports = {
    decode
}