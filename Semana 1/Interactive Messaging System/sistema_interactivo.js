alert("Hello, welcome to the Interactive Messaging System! ⚜️");
console.log("Hello, welcome to the Interactive Messaging System! ⚜️");

let userName = prompt("Tell me... what is your name?");
console.log(`User entered name: ${userName}`);

let rawAge = prompt("How old are you?");
console.log(`User entered raw age: ${rawAge}`);

let age = parseInt(rawAge);

if (isNaN(age)) {
    const errorMessage = "🤕 Oops, please enter a valid number for your age.";
    alert(errorMessage);
    console.error(errorMessage);
} else if (age < 18) {
    const minorMessage = `Hi ${userName}, you're a minor. Keep learning and enjoying coding! 🥰`;
    alert(minorMessage);
    console.log(minorMessage);
} else {
    const adultMessage = `Hi ${userName}, you're of legal age. Get ready for great opportunities in the world of programming! 🥰`;
    alert(adultMessage);
    console.log(adultMessage);
}
