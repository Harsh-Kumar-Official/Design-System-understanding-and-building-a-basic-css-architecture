const inputField = document.getElementById("input-field");
const submitButton = document.getElementById("submit-button");

inputField.addEventListener("focus", () => {
  inputField.style.backgroundColor = "var(--input-focus-background)";
});

inputField.addEventListener("blur", () => {
  inputField.style.backgroundColor = "var(--input-background)";
});

submitButton.addEventListener("click", () => {
  submitButton.textContent = "Loading...";
  submitButton.disabled = true;
  setTimeout(() => {
    submitButton.textContent = "Submit";
    submitButton.disabled = false;
  }, 2000);
});

inputField.addEventListener("input", () => {
  inputField.style.backgroundColor = inputField.value
    ? "var(--input-focus-background)"
    : "var(--input-background)";
});
