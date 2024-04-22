async function reloadTabInEnglish() {
    const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});

    const newUrl = new URL(tab.url);
    newUrl.searchParams.set('hl', 'en');

    chrome.tabs.update({url: newUrl.toString()});
}

chrome.action.onClicked.addListener(reloadTabInEnglish);