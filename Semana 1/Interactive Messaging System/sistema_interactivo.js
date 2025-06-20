alert("Hello, welcome to the Interactive Messaging System! ⚜️");

let uName = prompt(("Tell me...what is your name?"));
let edad = prompt(("How old are you?"));

edad = parseInt(edad);

if (!isNaN(edad)) {
    console.error("🤕 Oops, please enter a valid number for your age.");
} else if (edad < 18) {
    alert (`Hi ${uName}, you're a minor. Keep learning and enjoying coding! 🥰`);
} else {
    alert (`Hi ${uName}, you're of legal age. Get ready for great opportunities in the world of programming! 🥰`)
}
