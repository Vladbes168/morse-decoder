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
    '**********': ' ',
};

function decode(expr) {
    // write your solution here
   const objValues = Object.entries(MORSE_TABLE)
    const chunks = []
    const cutChar = []
    const result = []
    for(let i = 0; i < expr.length; i += 10) {
        chunks.push(expr.slice(i, i + 10))
    }
    chunks.forEach(code => {
        let number 
        const reverse = []
        number = code.match(/10|11/g)
        if(number !== null || undefined) {
            number.forEach(el => {
                reverse.push(el === '11' ? '-' : '.')  
            })   
        } else {
            cutChar.push('**********')
        }
        cutChar.push(reverse.join(''));
    })

    cutChar.forEach(el => {
        objValues.forEach(([key, value]) => el === key ? result.push(value) : null)
    })
    return result.join('')


}



module.exports = {
    decode
}