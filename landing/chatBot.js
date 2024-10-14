document.addEventListener("DOMContentLoaded", function() {
    const bot = document.querySelector("#chatbot");
    const chat = document.querySelector("#chat");
    const close = document.querySelector("#closechat");
    const userInput = document.getElementById("input-msg");
    const chatBox = document.getElementById("chats");

    
    // Initially hide the chat window
    chat.style.display = "none";
    
    bot.addEventListener("click", function(){
        chat.style.display = "flex";  // Show chat
        bot.style.display = "none";   // Hide chatbot button
        chatBox.innerHTML = "How can i help you??";
    });
    
    close.addEventListener("click", function(){
        chat.style.display = "none";  // Hide chat
        bot.style.display = "flex";   // Show chatbot button
        chatBox.innerHTML = "How can i help you??";
    });

    // Sample responses for the chatbot
    const botResponses = {
        "hello": "Hi there! I am Comcross Bot. How can I assist you today?",
        "how are you?": "I'm just a bot, but I'm doing great! How about you?",
        "what is your name?": "I'm Comcross Bot, your virtual assistant!",
        "help": "Sure! What do you need help with?",
        "give information about comcross web": "Comcross is a web platform for comparing product prices across different websites.",
    };

    // Function to send a message
    function sendMessage() {
        // Get user input
        const userMessage = userInput.value.trim();

        // Only proceed if there is a message
        if (userMessage) {
            // Display user message
            chatBox.innerHTML += `<div class="user">${userMessage}</div>`;
            userInput.value = ''; // Clear input field

            // Generate bot response
            const botMessage = getBotResponse(userMessage.toLowerCase());
            chatBox.innerHTML += `<div class="bot">${botMessage}</div>`;

            // Scroll to the bottom of the chat
            chatBox.scrollTop = chatBox.scrollHeight;
        }
    }

    // Function to get bot response
    function getBotResponse(userMessage) {
        return botResponses[userMessage] || "I'm sorry, I don't understand that.";
    }

    // Allow pressing Enter to send a message
    document.getElementById("input-msg").addEventListener("keypress", function (e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
});
