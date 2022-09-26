


var quotes = [
    { 'author': 'Oscar Wilde',
    'quote': 'Be yourself; everyone else is already taken.',
    },
    { 'author': 'Albert Einstein',
    'quote': 'Two things are infinite: the universe and human stupidity; and I am not sure about the universe.',
    },
    { 'author': 'Frank Zappa',
    'quote': 'So many books, so little time.',
    },
    { 'author': 'Mae West',
    'quote': 'You only live once, but if you do it right, once is enough.',
    },
    { 'author': 'Mahatma Gandhi',
    'quote': 'Be the change that you wish to see in the world.',
    },
    { 'author': 'Mark Twain',
    'quote': 'If you tell the truth, you do not have to remember anything.',
    },
    { 'author': 'Elbert Hubbard',
    'quote': 'A friend is someone who knows all about you and still loves you..',
    },
    { 'author': 'Ralph Waldo Emerson',
    'quote': 'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.',
    },
    { 'author': ' Andre Gide, Autumn Leaves',
    'quote': 'It is better to be hated for what you are than to be loved for what you are not.',
    },
    { 'author': 'Margret Atwood',
    'quote': 'In the end we all have stories.',
    },

]

function getQuote() {
    var randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerHTML = `\"${quotes[randomNumber].quote}\"`;
    document.getElementById('author').innerHTML = `--${quotes[randomNumber].author}`;

}