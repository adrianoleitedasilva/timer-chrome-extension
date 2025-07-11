const timeElement = document.getElementById("time")
const currentTime = new Date().toLocaleTimeString()
timeElement.textContent = `O Tempo está em: ${currentTime}`

chrome.action.setBadgeText({
    text: "Time",
}, () => {
    console.log("Finalizado!")
})