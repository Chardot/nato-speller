const natoAlphabet = {
    'A': 'Alpha',
    'B': 'Bravo',
    'C': 'Charlie',
    'D': 'Delta',
    'E': 'Echo',
    'F': 'Foxtrot',
    'G': 'Golf',
    'H': 'Hotel',
    'I': 'India',
    'J': 'Juliet',
    'K': 'Kilo',
    'L': 'Lima',
    'M': 'Mike',
    'N': 'November',
    'O': 'Oscar',
    'P': 'Papa',
    'Q': 'Quebec',
    'R': 'Romeo',
    'S': 'Sierra',
    'T': 'Tango',
    'U': 'Uniform',
    'V': 'Victor',
    'W': 'Whiskey',
    'X': 'X-ray',
    'Y': 'Yankee',
    'Z': 'Zulu'
};

function spellWord(word) {
    const output = document.getElementById('output');
    output.innerHTML = '';
    
    if (word.trim() === '') {
        return;
    }
    
    const letters = word.toUpperCase().split('');
    
    letters.forEach(letter => {
        if (natoAlphabet[letter]) {
            const span = document.createElement('span');
            span.innerHTML = `<strong>${letter}</strong> <span class="as-in">as in</span> ${natoAlphabet[letter]}`;
            output.appendChild(span);
        } else if (letter !== ' ') {
            const span = document.createElement('span');
            span.innerHTML = `<strong>${letter}</strong> <span class="as-in">(not in NATO alphabet)</span>`;
            output.appendChild(span);
        }
    });
}

document.getElementById('textInput').addEventListener('input', function() {
    spellWord(this.value);
});

document.getElementById('textInput').focus();
