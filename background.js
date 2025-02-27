chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      return { cancel: true };
    },
    {
      urls: [
        "*://www.youtube.com/*ad*",
        "*://googleads.g.doubleclick.net/*",
        "*://static.doubleclick.net/*"
      ]
    },
    ["blocking"]
  );
  