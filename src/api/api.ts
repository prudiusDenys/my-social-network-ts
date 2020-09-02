import axios from "axios";

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		"API-KEY": "ceb21197-0d60-4a74-81f0-474168f197a3"
	}
});


export const usersAPI = {
	getUsers:(currentPage: number = 1, pageSize: number = 10) => {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
			.then(response => response.data)
	},
	getUsers2: (currentPage: number = 1, pageSize: number = 10) => {
		return instance.get(`follow?page=${currentPage}&count=${pageSize}`)
			.then(response => response.data)
	},
}





