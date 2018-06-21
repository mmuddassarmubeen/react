import React from 'react';

export default class App extends React.Component {
	
	render(){
		return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <h2>{this.props.description}</h2>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
	}
}