// Function expression.
const sumarExpression = function() {
    console.log(2+2);
};

// Misma función, pero como Arrow Function
const sumar = (num1 = 0, num2 = 0) => {
    console.log(num1 + num2);
}

sumar(5,3); // 8