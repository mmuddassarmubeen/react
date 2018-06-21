import React from 'react';

export default class Navigation extends React.Component {
	render() {
		var navItems = this.props.items.map(function(item) {
			return (
				<li>
					{item}
				</li>
				)
		})

		return (
			<div>
			<ul>
				{navItems}
			</ul>
			</div>
		)
	}
}