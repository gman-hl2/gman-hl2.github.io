document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    const screamer = document.getElementById('screamer');
    const video = document.getElementById('screamerVideo');

    startButton.addEventListener('click', () => {
        startButton.style.display = 'none'; // скрыть кнопку после нажатия
        screamer.style.display = 'flex';
        video.play().then(() => {
            video.requestFullscreen().catch(err => {
                console.log("Ошибка при переходе в полноэкранный режим: ", err);
            });
        }).catch(err => {
            console.log("Ошибка при запуске видео: ", err);
			
        });
    });
});
