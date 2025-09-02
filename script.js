// Part 1: Variable Declarations and Conditionals

// Declare two variables
let guestCount = 0; // Tracks number of guests
const maxGuests = 5; // Maximum guests allowed

// Conditional logic to display a warning if max is reached
function checkGuestLimit() {
	if (guestCount >= maxGuests) {
		alert("Maximum number of guests reached!");
		return false;
	}
	return true;
}

// Part 2: Custom Functions

// Adds a new guest to the list
function addGuest() {
	if (checkGuestLimit()) {
		guestCount++;
		const guestList = document.getElementById("guestList");
		const newGuest = document.createElement("li");
		newGuest.textContent = `Guest ${guestCount}`;
		guestList.appendChild(newGuest);
	}
}

// Changes the background color to a random color
function changeBackgroundColor() {
	// List of possible background colors
	const colors = ["#ffadad", "#ffd6a5", "#fdffb6", "#caffbf", "#9bf6ff"];
	// Select a random color using Math.random
	const randomIndex = Math.floor(Math.random() * colors.length);
	document.body.style.backgroundColor = colors[randomIndex];
}

// Part 3: Loop Examples

// For loop to initialize guest list with two guests
for (let i = 0; i < 2; i++) {
	addGuest();
}

// While loop to log the number of guests left until limit
let tempCount = guestCount;
while (tempCount < maxGuests) {
	console.log(`You can still add ${maxGuests - tempCount} more guest(s).`);
	tempCount++;
}

// Part 4: DOM Interactions

// 1. Modify DOM by adding guests
document.getElementById("addGuestBtn").addEventListener("click", addGuest);

// 2. React to button click to change background color
document
	.getElementById("colorBtn")
	.addEventListener("click", changeBackgroundColor);

// 3. Dynamically update the guest list (already covered by addGuest function)
