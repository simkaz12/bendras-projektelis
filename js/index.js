console.clear();

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
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            







































