import { fetch } from 'whatwg-fetch'

export const contact = async (name, email, message) => {
  const response =  await api('./contact.php', {
    name,
    email,
    message,
  }, 'POST')

  return new ApiResponse(response)
}

exports.onClientEntry = () => {
//keep this
}

const api = async (path, body, method = 'GET') => {
  const response = await fetch(path, {
    body: JSON.stringify(body),
    method,
    headers: new Headers({'content-type': 'application/x-www-form-urlencoded'}), // Change to application/json
  })

  return response
}

class ApiResponse {
  response

  constructor(response) {
    this.response = response
  }

  get ok() {
    return this.response.headers.status === 200
  }
}

