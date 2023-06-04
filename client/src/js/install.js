const buttonInstall = document.getElementById("buttonInstall");

window.addEventListener('beforeinstallprompt', (event) => {
    console.log('hit')
    console.log("event" + event)
    event.preventDefault();
    window.deferredPrompt = event;

    buttonInstall.classList.toggle('hidden', false);
});

buttonInstall.addEventListener('click', async () => {
    const promptE = window.deferredPrompt;

    if (!promptE) {
        return;
    }

    promptE.prompt();
    window.deferredPrompt = null;

    buttonInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
    console.log('install hit')
    window.deferredPrompt = null;
}); 