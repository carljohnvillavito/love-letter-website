const messages = [
    "Hi love:)",
    "Kamusta naman akong palangga? Is she getting better every single day ba?",
    "Well i hope so... i need my lalove to be strong and independent habang wala pa iyahang night in shining agtang hahaha.",
    "Pero enough of that silly sht...",
    "I really wanted show you how i love you and i wanna make you safe with me, diko gusto maging bad example satong future self nanong nagbuwag ta or anything...",
    "I just want you to know i still have this same feelings for you, since day one^^",
    "And this is the reason why i made you this website:)",
    "Since wamay maka appreciate aning lowkey nako na talent, I'll just spoil it to you nalang since you wanted it so bad:)",
    "Mupadayon gihapon kog himog ingani nga content in the near future, as long as its for you, i will keep myself motivated:)",
    "And if you ever feel like coming back to this website, pwede kaayo love.",
    "After all, i made this for you:>",
    "I love you langga, unta you really are the one na, unta ikaw najud magpa tunay sako nga you are worth waiting for.",
    "That's all muna love... May our relationship be stronger than bricks and stones...",
    "I love you...❤️",
    "Your's truly, your night in shining agtang."
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
            window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
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
