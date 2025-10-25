var balance = document.getElementById('balance');
var money_plus = document.getElementById('money-plus');
var money_minus = document.getElementById('money-minus');
var list = document.getElementById('list');
var form = document.getElementById('form');
var text = document.getElementById('text');
var amount = document.getElementById('amount');

var localStorageTransactions = JSON.parse(localStorage.getItem('transactions'));

let transactions = localStorageTransactions !== null ? localStorageTransactions : [];

function updateValues() {
    var amounts = transactions.map(t => t.amount);

    var total = amounts.reduce((acc, item) => acc + item, 0).toFixed(2);
    var income = amounts.filter(item => item > 0)
        .reduce((acc, item) => acc + item, 0).toFixed(2);
    var expense = (amounts.filter(item => item < 0)
        .reduce((acc, item) => acc + item, 0) * -1).toFixed(2);

    balance.innerText = `$${total}`;
    money_plus.innerText = `+$${income}`;
    money_minus.innerText = `-$${expense}`;
}

function addTransactionDOM(transaction) {
    var sign = transaction.amount < 0 ? '-' : '+';
    var item = document.createElement('li');
    item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');

    item.innerHTML = `
    ${transaction.text} <span>${sign}$${Math.abs(transaction.amount)}</span>
    <button class="delete-btn" onclick="removeTransaction(${transaction.id})">x</button>
  `;

    list.appendChild(item);
}

function removeTransaction(id) {
    transactions = transactions.filter(t => t.id !== id);
    updateLocalStorage();
    init();
}

function updateLocalStorage() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

function init() {
    list.innerHTML = '';
    transactions.forEach(addTransactionDOM);
    updateValues();
}

form.addEventListener('submit', e => {
    e.preventDefault();

    if (text.value.trim() === '' || amount.value.trim() === '') {
        alert('Please add a description and amount');
    } else {
        var transaction = {
            id: Date.now(),
            text: text.value,
            amount: +amount.value
        };

        transactions.push(transaction);
        addTransactionDOM(transaction);
        updateValues();
        updateLocalStorage();

        text.value = '';
        amount.value = '';
    }
});

init();
