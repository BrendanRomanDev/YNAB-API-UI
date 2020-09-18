import React, { useRef, useEffect, useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { AccountCircleRounded } from '@material-ui/icons';
import '../styles/AccountHeader.css';

const useOutsideClick = (ref, callback) => {
	const handleClick = (e) => {
		if (ref.current && !ref.current.contains(e.target)) {
			callback();
		}
	};
	useEffect(() => {
		document.addEventListener('click', handleClick);

		return () => {
			document.removeEventListener('click', handleClick);
		};
	});
};

function AccountHeader() {
	const [ userExpand, setUserExpand ] = useState(false);
	const showMenu = () => {
		if (userExpand) {
			return;
		}
	};
	const ref = useRef();
	useOutsideClick(ref, () => {
		setUserExpand(false);
	});

	return (
		<div className="account__header">
			<div className="account__header__main">
				<h1>Hello, Mat</h1>
				<AccountCircleRounded
					ref={ref}
					onClick={() => setUserExpand(!userExpand)}
					className="drop__shadow user__icon"
					fontSize="large"
				/>
			</div>
			<UserSelect userExpand={userExpand} />
		</div>
	);
}

function UserSelect({ userExpand }) {
	return (
		<TransitionGroup component={null}>
			{userExpand && (
				<CSSTransition in={userExpand} timeout={300} classNames="user-menu">
					<div className="user__select">
						<h5 className="user__select__title">User</h5>
						<h5 className="user__select__name">Mat</h5>
						<h5 className="user__select__name">Brendan</h5>
					</div>
				</CSSTransition>
			)}
		</TransitionGroup>
	);
}

export default AccountHeader;
