import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class CastBio extends Component {
	handleClick(n){
		var c = this.props.current+n;
		if (c<0) c = this.props.data.length-1;
		if (c>(this.props.data.length-1)) c = 0;

		var direction = (n>0) ? "forward" : "backward";

		this.props.changeItem(c, direction);
	}

	createParagraphs(bio){
		return bio.desc.map(function(paragraph,key){
			return (

				<p className="desc justify" key={"paragraph"+key} dangerouslySetInnerHTML={{ __html:paragraph }}></p>

			)
		}.bind(this));
	}

	addImage(bio){
		if (bio.image) {
			var style = {
				"backgroundImage": `url(${bio.image})`
			}

			return (
				<div className="image">
					<div className="img" style={style}></div>
				</div>
			);
		}
	}

	render(){
		var bio = this.props.data[this.props.current];
		if (!bio) return null;

		return(

			<div className={"main "+this.props.direction}>
				<ReactCSSTransitionGroup transitionName="slider" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
					<div className="slide" key={bio.name}>
						<div className="copy">
							{ this.addImage(bio) }
							<div className="title">
								<a className="previous" onClick={()=>this.handleClick(-1)}></a>
								<div className="name">
									<h2 className="uppercase center" dangerouslySetInnerHTML={{ __html:bio.name}}></h2>
									<h4 className="role center uppercase italic" dangerouslySetInnerHTML={{ __html:bio.role}}></h4>
								</div>
								<a className="next" onClick={()=>this.handleClick(1)}></a>
							</div>
							{ this.createParagraphs(bio) }
						</div>
					</div>
				</ReactCSSTransitionGroup>
			</div>

		)
	}
};
