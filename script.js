function calculateTip() {
    var billAmount = parseFloat(document.getElementById('bill').value);
    var tipPercent = parseFloat(document.getElementById('tip').value);

    if (isNaN(billAmount) || isNaN(tipPercent)) {
        alert('Por favor, insira valores válidos.');
        return;
    }

    var tipAmount = (billAmount * tipPercent) / 100;
    var totalAmount = billAmount + tipAmount;

    document.getElementById('total').innerText = 'R$ ' + totalAmount.toFixed(2);
}
