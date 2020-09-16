import React from 'react';
import '../styles/BudgetComponent.css';
import { Grid } from '@material-ui/core';

function BudgetComponent() {
	return (
		<div>
			<BudgetHeader />
			<div className="expense__container">
				<Grid container px={2} justify="space-evenly" spacing={2}>
					<Grid item xs={12} sm={6} md={4} lg={3}>
						<TransactionCard />
					</Grid>
					<Grid item xs={12} sm={6} md={4} lg={3}>
						<TransactionCard />
					</Grid>
					<Grid item xs={12} sm={6} md={4} lg={3}>
						<TransactionCard />
					</Grid>
					<Grid item xs={12} sm={6} md={4} lg={3}>
						<TransactionCard />
					</Grid>
					<Grid item xs={12} sm={6} md={4} lg={3}>
						<TransactionCard />
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

export default BudgetComponent;

export function BudgetHeader() {
	return (
		<div className="budgetHeader">
			<h1>Expense Schedule</h1>
			<hr className="budgetHeader__hr" />
		</div>
	);
}

export function TransactionCard() {
	return (
		<div className="transactionCard drop__shadow">
			<div className="transactionCard__header">Card Header</div>
			<div className="transactionCard__body">
				<div>
					<h3 className="row__title">Transaction Date</h3>
					<div className="tvalue transaction__date">10.20.2020</div>
				</div>
				<div>
					<h3 className="row__title">Transaction Amt</h3>
					<div className="tvalue transaction__value__positive">$200</div>
				</div>
				<div>
					<h3 className="row__title">Available Bal</h3>
					<div className="tvalue transaction__value__negative">$200</div>
				</div>
			</div>
		</div>
	);
}
