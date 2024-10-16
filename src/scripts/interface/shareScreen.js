import { currentTask } from "./loadTasks.js";

export const shareScreen = document.querySelector('.share-screen');
const shareMenu = document.getElementById('share-menu');

export function closeShareScreen(event) {
    if (!shareMenu.contains(event.target)) {
        shareScreen.classList.remove('active-screen');
    }
}

const platforms = {
    copy: {
        action: () => {
            const textToCopy = `Title: ${currentTask.title}\nDescription: ${currentTask.description}`;
            navigator.clipboard.writeText(textToCopy).then(() => {
                alert('Task information copied to clipboard!');
            }).catch(err => console.error('Failed to copy text: ', err));
        }
    },
    vk: {
        url: `https://vk.com/share.php`,
        params: () => ({
            title: currentTask.title,
            description: currentTask.description
        })
    },
    telegram: {
        url: `https://t.me/share/url`,
        params: () => ({
            url: window.location.href,
            text: `Title: ${currentTask.title}\nDescription: ${currentTask.description}`
        })
    },
    whatsapp: {
        url: `https://wa.me/`,
        params: () => ({
            text: `Title: ${currentTask.title}\nDescription: ${currentTask.description}`
        })
    },
    facebook: {
        url: `https://www.facebook.com/sharer/sharer.php`,
        params: () => ({
            u: window.location.href,
            quote: `Title: ${currentTask.title}\nDescription: ${currentTask.description}`
        })
    }
};

document.querySelectorAll('.share-button').forEach(button => {
    button.addEventListener('click', () => {
        if (!currentTask) return;

        const platform = button.id;
        if (platforms[platform].action) {
            platforms[platform].action();
        } else {
            const { url, params } = platforms[platform];
            const queryString = new URLSearchParams(params()).toString();
            window.open(`${url}?${queryString}`, '_blank');
        }

        shareScreen.classList.remove('active-screen');
    });
});