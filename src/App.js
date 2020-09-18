import React, { useState } from 'react';

import AccountHeader from './components/AccountHeader';
import AccountAccordion from './components/AccountAccordion';
import BudgetComponent from './components/BudgetComponent';
import BudgetScroller from './components/BudgetScroller';
import { users, accounts, transData } from './data';

function App() {
	const [ user, setUser ] = useState({ id: 0 });

	const selectUser = (user) => {
		setUser(user);
	};
	return (
		<div className="app">
			<AccountHeader selectUser={selectUser} users={users} />
			<AccountAccordion />
			<BudgetComponent users={users} accounts={accounts} transData={transData} />
			<BudgetScroller upcomingExp={transData} />
		</div>
	);
}

export default App;
