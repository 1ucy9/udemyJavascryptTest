let firstName = prompt('Please enter your first name: ')
let welcome = "Welcome "

document.getElementById("greeting").innerHTML = welcome + firstName

let grade = prompt("Plese enter your grade, 0-100: ")

if (grade >= 90) {
    alert("Your grade is A.")
}

else if (80 <= grade <= 89) {
    alert("Your grade is B.")
}

else if (70 <= grade <= 79) {
    alert("Your grade is C.")
}

else if (60 <= grade <= 69) {
    alert("Your grade is D.")
}

else {
    alert("Your grade is F.")
}