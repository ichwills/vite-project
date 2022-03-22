import React, { useCallback, useEffect, useState } from 'react'
import "../style/style.css"
import "../style/App.css"

export function Demo() {
	const [count, setCount] = useState(0);

	function getFetchUrl(query: any) {
		return `https://demo${query}`
	}

	useEffect(() => {
		const id = setInterval(() => {
			setCount(count + 1)
		}, 3000)
		return () => {
			clearInterval(id)
		}
	}, [count])
	useEffect(() => {
		const url = getFetchUrl('react')
	}, [getFetchUrl])
	useEffect(() => {
		const url = getFetchUrl('redux')
	}, [getFetchUrl])
	return (
		<div><h1>{count}</h1></div>
	)
}
