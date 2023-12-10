document.getElementById('set_darkmode').addEventListener('click', () => {
    chrome.runtime.sendMessage({greeting : 'hello'})
})