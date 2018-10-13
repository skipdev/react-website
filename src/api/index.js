import { fetch } from 'whatwg-fetch'
import 'url-search-params'


var URLSearchParams = require('url-search-params');


const api = async (path, body, method = 'GET') => {
  const response = await fetch(path, {
    body: JSON.stringify(body),
    method,
    headers: new Headers({'content-type': 'application/json'}), // Change to application/json
  })

  return response
}

export const contact = async (name, email, message) => {
  const response =  await api('./contact.php', {
    name,
    email,
    message,
  }, 'POST')

  return new ApiResponse(response)
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