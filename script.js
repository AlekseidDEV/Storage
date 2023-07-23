const input = document.getElementById('input')
const btnSave = document.getElementById('btn_save')
const btnRemove = document.getElementById('btn_remove')
const text = document.getElementById('text')


const showText = () => {
    text.textContent = sessionStorage.getItem('text')
}

btnSave.addEventListener('click', () => {
    sessionStorage.setItem('text', input.value)
    showText()
})

btnRemove.addEventListener('click', () => {
    sessionStorage.clear()
    localStorage.clear()
    showText()
})

showText()

document.cookie = 'name=Alex; max-age=3600'
document.cookie = 'name=Alex; expires=tue, 19 Jan 2024 03:14:07 GMT'

const objCookie = {
    name : 'alex',
    age : 19,
    salary : 'developer'
}
document.cookie = 'user=' + JSON.stringify(objCookie)