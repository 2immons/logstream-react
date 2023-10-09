function append(value) {
    document.getElementById('inputWindow').value += value
}

function clear() {
    document.getElementById('inputWindow').value = ''
}

function calculate() {
    const expression = document.getElementById('inputWindow').value
    const result = eval(expression)
    addToHistory(expression, result)
    clear()
}

function addToHistory(expression, result) {
    const historyLogs = document.getElementById('history-logs')
    const historyElement = document.createElement('div')
    historyElement.textContent = expression + ' = ' + result;
    historyLogs.appendChild(historyElement)
}
