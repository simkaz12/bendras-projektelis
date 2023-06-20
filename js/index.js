console.clear();

const knopkes1DOM = document.getElementById('one');
const knopkes2DOM = document.getElementById('two');
const knopkes3DOM = document.getElementById('tree');
const knopkes4DOM = document.getElementById('four');
const knopkes5DOM = document.getElementById('five');
const knopkes6DOM = document.getElementById('six');
const knopkes7DOM = document.getElementById('seven');
const knopkes8DOM = document.getElementById('eight');
const knopkes9DOM = document.getElementById('nine');
const knopkes0DOM = document.getElementById('zero');
const knopkes00DOM = document.getElementById('zeroZero');
const knopkesPlusDOM = document.getElementById('plus');
const knopkesMinusDOM = document.getElementById('minus');
const knopkesTimesDOM = document.getElementById('times');
const knopkesDivDOM = document.getElementById('div');
const knopkesCDOM = document.getElementById('C');
const knopkesPlusMinusDOM = document.getElementById('plusMinus');
const knopkesProcentasDOM = document.getElementById('procentas');
const knopkesSaknisDOM = document.getElementById('saknis');
const knopkesPointDOM = document.getElementById('point');
const knopkesLyguDOM = document.getElementById('lygu');

const veiksmaiDOM = document.querySelector('.veiksmai');
const rezDOM = document.querySelector('.rez');


let counter = ``;
let calculate = ``;



knopkes1DOM.addEventListener('click', () => {
    if (counter.length < 30) {
        counter += 1;
        veiksmaiDOM.textContent += 1;
    }
})
knopkes2DOM.addEventListener('click', () => {
    if (counter.length < 30) {
        counter += 2;
        veiksmaiDOM.textContent += 2;
    }
})
knopkes3DOM.addEventListener('click', () => {
    if (counter.length < 30) {
        counter += 3;
        veiksmaiDOM.textContent += 3;
    }
})
knopkes4DOM.addEventListener('click', () => {
    if (counter.length < 30) {
        counter += 4;
        veiksmaiDOM.textContent += 4;
    }
})
knopkes5DOM.addEventListener('click', () => {
    if (counter.length < 30) {
        counter += 5;
        veiksmaiDOM.textContent += 5;
    }
})
knopkes6DOM.addEventListener('click', () => {
    if (counter.length < 30) {
        counter += 6;
        veiksmaiDOM.textContent += 6;
    }
})
knopkes7DOM.addEventListener('click', () => {
    if (counter.length < 30) {
        counter += 7;
        veiksmaiDOM.textContent += 7;
    }
})
knopkes8DOM.addEventListener('click', () => {
    if (counter.length < 30) {
        counter += 8;
        veiksmaiDOM.textContent += 8;
    }
})
knopkes9DOM.addEventListener('click', () => {
    if (counter.length < 30) {
        counter += 9;
        veiksmaiDOM.textContent += 9;
    }
})
knopkes0DOM.addEventListener('click', () => {
    if (counter.length < 30) {
        counter += 0;
        veiksmaiDOM.textContent += 0;
    }
})
knopkes00DOM.addEventListener('click', () => {
    if (counter.length < 30) {
        counter += '00';
        veiksmaiDOM.textContent += '00';
    };
})

//---------------------------------------------------------------------------------------------------

knopkesPlusDOM.addEventListener('click', () => {
    const last = counter.slice(-1);
    if (last === '+' || last === '-' || last === 'x' || last === '/' || last === '%' || last === '//') {
        counter = counter;
        veiksmaiDOM.textContent += ``; 
    } else if (counter.length < 30) {
        counter += '+';
        veiksmaiDOM.textContent += '+';
    };
})
knopkesMinusDOM.addEventListener('click', () => {
    const last = counter.slice(-1);
    if (last === '+' || last === '-' || last === 'x' || last === '/' || last === '%' || last === '//') {
        counter = counter;
        veiksmaiDOM.textContent += ``; 
    } else if (counter.length < 30) {
        counter += '-';
        veiksmaiDOM.textContent += '-';
    };
})
knopkesTimesDOM.addEventListener('click', () => {
    const last = counter.slice(-1);
    if (last === '+' || last === '-' || last === 'x' || last === '/' || last === '%' || last === '//') {
        counter = counter;
        veiksmaiDOM.textContent += ``; 
    } else if (counter.length < 30) {
        counter += 'x';
        veiksmaiDOM.textContent += 'x';
    };
})
knopkesDivDOM.addEventListener('click', () => {
    const last = counter.slice(-1);
    if (last === '+' || last === '-' || last === 'x' || last === '/' || last === '%' || last === '//') {
        counter = counter;
        veiksmaiDOM.textContent += ``; 
    } else if (counter.length < 30) {
        counter += '/';
        veiksmaiDOM.textContent += '/';
    };
})
knopkesPlusMinusDOM.addEventListener('click', () => {
    /*
    if (counter.length < 30) {
        counter += '00';
        veiksmaiDOM.textContent += '00';
    };
    */
})
knopkesProcentasDOM.addEventListener('click', () => {
    const last = counter.slice(-1);
    if (last === '+' || last === '-' || last === 'x' || last === '/' || last === '%' || last === '//') {
        counter = counter;
        veiksmaiDOM.textContent += ``; 
    } else if (counter.length < 30) {
        counter += '%';
        veiksmaiDOM.textContent += '%';
    };
})
knopkesSaknisDOM.addEventListener('click', () => {
    const last = counter.slice(-1);
    if (last === '+' || last === '-' || last === 'x' || last === '/' || last === '%' || last === '//') {
        counter = counter;
        veiksmaiDOM.textContent += ``; 
    } else if (counter.length < 30) {
        counter += '//';
        veiksmaiDOM.textContent += '//';
    };
})
knopkesPointDOM.addEventListener('click', () => {
    if (counter.includes('.') && counter.length < 30) {
        counter = counter;
        veiksmaiDOM.textContent += ``; 
    } else if (counter.length < 30) {
        counter += '.';
        veiksmaiDOM.textContent += '.';
    };
})
knopkesCDOM.addEventListener('click', () => {
    counter = ``;
    veiksmaiDOM.textContent = ``;
    rezDOM.textContent = ``;
})
knopkesLyguDOM.addEventListener('click', () => {
    const last = counter.slice(-1);
    if (last !== '+' || last !== '-' || last !== 'x' || last !== '/' || last !== '%' || last !== '//' || last !== '=') {
        counter = eval(counter);
        const rezToStr = counter.toString();
        const rezultatas = rezToStr.substring(0, 31); 
        rezDOM.textContent = rezultatas;
    };
})