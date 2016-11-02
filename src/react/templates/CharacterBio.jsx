import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class CharacterBio extends Component {
	handleClick(n){
		var c = this.props.current+n;
		if (c<0) c = this.props.data.length-1;
		if (c>(this.props.data.length-1)) c = 0;

		var direction = (n>0) ? "forward" : "backward";

		this.props.changeItem(c, direction);
	}

	render(){
		var bio = this.props.data[this.props.current];
		if (!bio) return null;

		return(

			<div className="main">
				<div className="gradient"></div>
				<div className={"slides "+this.props.direction}>
					<ReactCSSTransitionGroup transitionName="slider" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
						<div className="slide" key={bio.name}>
							<div className="copy">
								<div className="title">
									<a className="previous" onClick={()=>this.handleClick(-1)}></a>
									<div className="name">
										<h2 className="uppercase center" dangerouslySetInnerHTML={{ __html:bio.name}}></h2>
										<h4 className="actor uppercase center" dangerouslySetInnerHTML={{ __html:bio.actor}}></h4>
									</div>
									<a className="next" onClick={()=>this.handleClick(1)}></a>
								</div>

								<p className="description justify" dangerouslySetInnerHTML={{ __html:bio.desc}}></p>
							</div>
						</div>
					</ReactCSSTransitionGroup>
				</div>
			</div>

		)
	}
};
