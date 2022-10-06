chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var url = tabs[0].url;
    if (url.includes("microsoft.com") && url.includes("zh-tw")) {
        console.log("Redurect this page");
        var new_url = url.replace("zh-tw", "en-us");
        chrome.tabs.update(tabs[0].id, { url: new_url });
    }
    else {
        console.log("Do not need to redirect this page");
    }
});

