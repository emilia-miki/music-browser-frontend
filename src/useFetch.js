const backendBaseUrl = "http://localhost:5173";

/**
  Fetch data from the backend API.
  @param {string} endpoint - The API endpoint to fetch data from (ex. "/explore")
  @returns {Promise} A promise with the data or an Error response
*/
export default async function useFetch(endpoint, method = "GET") {
	try {
		const response = await fetch(backendBaseUrl + endpoint, { method })
		console.log("response: " + response)
		const data = await response.json()
		console.log("data: " + data)
		return data
	} catch (err) {
		console.log("err: " + err)
		return { message: err }
	}
}
