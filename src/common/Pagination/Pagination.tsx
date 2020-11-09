import React, {useState} from "react";
import classes from "./Pagination.module.css";

type PropsType = {
	totalItemsCount: number
	pageSize: number
	currentPage: number
	onPageChanged: (pageNumber: number) => void
}

export const Pagination = (props: PropsType) => {
	let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
	let pages: Array<number> = []
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

	const portionSize = 10;

	// говорим сколько страниц хотим показыват на странице
	let portionCount = Math.ceil(pagesCount / portionSize)
	let [portionNumber, setPortionNumber] = useState(1)
	// находим первый элемент новой порции
	let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
	// находим последний элемент новой страницы
	let rightPortionPageNumber = (portionNumber) * portionSize;


	return (
		<div className={classes.pagination}>
			<div>
				{portionNumber > 1 && <button className={classes.btnPrev} onClick={() => {
					setPortionNumber(portionNumber - 1)
				}}>Prev</button>}
			</div>
			{
				pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
					.map(p => {
						return <span className={props.currentPage === p ? classes.selectedPage : ''}
												 onClick={(e) => {
													 props.onPageChanged(p)
												 }}>{p}</span>
					})
			}

			<div>
				{portionCount > portionNumber && <button className={classes.btnNext} onClick={() => {
					setPortionNumber(portionNumber + 1)
				}}>Next</button>}
			</div>
		</div>
	)
}