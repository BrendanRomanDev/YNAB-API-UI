import React, { useState } from 'react';
import AccountHeader from './components/AccountHeader';
import BudgetComponent from './components/BudgetComponent';
import { users, accounts, transData } from './data';

function App() {
	const [ user, setUser ] = useState({ id: 0 });

	const selectUser = (user) => {
		setUser(user);
	};

	return (
		<div className="app">
			<AccountHeader selectUser={selectUser} />
			<BudgetComponent />
		</div>
	);
}

export default App;
