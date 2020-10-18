import React from "react";
import classes from "./Pagination.module.css";

type PropsType = {
	totalUsersCount: number
	pageSize: number
	currentPage: number
	onPageChanged: (pageNumber: number) => void
}

export const Pagination = (props: PropsType) => {
	let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
	let pages: Array<number> = []
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

	return(
			<>
				{pages.map(p => {
					return <span key={p.toString()} className={props.currentPage === p ? classes.selectedPage : ''}
											 onClick={(e) => {
												 props.onPageChanged(p)
											 }}>{p}</span>
				})}
			</>
		)
}