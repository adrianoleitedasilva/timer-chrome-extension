const timeElement = document.getElementById("time")
const nameElement = document.getElementById("name")
const currentTime = new Date().toLocaleTimeString()
timeElement.textContent = `O Tempo está em: ${currentTime}`

chrome.action.setBadgeText({
    text: "Time",
}, () => {
    console.log("Finalizado!")
})

chrome.storage.sync.get(["name"], (res) => {
    const name = res.name ?? "???"
    nameElement.textContent = `Seu nome é: ${name}`
})