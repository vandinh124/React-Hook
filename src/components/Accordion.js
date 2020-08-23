import React, { useState, Fragment } from 'react';

const Accordion = ({ items }) => {
	//Destructoring
	const [ activeIndex, setActiveIndex ] = useState(null);

	//helper function
	const onTitleClick = (index) => {
		setActiveIndex(index);
	};

	const renderItems = items.map((item, index) => {
		const active = index === activeIndex ? 'active' : '';
		return (
			<Fragment key={item.title}>
				<div className={`title ${active}`} onClick={() => onTitleClick(index)}>
					<i className='dropdown icon' />
					{item.title}
				</div>
				<div className={`content ${active}`}>
					<p>{item.content}</p>
				</div>
			</Fragment>
		);
	});

	return <div className='ui styled accordion'>{renderItems}</div>;
};

export default Accordion;
