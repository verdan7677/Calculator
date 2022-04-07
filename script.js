const numbers = document.querySelectorAll('.numbers')
const input = document.querySelector('#input')

var values = [0]

function addValues(input) {
    if (input === '=') {

    }
    else {
        // TODO store the given value
        if (input === 'add') {
            values.push('+')
            values.push(0)
        }
        else if (input === 'minus') {
            values.push('-')
            values.push(0)
        }

        else if (input === 'multiply') {
            values.push('*')
            values.push(0)
        }

        else if (input === 'divide') {
            values.push('/')
            values.push(0)
        }

        else if (input === '.') {
        }

        else if (input === 'c') {
            values = [0]
        }
        else {
            temp = values.pop()
            switch (input) {
                case 'one':
                    temp *= 10
                    temp += 1
                    break;

                case 'two':
                    temp *= 10
                    temp += 2
                    break;

                case 'three':
                    temp *= 10
                    temp += 3
                    break;

                case 'four':
                    temp *= 10
                    temp += 4
                    break;

                case 'five':
                    temp *= 10
                    temp += 5
                    break;

                case 'six':
                    temp *= 10
                    temp += 6
                    break;

                case 'seven':
                    temp *= 10
                    temp += 7
                    break;

                case 'eight':
                    temp *= 10
                    temp += 8
                    break;

                case 'nine':
                    temp *= 10
                    temp += 9
                    break;
                case 'zero':
                    temp *= 10
                    break
                default:
                    break;
            }
            values.push(temp)

        }
    }
}

function render() {
    input.textContent = 0
    for (i = 0; i < values.length; i++) {
        input.textContent += values[i] + ' '
    }
}

numbers.forEach(number => {
    number.addEventListener('click', () => {
        addValues(number.id)
        render()
    })
})