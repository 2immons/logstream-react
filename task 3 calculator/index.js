function append(value) {
    document.getElementById('inputWindow').value += value
}

function clearInputWindow() {
    document.getElementById('inputWindow').value = ''
}

function calculate() {
    const expression = document.getElementById('inputWindow').value
    const result = eval(expression)
    addToHistory(expression, result)
    clearInputWindow()
}

function addToHistory(expression, result) {
    const historyLogs = document.getElementById('history-logs')
    const historyElement = document.createElement('div')
    historyElement.textContent = expression + ' = ' + result;
    historyLogs.appendChild(historyElement)
}
