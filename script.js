// script.js - Very basic JavaScript concepts for beginners

function learnBasics() {
    let message = "=== BASIC JAVASCRIPT EXAMPLES ===\n\n";

    // 1. Variables
    let name = "Malik";
    let age = 20;
    let isStudent = true;
    message += "1. Variables:\n";
    message += "   Name = " + name + "\n";
    message += "   Age = " + age + "\n";
    message += "   Student? " + isStudent + "\n\n";

    // 2. Arithmetic operators
    let a = 15;
    let b = 4;
    message += "2. Math:\n";
    message += "   " + a + " + " + b + " = " + (a + b) + "\n";
    message += "   " + a + " - " + b + " = " + (a - b) + "\n";
    message += "   " + a + " * " + b + " = " + (a * b) + "\n";
    message += "   " + a + " / " + b + " = " + (a / b) + "\n";
    message += "   " + a + " % " + b + " = " + (a % b) + " (remainder)\n";
    message += "   " + a + " ** 2 = " + (a ** 2) + " (power)\n\n";

    // 3. If-else conditions
    let marks = 75;
    message += "3. Conditions (marks = " + marks + "):\n";
    if (marks >= 90) {
        message += "   Grade = A\n";
    }
    else if (marks >= 75) {
        message += "   Grade = B\n";
    }
    else if (marks >= 60) {
        message += "   Grade = C\n";
    }
    else {
        message += "   Grade = Fail\n";
    }

    // 4. Simple functions
    function add(x, y) {
        return x + y;
    }
    message += "\n4. Function:\n";
    message += "   add(12, 8) = " + add(12, 8) + "\n";

    function isEven(number) {
        if (number % 2 === 0) {
            return "even";
        } else {
            return "odd";
        }
    }
    message += "   26 is " + isEven(26) + "\n\n";

    // 5. For loop
    message += "5. For loop (numbers 1 to 5):\n   ";
    for (let i = 1; i <= 5; i++) {
        message += i + " ";
    }
    message += "\n";

    // 6. While loop
    message += "   While loop (count to 4):\n   ";
    let count = 1;
    while (count <= 4) {
        message += count + " ";
        count = count + 1;
    }
    message += "\n\n";

    // 7. Array (list)
    let fruits = ["apple", "banana", "mango", "orange"];
    message += "6. Array:\n";
    message += "   All fruits: " + fruits + "\n";
    message += "   First fruit: " + fruits[0] + "\n";
    message += "   How many? " + fruits.length + "\n";

    fruits.push("grapes");
    message += "   After adding grapes: " + fruits + "\n\n";

    // Show result in the page (instead of alert)
    document.getElementById("output").innerText = message;

    // Bonus: simple interaction with prompt
    let color = prompt("What is your favorite color?");
    
    if (color === null || color === "") {
        alert("You didn't type anything!");
    } else {
        alert("Nice! " + color + " is a cool color! 🌈");
    }
}