const display = document.querySelector('#display');
        const buttons = document.querySelectorAll('input[type="button"]');

        buttons.forEach((item) => {
            item.onclick = () => {
                if (item.id === 'clear') {
                    display.value = '';
                } else if (item.id === 'backspace') {
                    display.value = display.value.slice(0, -1);
                } else if (item.id === 'equal') {
                    if (display.value !== '') {
                        try {
                            display.value = eval(display.value);
                        } catch {
                            display.value = 'Error';
                            setTimeout(() => (display.value = ''), 2000);
                        }
                    } else {
                        display.value = 'Empty!';
                        setTimeout(() => (display.value = ''), 2000);
                    }
                } else {
                    display.value += item.value;
                }
            };
        });