// Wait for the Calculate button to be clicked
document.getElementById("calculateBtn").addEventListener("click", function () {
    // Get user input values
    const loanAmount = parseFloat(document.getElementById("loanAmount").value); // Loan Amount
    const interestRate = parseFloat(document.getElementById("interestRate").value) / 100 / 12; // Monthly Interest Rate
    const years = parseFloat(document.getElementById("years").value) * 12; // Convert years to months

    // Validate input - Ensure values are numbers
    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(years)) {
        alert("Please enter valid numbers."); // Show an alert for invalid inputs
        return; // Exit function
    }

    // Loan Calculation Formula
    const monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -years)); 
    const totalAmount = monthlyPayment * years; // Total amount paid over the loan duration
    const totalInterest = totalAmount - loanAmount; // Total interest paid

    // Display calculated values in respective fields
    document.getElementById("monthlyPayment").value = monthlyPayment.toFixed(2); // Monthly Payment (rounded)
    document.getElementById("totalAmount").value = totalAmount.toFixed(2); // Total Amount
    document.getElementById("totalInterest").value = totalInterest.toFixed(2); // Total Interest Paid
});