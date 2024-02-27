document.addEventListener("DOMContentLoaded", function() {
    const chatInput = document.getElementById("user-input");
    const chatbox = document.querySelector(".chatbox");

    let flag = 1;

    const createChatLi = (message, className) => {
        const chatLi = document.createElement("li");
        chatLi.classList.add("chat", className);
        if (flag === 1) {
            chatLi.innerHTML = `<img src="assets/human.jpg" alt="user" height="30px"><p>${message}</p>`;
            flag = 0;
        } else {
            chatLi.innerHTML = `<img src="assets/bot.png" alt="bot" height="30px"><p>${message}</p>`;
            flag = 1;
        }
        return chatLi;
    };

    const responses = {
        "hello": "Hello there!",
        "hi":"hello",
        "how are you": "I'm just a bot, but thanks for asking!",
        "what is your name?": "I'm just a bot, I don't have a name.",
        "goodbye": "Goodbye!",
        "thank you": "You're welcome!",
        "how old are you?": "I'm a bot, so I don't have an age.",
        "what can you do?": "I can provide responses based on your inputs.",
    };

    const generateResponse = (inputMessage) => {
        const response = responses[inputMessage.toLowerCase()] || "I'm sorry, I don't understand.";
        return response;
    };

    const handleChat = () => {
        const userMessage = chatInput.value.trim();
        if (!userMessage) return;
        chatInput.value = "";

        const outgoingMessage = createChatLi(userMessage, "outgoing");
        chatbox.appendChild(outgoingMessage);

        const incomingMessage = createChatLi("Thinking...", "incoming");
        chatbox.appendChild(incomingMessage);
        const botResponse = generateResponse(userMessage);
        incomingMessage.querySelector("p").textContent = botResponse;
    };

    chatInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleChat();
        }
    });
});
