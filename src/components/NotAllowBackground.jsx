import React from "react";
import Spinner from "./Spinner";
import "./NotAllowBackground.css";

function NotAllowBackground(props) {
	return (
		<div className='gago__not-allow-bg'>
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
					<p>
						{
							"Rotate your device's screen in the opposite direction"
						}
					</p>
				</div>
			</div>
		</div>
	);
}

export default NotAllowBackground;
