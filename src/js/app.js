import React from 'react';
import Navigation from './Navigation';

export default class App extends React.Component {
	
	render(){
    let items = ['One', 'Two'];

		return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <h2>{this.props.description}</h2>
        <Navigation items={items}/>
      </div>
    );
	}
}