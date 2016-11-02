import React, {Component} from 'react';

export default class Synopsis extends Component {
	render(){
		return(
			<div className="main">
				<div className="gradient"></div>
				<div className="tagline">
					<img className="img img-responsive" src={this.props.data.tagline} />
				</div>
				{this.createSynopsis()}
			</div>

		)
	}

	createSynopsis(){
		return this.props.data.synopsis.map(function(item,key){
			return (
				<p className="copy" key={"synopsis"+key} dangerouslySetInnerHTML={{ __html:item}}></p>
			)
		})
	}
};
