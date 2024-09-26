export const infoScreen = document.querySelector('.info-screen');
const infoMenu = document.querySelector('.info-menu');
const infoTitle = document.querySelector('#info-title');
const infoDescription = document.querySelector('#info-description');

export function closeInfoScreen(event) {
    if (!infoMenu.contains(event.target)) {
        infoScreen.classList.remove('active-screen');
    }
}

export function insertTaskIntoInfoScreen(title, description) {
    infoTitle.textContent = title;
    infoDescription.textContent = description;
}