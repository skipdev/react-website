import { fetch } from 'whatwg-fetch'

const api = async (path, body, method = 'GET') => {
	const response = await fetch(path, {
		body: JSON.stringify(body),
		method,
	})

	return response.json()
}

export const contact = async (name, email, message) => {
	return await api('my-route', {
		name,
		email,
		message,
	})
}
