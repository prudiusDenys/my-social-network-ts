import {usersAPI} from "../api/api";

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
export type ActionsType =
	FollowType
	| UnFollowType
	| SetUsersType
	| SetCurrentPageType
	| SetUsersTotalCountType
	| ToggleIsFetchingType
	| ToggleFollowingProgressType;
export type UsersType = {
	users: Array<UsersObjType>
	pageSize: number
	totalUsersCount: number
	currentPage: number
	isFetching: boolean
	followingProgress: Array<number>
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
export type ToggleIsFetchingType = {
	type: 'TOGGLE_IS_FETCHING'
	isFetching: boolean
}
export type ToggleFollowingProgressType = {
	type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
	isFetching: boolean
	userId: number
}

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

const initialState = {
	users: [],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: true,
	followingProgress: []
};

export const userReducer = (state: UsersType = initialState, action: ActionsType) => {
	debugger
	switch (action.type) {
		case FOLLOW: {
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
		case UNFOLLOW: {
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
		case SET_USERS: {
			return {...state, users: action.users}
		}
		case SET_CURRENT_PAGE: {
			return {...state, currentPage: action.currentPage}
		}
		case SET_TOTAL_USERS_COUNT: {
			return {...state, totalUsersCount: action.count}
		}
		case TOGGLE_IS_FETCHING: {
			return {...state, isFetching: action.isFetching}
		}
		case TOGGLE_IS_FOLLOWING_PROGRESS: {
			return {
				...state,
				followingProgress: action.isFetching
					? [...state.followingProgress, action.userId]
					: state.followingProgress.filter(id => id != action.userId)
			}
		}
		default:
			return state
	}
}

export const follow = (userId: number): FollowType => {
	return {
		type: FOLLOW,
		userId
	}
}
export const unFollow = (userId: number): UnFollowType => {
	return {
		type: UNFOLLOW,
		userId
	}
}
export const setUsers = (users: Array<UsersObjType>): SetUsersType => {
	return {
		type: SET_USERS,
		users
	}
}
export const setCurrentPage = (currentPage: number): SetCurrentPageType => {
	return {
		type: SET_CURRENT_PAGE,
		currentPage
	}
}
export const setTotalUsersCount = (totalUsersCount: number): SetUsersTotalCountType => {
	return {
		type: SET_TOTAL_USERS_COUNT,
		count: totalUsersCount
	}
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingType => {
	return {
		type: TOGGLE_IS_FETCHING,
		isFetching
	}
}
export const toggleFollowingProgress = (isFetching: boolean, userId: number): ToggleFollowingProgressType => {
	return {
		type: TOGGLE_IS_FOLLOWING_PROGRESS,
		isFetching,
		userId
	}
}

export const getUsers = (currentPage: number, pageSize: number) => {
	return (dispatch: Function) => {
		dispatch(toggleIsFetching(true))
		usersAPI.getUsers(currentPage, pageSize).then(data => {
			dispatch(toggleIsFetching(false))
			dispatch(setUsers(data.items))
			dispatch(setTotalUsersCount(data.totalCount))
		})
	}
}