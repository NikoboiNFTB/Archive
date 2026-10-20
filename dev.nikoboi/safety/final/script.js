// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
	const copyButton = document.querySelector(".copy");
	const promptText = document.querySelector(".prompt");

	copyButton.addEventListener("click", () => {
		navigator.clipboard
			.writeText(promptText.innerText)
			.then(() => {
				const originalText = copyButton.innerText;
				copyButton.innerText = "Prompt Copied!";
				setTimeout(() => {
					copyButton.innerText = originalText;
				}, 2000);
			})
			.catch((err) => {
				console.error("Failed to copy text: ", err);
				alert("Failed to copy text.");
			});
	});
});
