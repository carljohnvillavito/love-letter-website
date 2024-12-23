const messages = [
    "Hi love:)",
    "You know that i love you so much",
    "This last message will direct the user to a youtube link( Feel free to edit it in /utils/script.js )"
];

let currentMessageIndex = 0;

function createEmojis() {
    const emojiBackground = document.getElementById('emoji-background');
    const emojis = ['❤️', '😍', '💕', '💖', '💘', '💓', '💗', '💞', '💝', '😘'];
    const numberOfEmojis = 50;

    for (let i = 0; i < numberOfEmojis; i++) {
        const emoji = document.createElement('span');
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.position = 'absolute';
        emoji.style.left = `${Math.random() * 100}%`;
        emoji.style.top = `${Math.random() * 100}%`;
        emoji.style.fontSize = `${Math.random() * 20 + 10}px`;
        emoji.style.opacity = '0.5';
        emojiBackground.appendChild(emoji);
    }
}

function openEnvelope() {
    const envelope = document.getElementById('envelope');
    const letter = document.getElementById('letter');
    const envelopeFlap = document.querySelector('.envelope-flap');
    const envelopeContent = document.querySelector('.envelope-content');

    envelope.style.animation = 'openEnvelope 1s forwards';
    envelopeFlap.style.transform = 'rotateX(180deg)';
    envelopeContent.style.transform = 'translateY(-100px)';

    setTimeout(() => {
        envelope.style.display = 'none';
        letter.classList.remove('d-none');
        showMessage();
    }, 1000);
}

function showMessage() {
    const messageElement = document.getElementById('message');
    const nextButton = document.getElementById('next-button');

    messageElement.textContent = messages[currentMessageIndex];
    messageElement.style.opacity = '0';
    messageElement.style.transform = 'translateY(20px)';

    setTimeout(() => {
        messageElement.style.transition = 'opacity 0.5s, transform 0.5s';
        messageElement.style.opacity = '1';
        messageElement.style.transform = 'translateY(0)';
    }, 100);

    if (currentMessageIndex === messages.length - 1) {
        nextButton.onclick = () => {
            window.location.href = 'https://youtu.be/bGc5lGxzMQw?si=LZg67_ufsDd-HAT3';
        };
    } else {
        nextButton.onclick = () => {
            currentMessageIndex++;
            showMessage();
        };
    }
}

document.addEventListener('DOMContentLoaded', () => {
    createEmojis();
    document.getElementById('envelope').addEventListener('click', openEnvelope);
});
