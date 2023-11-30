chrome.commands.onCommand.addListener(function (command) {
    if (command === "copy-command") {
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            chrome.scripting.executeScript({
                target: {tabId: tabs[0].id},
                function: copySelectedText
            });
        });
    }
});

function copySelectedText() {
    chrome.tabs.sendMessage(tabs[0].id, {action: "copyText"});
}
