const setDataLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data))
}

const getDataLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key)) ?? []
}


export { setDataLocalStorage, getDataLocalStorage }