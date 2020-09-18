import React from 'react';
import '../styles/BudgetComponent.css';
import { Grid } from '@material-ui/core';

function BudgetComponent(props) {
	const { users, accounts, transData } = props;

	return (
		<div>
			<BudgetHeader />
			<div className="expense__container">
				<Grid container px={2} justify="space-evenly" spacing={2}>
					{transData.map((trans) => {
						return (
							<Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
								<TransactionCard trans={trans} />
							</Grid>
						);
					})}
				</Grid>
			</div>
		</div>
	);
}

export default BudgetComponent;

export function BudgetHeader() {
	return (
		<div className="budgetHeader">
			<h1>Transaction Schedule</h1>
			<hr className="budgetHeader__hr" />
		</div>
	);
}

export function TransactionCard({ trans }) {
	const { id, source, transactionDate, transactionAmt, availBal } = trans;
	return (
		<div>
			<div className="transactionCard__date">
				<h4 className="transactionCard__date__value">{transactionDate}</h4>
			</div>
			<div className="transactionCard drop__shadow">
				<div className="transactionCard__header">{source}</div>
				<div className="transactionCard__body">
					<div>
						<h3 className="row__title">Account</h3>
						<div className={'tvalue transaction__account'}>GFCU</div>
					</div>
					<div>
						<h3 className="row__title">Amount</h3>
						<div
							className={
								transactionAmt > 0 ? (
									'tvalue transaction__value__positive'
								) : (
									'tvalue transaction__value__negative'
								)
							}
						>
							{transactionAmt}
						</div>
					</div>
					<div>
						<h3 className="row__title">Bal</h3>
						<div
							className={
								availBal > 0 ? (
									'tvalue transaction__value__positive'
								) : (
									'tvalue transaction__value__negative'
								)
							}
						>
							{availBal}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
