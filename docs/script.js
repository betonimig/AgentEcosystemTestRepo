document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll(".copy-button").forEach((button) => {
  button.addEventListener("click", async () => {
    const prompt = button
      .closest(".prompt-card")
      .querySelector(".prompt-text")
      .textContent.trim();

    await navigator.clipboard.writeText(prompt);

    const originalText = button.textContent;
    button.textContent = "Copied ✓";

    setTimeout(() => {
      button.textContent = originalText;
    }, 1500);
  });
});
