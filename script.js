function displayGreeting() {
    const name = document.getElementById('nameInput').value.trim();
    if (name) {
        const message = `🎉 Happy New Year from ${name}! 🎉<br>🌟 As the clock strikes midnight and we welcome 2025, may this New Year bring an abundance of joy, love, and success into your life. Let go of the past and embrace the future with hope and determination. May your days be filled with happiness, your nights with peace, and your journey ahead with exciting opportunities. Cheers to new beginnings, cherished moments, and dreams coming true. Wishing you and your loved ones a year full of health, prosperity, and endless possibilities. Happy New Year! 🎉✨`;

        const words = message.split(' ');
        let index = 0;
        const greetingElement = document.getElementById('greeting');
        greetingElement.innerHTML = '';

        function typeWord() {
            if (index < words.length) {
                const currentText = greetingElement.innerHTML;
                greetingElement.innerHTML = currentText + words[index] + ' ';
                index++;

                if (greetingElement.scrollWidth > greetingElement.offsetWidth) {
                    greetingElement.innerHTML = currentText + '<br>' + words[index - 1] + ' ';
                }
                setTimeout(typeWord, 150);
            }
        }

        typeWord();
    } else {
        document.getElementById('greeting').textContent = 'Please enter your name!';
    }
}

function updateCountdown() {
    const currentTime = new Date();
    const newYear = new Date(currentTime.getFullYear() + 1, 0, 1);
    const diff = newYear - currentTime;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById('countdown').textContent =
        `Time until New Year: ${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();