interface Credentials {
  token?: String | null | undefined;
  name?: string | null | undefined;
  email?: string | null | undefined;
}

function getUser() : Credentials {
    let credentials = localStorage.getItem('credentials')
    if (credentials != null) {
       const _credentials : Credentials = JSON.parse(credentials)
        return { 
            token: _credentials.token,
            name: _credentials.name,
            email: _credentials.email,
        }
    }
    return {
        token: null,
        name: null,
        email: null
    }
}

export var user = getUser();

export function login($credentials: Credentials) {
  localStorage.setItem('credentials', JSON.stringify($credentials))
  user = getUser()
}

export function logout() {
  localStorage.removeItem('credentials')
  user = {}
}

export function isLogedIn() {
  return user != null
}

export function currentUser() {
  return user
}
