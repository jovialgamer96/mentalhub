function sendMessage() {
  const userInput = document.getElementById("userInput");
  const message = userInput.value.trim();
  if (message === "") return;

  // Show user message
  const chatbox = document.getElementById("chatbox");
  const userMsg = document.createElement("div");
  userMsg.textContent = "You: " + message;
  chatbox.appendChild(userMsg);

  // Simulated bot response
  const botResponse = getBotResponse(message);
  const botMsg = document.createElement("div");
  botMsg.textContent = "Companion: " + botResponse;
  chatbox.appendChild(botMsg);

  // Clear input + scroll
  userInput.value = "";
  chatbox.scrollTop = chatbox.scrollHeight;
}

function getBotResponse(input) {
  const lower = input.toLowerCase();
  if (lower.includes("sad")) return "I'm here for you. Remember to be kind to yourself.";
  if (lower.includes("happy")) return "That's wonderful to hear!";
  if (lower.includes("breathe")) return "Take a deep breath in... and slowly exhale.";
  return "Tell me more about how you're feeling.";
}
