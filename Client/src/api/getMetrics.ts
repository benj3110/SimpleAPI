const url = 'http://localhost:3000'
export const getMetrics = async() => {
	try {
		const response = await fetch(`${url}/metrics`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'authorization': 'mysecrettoken'
			}
		})

		const data = await response.text()
		return data
	}catch (error) {
	throw error as Error
	}
}