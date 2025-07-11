const alphabets = {
    en: {
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
    },
    es: {
        'A': 'Alicante',
        'B': 'Barcelona',
        'C': 'Cádiz',
        'D': 'Dinamarca',
        'E': 'España',
        'F': 'Francia',
        'G': 'Granada',
        'H': 'Huelva',
        'I': 'Italia',
        'J': 'Jaén',
        'K': 'Kilo',
        'L': 'León',
        'M': 'Madrid',
        'N': 'Navarra',
        'O': 'Oviedo',
        'P': 'Pamplona',
        'Q': 'Queso',
        'R': 'Roma',
        'S': 'Sevilla',
        'T': 'Tarragona',
        'U': 'Uva',
        'V': 'Valencia',
        'W': 'Washington',
        'X': 'Xilófono',
        'Y': 'Yeso',
        'Z': 'Zaragoza'
    }
};

const translations = {
    en: {
        title: 'NATO Speller',
        placeholder: 'Type a word or phrase...',
        asIn: 'as in',
        notInAlphabet: '(not in NATO alphabet)'
    },
    es: {
        title: 'Alfabeto Fonético',
        placeholder: 'Escribe una palabra o frase...',
        asIn: 'como en',
        notInAlphabet: '(no está en el alfabeto fonético)'
    }
};

let currentLang = 'en';

function spellWord(word) {
    const output = document.getElementById('output');
    output.innerHTML = '';
    
    if (word.trim() === '') {
        return;
    }
    
    const table = document.createElement('table');
    table.className = 'output-table';
    
    const letters = word.toUpperCase().split('');
    
    letters.forEach(letter => {
        const alphabet = alphabets[currentLang];
        const row = document.createElement('tr');
        
        if (alphabet[letter]) {
            row.innerHTML = `
                <td class="letter-col"><strong>${letter}</strong></td>
                <td class="as-in-col"><span class="as-in">${translations[currentLang].asIn}</span></td>
                <td class="word-col">${alphabet[letter]}</td>
            `;
        } else if (letter === ' ') {
            row.innerHTML = '<td colspan="3">&nbsp;</td>';
        } else {
            row.innerHTML = `
                <td class="letter-col"><strong>${letter}</strong></td>
                <td colspan="2" class="as-in-col"><span class="as-in">${translations[currentLang].notInAlphabet}</span></td>
            `;
        }
        
        table.appendChild(row);
    });
    
    output.appendChild(table);
}

function updateUI() {
    document.querySelector('h1').textContent = translations[currentLang].title;
    document.getElementById('textInput').placeholder = translations[currentLang].placeholder;
    
    // Update flag states
    document.querySelectorAll('.flag').forEach(flag => {
        flag.classList.toggle('active', flag.dataset.lang === currentLang);
    });
    
    // Re-spell current word
    const currentWord = document.getElementById('textInput').value;
    if (currentWord) {
        spellWord(currentWord);
    }
}

function switchLanguage(lang) {
    currentLang = lang;
    updateUI();
}

document.getElementById('textInput').addEventListener('input', function() {
    spellWord(this.value);
});

// Add click handlers for language flags
document.querySelectorAll('.flag').forEach(flag => {
    flag.addEventListener('click', function() {
        switchLanguage(this.dataset.lang);
    });
});

// Initialize
updateUI();
document.getElementById('textInput').focus();
