import React from 'react';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/core/styles';
import '../styles/AccountAccordion.css';

export const AccountAccordion = () => {
	const [ expanded, setExpanded ] = React.useState(false);
	const handleChange = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
	};

	return (
		<div className="sticky__accordion">
			<div className="accounts-total account__data__value drop__shadow">$9,050.00</div>
			<Accordion square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
					aria-controls="panel1d-content"
					id="panel1d-header"
				>
					<h3 className="account__dropdown">Accounts</h3>
				</AccordionSummary>
				<AccordionDetails className="border__bottom">
					<AccountData />
				</AccordionDetails>
				<AccordionDetails className="border__bottom">
					<AccountData />
				</AccordionDetails>
			</Accordion>
		</div>
	);
};

export const AccountData = () => {
	return (
		<div className="account__data">
			<h4 className="account__data__name">GFCU</h4>
			<div className="account__data__value drop__shadow">$4,075</div>
		</div>
	);
};

// Custom Material UI Styling
const Accordion = withStyles({
	root     : {
		backgroundColor      : '#8E99B8',
		color                : 'white',
		border               : '1px solid rgba(0, 0, 0, .125)',
		boxShadow            : 'none',
		'&:not(:last-child)' : {
			borderBottom : 0
		},
		'&:before'           : {
			display : 'none'
		},
		'&$expanded'         : {
			margin : 'auto'
		}
	},
	expanded : {}
})(MuiAccordion);

const AccordionSummary = withStyles({
	root     : {
		paddingLeft  : '40px',
		paddingRight : '40px',
		borderBottom : '1px solid rgba(0, 0, 0, .125)',
		marginBottom : -1,
		minHeight    : 56,
		'&$expanded' : {
			minHeight : 56
		}
	},
	content  : {
		'&$expanded' : {
			margin : '12px 0'
		}
	},
	expanded : {}
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
	root : {
		paddingLeft     : '40px',
		paddingRight    : '40px',
		backgroundColor : '#EBEEF4',
		color           : '#8E99B8',
		padding         : theme.spacing(2)
	}
}))(MuiAccordionDetails);

export default AccountAccordion;
