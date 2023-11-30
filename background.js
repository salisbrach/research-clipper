chrome.commands.onCommand.addListener((command) => {
    if (command === "copy-command") {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            copySelectedText(tabs[0].id);
        });
    }
});

function copySelectedText(tabId) {
    chrome.scripting.executeScript({
        target: { tabId: tabId },
        func: copyTextFunction,
        args: []
    });
}

function copyTextFunction() {
    chrome.runtime.sendMessage({action: "copyText"});
}
