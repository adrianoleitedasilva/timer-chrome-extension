const nameInput = document.getElementById("name-input")
const saveBtn = document.getElementById("save-btn")

saveBtn.addEventListener("click", () => {
    const name = nameInput.value
    chrome.storage.sync.set({
        name,
    }, () => {
        console.log(`Nome armazenado foi de ${name}`)
    })
})

chrome.storage.sync.get(["name", "test"], (res) => {
    nameInput.value = res.name ?? "???"
    console.log(res)
})