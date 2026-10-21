const browser = document.getElementById("browser");
const url = document.getElementById("url");

const back = document.getElementById("back");
const forward = document.getElementById("forward");
const reload = document.getElementById("reload");
const go = document.getElementById("go");

function navigate() {
    let address = url.value.trim();

    if (!address) return;

    // If it doesn't look like a URL, search Google
    if (!address.includes("://")) {
        address =
            "https://www.google.com/search?q=" +
            encodeURIComponent(address);
    }

    browser.src = address;
}

go.addEventListener("click", navigate);

url.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        navigate();
    }
});

back.addEventListener("click", () => {
    if (browser.canGoBack()) {
        browser.goBack();
    }
});

forward.addEventListener("click", () => {
    if (browser.canGoForward()) {
        browser.goForward();
    }
});

reload.addEventListener("click", () => {
    browser.reload();
});

browser.addEventListener("did-navigate", () => {
    url.value = browser.getURL();
});

browser.addEventListener("did-navigate-in-page", () => {
    url.value = browser.getURL();
});