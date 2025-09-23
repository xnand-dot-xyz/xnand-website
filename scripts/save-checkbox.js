// Saves dark/light theme preference - not required for website functionality
document.addEventListener("DOMContentLoaded", function () {
	const colorCheckbox = document.getElementById("color-mode");

	// Check if checkboxChecked exists, and set the theme checkbox state to its value
	const parts = `; ${document.cookie}`.split(`; checkboxChecked=`);
	if (parts.length === 2) {
		colorCheckbox.checked = parts.pop().split(';').shift() === 'true';
	}

	colorCheckbox.addEventListener("input", function () {
		document.cookie = "checkboxChecked=" + colorCheckbox.checked + "; Path=/; Domain=.xnand.xyz; Secure; expires=" + new Date(9999, 1, 1).toUTCString();
	});
});
