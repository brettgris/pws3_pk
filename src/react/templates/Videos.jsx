import React, {Component} from 'react';

export default class Videos extends Component {
	constructor(props){
		super(props);

		this.createVisible = this.createVisible.bind(this);
	}

	render(){
		return(
			<div className="main col-xs-12 col-sm-10 col-sm-offset-1 col-lg-8 col-lg-offset-2">
				{ this.createVisible() }
			</div>
		)
	}

	createVisible(){
		if (this.props.current==0){

			return (
				<div className="list">
					{ this.createThumbs() }
				</div>
			)

		} else {
			var video = this.props.data[this.props.current-1];
			if (!video) return null;
			return (
				<div className="player">
					<div className="center">
						<a className="closebtn uppercase" onClick={ ()=>this.props.changeItem(0) }>Click Here to Close Video</a>
					</div>
					<div className="videoplayer">
						<iframe width="100%" height="100%" frameBorder="0" src={video.path}></iframe>
					</div>
					<h4 className="title uppercase">{video.name}</h4>
				</div>
			)

		}
	}

	createThumbs(){
		return this.props.data.map(function(item,key){
			var style = {
				'backgroundImage': `url(${item.image})`
			}

			return (
				<div className="thumb col-lg-12" key={"videothumb"+key} onClick={ ()=>this.props.changeItem(key+1)}>
					<div className="content" style={style}>
						<div className="copy">
							<div className="name uppercase">{item.name}</div>
							<div className="cta uppercase">Click here to play</div>
						</div>
					</div>
				</div>
			)
		}.bind(this));
	}
};
