//autofill https://github.com/bitwarden/browser/blob/master/src/content/autofill.js
chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["script.js"],
  });
});
