import React, {Component} from 'react';

export default class IntroVideo extends Component {
	render(){
		return(
			<div className="main">
				<a className="introbtn" onClick={()=>this.props.onComplete()}>SKIP</a>
			</div>
		)
	}
};
