function onClicked() {
    chrome.storage.local.get({ "twiced": false }, function (value) {
        var twiced = value.twiced;
        console.log("twiced: " + twiced);
        var speed = twiced ? 1 : 2;
        chrome.storage.local.set({ "twiced": !twiced });
        var videos = document.querySelectorAll("video");
        videos.forEach(video => {
            video.playbackRate = Number(speed);
        });
        if (twiced) {
            chrome.action.setIcon({
                path: "icons/icon48.png"
            });
        } else {
            chrome.action.setIcon({
                path: "icons/icon48_disabled.png"
            });
        }
        console.log("setSpeed: " + speed);
    });
}

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: onClicked
    });
});
