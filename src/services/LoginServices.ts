import * as ApiConnector from '@/utils/ApiConector'

export function login($email: string, $password: string) {
  return new Promise((resolve, reject) => {
    ApiConnector.get('/api/v1/farmacia-tech/auth', {
      email: $email,
      password: $password,
    })
      .then(resolve)
      .catch(reject)
  })
}
