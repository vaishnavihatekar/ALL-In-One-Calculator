function calculateLoan() {
    let amount = document.getElementById('loanAmount').value;
    let rate = document.getElementById('loanRate').value / 100 / 12;
    let years = document.getElementById('loanTerm').value * 12;

    let emi = (amount * rate * Math.pow(1 + rate, years)) / (Math.pow(1 + rate, years) - 1);
    
    let resultBox = document.getElementById('loanResult');
    resultBox.innerHTML = `EMI: ₹${emi.toFixed(2)}`;
    resultBox.classList.add('active');
}

function calculateBMI() {
    let height = document.getElementById('bmiHeight').value / 3.281; // Convert ft to meters
    let weight = document.getElementById('bmiWeight').value;

    let bmi = weight / (height * height);

    let resultBox = document.getElementById('bmiResult');
    resultBox.innerHTML = `BMI: ${bmi.toFixed(2)}`;
    resultBox.classList.add('active');
}

function calculateCompoundInterest() {
    let principal = document.getElementById('principal').value;
    let rate = document.getElementById('interestRate').value / 100;
    let years = document.getElementById('years').value;
    let n = document.getElementById('timesCompounded').value;

    let amount = principal * Math.pow(1 + rate / n, n * years);

    let resultBox = document.getElementById('compoundResult');
    resultBox.innerHTML = `Final Amount: ₹${amount.toFixed(2)}`;
    resultBox.classList.add('active');
}