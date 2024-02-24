document.addEventListener('DOMContentLoaded', function () {
    // Get all buttons and input field
    const buttons = document.querySelectorAll('.btn');
    const inputField = document.querySelector('.input');
    const resulField = document.querySelector('.fixed-input');
    let currentValue;

    // Add click event listeners to all buttons
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.innerText; 
            if((inputField.value.includes('x') || inputField.value.includes('÷'))){
                if(/^\d+$/.test(buttonText)){
                    currentValue += buttonText;
                }
            }else{
                currentValue = inputField.value;
            }

            // Handle different button actions
            switch (buttonText) {
                case 'AC':
                    inputField.value = '';
                    resulField.value = ''
                    break;
                case '+/-':
                    inputField.value = currentValue.startsWith('-') ? currentValue.slice(1) : '-' + currentValue;
                    break;
                case '%':
                    inputField.value = eval(currentValue) / 100;
                    resulField.value = eval(currentValue) / 100;
                    break;
                case 'x':
                    inputField.value += 'x';
                    resulField.value = 'x';
                    currentValue += '*'
                    break;
                case '÷':
                    inputField.value += '÷';
                    resulField.value =   '÷';
                    currentValue += '/';
                    break;
                case '+':
                    inputField.value += '+';
                    resulField.value = '+';
                    break;
                case '-':
                    inputField.value += '-';
                    resulField.value = '-';
                    break;
                case '=':
                    try {
                        inputField.value = eval(currentValue);
                        resulField.value = eval(currentValue);
                    } catch (error) {
                        inputField.value = 'Error';
                        resulField.value = 'Error';
                    }
                    break;
                default:
                    inputField.value += buttonText;
                    if (/^\d+$/.test(resulField.value)) {
                        resulField.value += buttonText;
                    } else {
                        resulField.value = ''
                        resulField.value += buttonText;
                    }
            }
        });
    });
});
