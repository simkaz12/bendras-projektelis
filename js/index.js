console.clear();

const calcDOM = document.querySelector('.calc');
calcDOM.innerHTML = `
        <div id="skaiEkranas">
            <div class="veiksmai"></div>
            <div class="rez"></div>
        </div>
        <div id="knopkiuPanel">
            <button class="knopkes virsutiniai">C</button>
            <button class="knopkes virsutiniai">+/-</button>
            <button class="knopkes virsutiniai">%</button>
            <button class="knopkes virsutiniai"><=</button>
            <button class="knopkes">7</button>
            <button class="knopkes">8</button>
            <button class="knopkes">9</button>
            <button class="knopkes">/</button>
            <button class="knopkes">4</button>
            <button class="knopkes">5</button>
            <button class="knopkes">6</button>
            <button class="knopkes">*</button>
            <button class="knopkes">1</button>
            <button class="knopkes">2</button>
            <button class="knopkes">3</button>
            <button class="knopkes">-</button>
            <button class="knopkes">0</button>
            <button class="knopkes">00</button>
            <button class="knopkes">.</button>
            <button class="knopkes">+</button>
            <button id="lygu" class="knopkes">=</button>
        </div>
`;

const veiksmaiDOM = document.querySelector('.veiksmai');
const knopkesDOM = document.querySelectorAll('.knopkes');


for (const knopkeDOM of knopkesDOM) {
    knopkeDOM.addEventListener('click', () => {
        const knopkesValue = knopkeDOM.innerText;
        const currentEqValue = veiksmaiDOM.innerText;
        let updatedEqValue = currentEqValue;
        const lastValue = currentEqValue.slice(-1);
        
    switch (knopkesValue) {
        case 'C':
            updatedEqValue = '';
            break;
        case '<=':
            updatedEqValue = currentEqValue.slice(0, -1);
            break;
        case '=':
            //sdsdsdsdsdsd
            break;    
        case '.':
            if (currentEqValue.includes('.')) {
                break;
            } else {
                updatedEqValue += knopkesValue;
            }
        case '%':
        case '/':
        case '*':
        case '-':
        case '+':
            if (lastValue === knopkesValue || lastValue === '+' || lastValue === '-' || lastValue === '*' || lastValue === '/' || lastValue === '%') {
                break;
            } else {
                updatedEqValue += knopkesValue;
                break;
            }
        default:
            updatedEqValue += knopkesValue;
            
            break;
        }
        veiksmaiDOM.innerText = updatedEqValue;
    })
}
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            







































