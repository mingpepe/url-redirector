chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var url = tabs[0].url;
    if (url.includes("microsoft.com") && url.includes("zh-tw")) {
        console.log("Redirect MSDN page");
        var new_url = url.replace("zh-tw", "en-us");
        chrome.tabs.update(tabs[0].id, { url: new_url });
    }
    else if (url.includes("https://developer.mozilla.org/") && url.includes("zh-TW")) {
        console.log("Redirect MDN page");
        var new_url = url.replace("zh-TW", "en-US");
        chrome.tabs.update(tabs[0].id, { url: new_url });
    }
    else {
        console.log("Do not need to redirect this page");
    }
});

