export interface Credentials {
    token: string
    name: string
    email: string
}

function getUser(): Credentials {
    let credentials = localStorage.getItem('credentials')
    if (credentials != null) {
        const _credentials: Credentials = JSON.parse(credentials)
        return {
            token: _credentials.token,
            name: _credentials.name,
            email: _credentials.email,
        }
    }
    return {
        token: "",
        name: "",
        email: "",
    }
}

export var user = getUser()

export function login($credentials: Credentials) {
    localStorage.setItem('credentials', JSON.stringify($credentials))
    user = getUser()
}

export function logout() {
    localStorage.removeItem('credentials')
    user = {
        token: "",
        name: "",
        email: "",
    }
}

export function isLoggedIn() {
    return user.token ? true : false
}

export function currentUser() {
    return user
}
