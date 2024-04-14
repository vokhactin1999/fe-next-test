import React from "react";
import "./Spinner.css";
function Spinner({ text = "Welcome to Gago Studio" }) {
	return (
		<div className='spinner-container'>
			<div>
				<img
					src='img-optimize/Logo.svg'
					width='85px'
					height='105px'
					alt=''
				/>
			</div>
			<div>
				<p>{text}</p>
			</div>
			<div>
				<img
					src='img-optimize/Spin-1s-100px.gif'
					width='100px'
					height='100px'
					alt=''
					className='welcome-loading'
				/>
			</div>
		</div>
	);
}

export default Spinner;
