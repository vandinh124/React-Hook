import React from 'react';

const Link = ({ className, href, children }) => {
	const onClick = (event) => {
		//Hold ctrl and enter to get new tab for that route
		if (event.metaKey || event.ctrlKey) {
			return;
		}
		event.preventDefault();
		//change the route without refreshing the full page
		window.history.pushState({}, '', href);

		//communicate over the route components that url has just changed
		const navEvent = new PopStateEvent('popstate');
		window.dispatchEvent(navEvent);
	};
	return (
		<a onClick={onClick} className={className} href={href}>
			{children}
		</a>
	);
};

export default Link;
