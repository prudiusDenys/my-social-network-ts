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
export type ActionsType = FollowType | UnFollowType | SetUsersType;
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


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const initialState = {
	users: []
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