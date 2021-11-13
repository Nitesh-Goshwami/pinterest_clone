export function loadData(key) {
    try {
        let data = localStorage.getItem(key)
        data = JSON.parse(data)
        return data
    }
    catch (err) {
        return undefined
        // or return
    }
}

// const initState = loadData('state') || { counter: 0, isAuth: false, token: '' }

// to save data we can use a helper function 

export function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data))
}