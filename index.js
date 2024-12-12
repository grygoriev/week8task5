import './index.css'

const cookieConsent = document.querySelector(".cookie-consent");
const acceptCookieButton = document.querySelector(".cookie-consent__button");

const COOKIE_ACCEPTED_KEY = "cookieAccepted";

function isCookieAccepted() {
    return localStorage.getItem(COOKIE_ACCEPTED_KEY) === "true";
}

function hideCookieConsent() {
    cookieConsent.style.display = "none";
}

function acceptCookies() {
    localStorage.setItem(COOKIE_ACCEPTED_KEY, "true");
    hideCookieConsent();
}

function initCookieConsent() {
    if (isCookieAccepted()) {
        hideCookieConsent();
    }
}

acceptCookieButton.addEventListener("click", acceptCookies);

initCookieConsent();