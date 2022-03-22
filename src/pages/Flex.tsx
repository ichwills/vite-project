// import React from 'react'
import "../style/style.css"

export function Flex() {
	return (
		<div className='HolyGrail'>
			<header>...</header>
			<div className="HolyGrail-body">
				<main className="HolyGrail-content">
					<div className="InputAddOn">
						<span className="InputAddOn-item">...</span>
						<input className="InputAddOn-field" />
						<button className="InputAddOn-item">...</button>
					</div>
					<div className="Media">
						<img className="Media-figure" src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071326.png" alt="" />
						<p className="Media-body">...</p>
					</div>
				</main>
				<nav className="HolyGrail-nav">...</nav>
				<aside className="HolyGrail-ads">...</aside>
			</div>
			<footer>...</footer>
		</div>
	)
}