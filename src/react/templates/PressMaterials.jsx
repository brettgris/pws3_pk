import React, {Component} from 'react';

export default class PressMaterials extends Component {
	render(){
		return(

			<div className="main col-xs-12 col-sm-12 col-lg-9 col-lg-offset-1">
				{ this.createMediaRoom() }
				{ this.createDownloads() }
				{ this.createContacts() }
			</div>

		)
	}

	createMediaRoom(){
		return (
			<div>
				<h3>HIGH RESOLUTION DOWNLOADS</h3>
				<div className="list">
					{ this.createMediaRoomItems() }
				</div>
				<div className="clear"></div>
			</div>
		)
	}

	createMediaRoomItems(){
		return this.props.data.mediaroom.map(function(item,key){
			return (
				<div className="mediaroom clickitem col-sm-12" key={"mediaroom"+key}>
					<a className="content" href={item.link} target="_blank">
						<div className="copy">
							<div className="name uppercase">{item.name}</div>
						</div>
					</a>
				</div>
			)
		}.bind(this));
	}

	createDownloads(){
		return (
			<div>
				<h3>DOWNLOAD PDF FILES</h3>
				<div className="list">
					{ this.createDownloadItems() }
				</div>
				<div className="clear"></div>
			</div>
		)
	}

	createDownloadItems(){
		return this.props.data.downloads.map(function(item,key){
			return (
				<div className="download clickitem col-sm-4" key={"download"+key}>
					<a className="content" href={item.link} target="_blank">
						<div className="copy">
							<div className="name uppercase">{item.name}</div>
							<div className="cta uppercase">Click here to download</div>
						</div>
					</a>
				</div>
			)
		}.bind(this));
	}

	createContacts(){
		return (
			<div>
				<h3>PRESS CONTACTS</h3>
				<div className="list">
					{ this.createContactItems() }
				</div>
				<div className="clear"></div>
			</div>
		)
	}

	createContactItems(){
		return this.props.data.contacts.map(function(item,key){
			return (
				<div className="contact clickitem col-sm-6" key={"contact"+key}>
					<a className="content" href={"mailto:"+item.email+"?Subect="+item.subject} target="_blank">
						<div className="copy">
							<div className="name uppercase">{item.name}</div>
							<div className="company">{item.company}</div>
							<div className="phone">{item.phone}</div>
							<div className="email">{item.email}</div>
						</div>
					</a>
				</div>
			)
		}.bind(this));
	}
};
