import { timeInterface } from "../interfaces/timeInterface"

const url = 'http://localhost:3000'
export const getTime = async() => {
	try {
		const response = await fetch(`${url}/time`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'authorization': 'mysecrettoken'
			}
		})
		const data: timeInterface = await response.json()
		return data
	}catch (error) {
	throw error as Error
	}
}