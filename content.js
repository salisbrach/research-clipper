function copyTextToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "copyText") {
        const selectedText = window.getSelection().toString();
        const url = window.location.href;
        const currentDate = new Date().toISOString().split('T')[0];
        const formattedText = `> ${selectedText}\n\n[${currentDate}](${url})`;
        copyTextToClipboard(formattedText);
    }
});

