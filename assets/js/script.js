const morseCode = {
  'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..', 'e': '.', 'f': '..-.',
  'g': '--.', 'h': '....', 'i': '..', 'j': '.---', 'k': '-.-', 'l': '.-..',
  'm': '--', 'n': '-.', 'o': '---', 'p': '.--.', 'q': '--.-', 'r': '.-.',
  's': '...', 't': '-', 'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-',
  'y': '-.--', 'z': '--..', '0': '-----', '1': '.----', '2': '..---',
  '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...',
  '8': '---..', '9': '----.', ' ': '/', ',': ','
};

const reverseMorseCode = {
  '.-': 'a', '-...': 'b', '-.-.': 'c', '-..': 'd', '.': 'e', '..-.': 'f',
  '--.': 'g', '....': 'h', '..': 'i', '.---': 'j', '-.-': 'k', '.-..': 'l',
  '--': 'm', '-.': 'n', '---': 'o', '.--.': 'p', '--.-': 'q', '.-.': 'r',
  '...': 's', '-': 't', '..-': 'u', '...-': 'v', '.--': 'w', '-..-': 'x',
  '-.--': 'y', '--..': 'z', '-----': '0', '.----': '1', '..---': '2',
  '...--': '3', '....-': '4', '.....': '5', '-....': '6', '--...': '7',
  '---..': '8', '----.': '9', '/': ' ', ',': ','
};

document.getElementById('convert').addEventListener('click', function() {
  const message = document.getElementById('plain-text').value.toLowerCase();
  let morseMessage = '';

  for (let i = 0; i < message.length; i++) {
    let char = message[i];
    if (morseCode[char] !== undefined) {
      morseMessage += morseCode[char] + ' ';
    } else {
      morseMessage += '? ';
    }
  }

  const outputElement = document.getElementById('morse-output');
  outputElement.innerText = '';

  let i = 0;
  function typeEffect() {
    if (i < morseMessage.length) {
      outputElement.innerText += morseMessage.charAt(i);
      i++;
      setTimeout(typeEffect, 50);
    }
  }

  typeEffect();
});

document.getElementById('decode').addEventListener('click', function() {
  const morseMessage = document.getElementById('morse-code').value.trim();
  const morseWords = morseMessage.split(' / ');
  let decodedMessage = '';

  for (let i = 0; i < morseWords.length; i++) {
    const word = morseWords[i];
    const morseChars = word.split(' ');

    for (let j = 0; j < morseChars.length; j++) {
      const char = morseChars[j];
      if (reverseMorseCode[char] !== undefined) {
        decodedMessage += reverseMorseCode[char];
      } else {
        decodedMessage += '?';
      }
    }
    decodedMessage += ' ';
  }

  document.getElementById('text-output').innerText = decodedMessage.trim();
});
