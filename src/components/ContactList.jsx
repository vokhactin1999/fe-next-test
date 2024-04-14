import React from "react";
import "./ContactList.css";
function ContactList(props) {
	return (
		<>
			<div className='contact-social-list'>
				<a target='_blank' href='https://m.me/111087687927395'>
					<img
						className='image-icon'
						src='img-optimize/messenger.png'
						alt=''
					/>
				</a>
				<a target='_blank' href='https://wa.me/84984802030'>
					<img
						className='image-icon'
						src='img-optimize/phone.png'
						alt=''
					/>
				</a>
				<a target='_blank' href='https://t.me/+84984802030'>
					<img
						className='image-icon'
						src='img-optimize/telegram.png'
						alt=''
					/>
				</a>
				<a target='_blank' href='https://zalo.me/0938346221'>
					<img
						className='image-icon'
						src='img-optimize/zalo.png'
						alt=''
					/>
				</a>
			</div>
		</>
	);
}

export default ContactList;
