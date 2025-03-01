chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "analyzeCode",
        title: "Analyze with AI",
        contexts: ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "analyzeCode") {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ["content.js"]
        });
    }
});
