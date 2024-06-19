function generateTable() {
    const number = document.getElementById('numberInput').value;
    const resultDiv = document.getElementById('result');

    resultDiv.innerHTML = '';

    if (number === '') {
        resultDiv.innerHTML = '<p>Por favor, digite um número.</p>';
        return;
    }

    const num = parseInt(number);

    if (isNaN(num)) {
        resultDiv.innerHTML = '<p>Por favor, digite um número válido.</p>';
        return;
    }

    const table = document.createElement('table');

    const headerRow = table.insertRow();
    const headers = ['Valor A', 'Operador', 'Valor B', 'Resultado'];
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    for (let i = 0; i <= 10; i++) {
        const row = table.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);
        const cell4 = row.insertCell(3);

        cell1.textContent = num;
        cell2.textContent = 'X';
        cell3.textContent = i;
        cell4.textContent = num * i;
    }

    resultDiv.appendChild(table);
}
