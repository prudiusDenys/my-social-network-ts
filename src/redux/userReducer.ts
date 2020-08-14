type FollowType = {
	type: 'FOLLOW'
	userId: number
}
type UnFollowType = {
	type: 'UNFOLLOW'
	userId: number
}
type SetUsersType = {
	type: 'SET_USERS',
	users: Array<UsersObjType>
}
type ActionsType = FollowType | UnFollowType | SetUsersType;
export type UsersType = {
	users:Array<UsersObjType>
}
type UsersObjType = {
	id: number
	photoUrl: string
	followed: boolean
	fullName: string
	status: string
	location: LocationType
}
type LocationType = {
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
		case SET_USERS:{
			return {...state, users: [...state.users, ...action.users]}
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