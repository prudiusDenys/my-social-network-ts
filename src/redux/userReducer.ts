export type FollowType = {
	type: 'FOLLOW'
	userId: number
}
export type UnFollowType = {
	type: 'UNFOLLOW'
	userId: number
}
export type SetUsersType = {
	type: 'SET_USERS',
	users: Array<UsersObjType>
}
export type ActionsType = FollowType | UnFollowType | SetUsersType | SetCurrentPageType| SetUsersTotalCountType;
export type UsersType = {
	users:Array<UsersObjType>
}
export type UsersObjType = {
	id: number
	photos: PhotosType
	followed: boolean
	name: string
	status: string
	location: LocationType
}
export type PhotosType = {
	small: string | undefined
	large: string | undefined
}
export type LocationType = {
	city: string
	country: string
}
export type SetCurrentPageType = {
	type: 'SET_CURRENT_PAGE'
	currentPage: number

}
export type SetUsersTotalCountType = {
	type: 'SET_TOTAL_USERS_COUNT'
	count: number

}


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

const initialState = {
	users: [],
	pageSize: 5,
	totalUsersCount : 0,
	currentPage: 1
};

export const userReducer = (state: UsersType = initialState, action: ActionsType) => {
	switch (action.type) {
		case FOLLOW: {
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return {...u, followed: false}
					}
					return u;
				})
			}

		}
		case UNFOLLOW: {
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return {...u, followed: true}
					}
					return u;
				})
			}
		}
		case SET_USERS:{
			return {...state, users: action.users}
		}
		case SET_CURRENT_PAGE:{
			return {...state, currentPage: action.currentPage}
		}
		case SET_TOTAL_USERS_COUNT:{
			return {...state, totalUsersCount: action.count}
		}
		default:
			return state
	}
}

export const followAC = (userId: number): FollowType => {
	return {
		type: FOLLOW,
		userId
	}
}
export const unFollowAC = (userId: number): UnFollowType => {
	return {
		type: UNFOLLOW,
		userId
	}
}
export const setUsersAC = (users: Array<UsersObjType>):SetUsersType => {
	return {
		type: SET_USERS,
		users
	}
}
export const setCurrentPageAC = (currentPage: number):SetCurrentPageType => {
	return {
		type: SET_CURRENT_PAGE,
		currentPage
	}
}
export const setUsersTotalCountAC = (totalUsersCount: number):SetUsersTotalCountType => {
	return {
		type: SET_TOTAL_USERS_COUNT,
		count : totalUsersCount
	}
}