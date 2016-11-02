import React, {Component} from 'react';
import {connect} from 'react-redux';

class Footer extends Component {
	createSocialItems(){
		return this.props.footer.social.map( function(social,key){
			var style = {
				backgroundImage: `url(${social.image})`
			}
			return (
				<a key={"social"+key} target="_blank" className={social.name} href={social.link} style={style}>
					&nbsp;
				</a>
			)
		}.bind(this));
	}

	render(){
		if (!this.props.footer) return <footer className="footer"></footer>;

		return (
			<footer className="footer col-sm-3 col-xs-6">
				<div className="social hidden-xs">
					{this.createSocialItems()}
				</div>
				<a className="logo" href={this.props.footer.showlink} target="_blank"></a>
				<p className="copyright">
					{this.props.footer.copyright}
				</p>
			</footer>
		)
	}
}

function mapStateToProps(state) {
	return {
		footer: (state.data) ? state.data['footer'] : null
	};
}

export default connect(mapStateToProps)(Footer);
