// Saves dark/light theme preference - not required for website functionality
document.addEventListener("DOMContentLoaded", function () {
	const colorCheckbox = document.getElementById("color-mode");

	colorCheckbox.checked = localStorage.getItem("checkboxChecked") === 'true';

	colorCheckbox.addEventListener("input", function () {
		localStorage.setItem("checkboxChecked", colorCheckbox.checked);
	});
});
