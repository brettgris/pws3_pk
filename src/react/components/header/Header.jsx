import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {setSection} from '../../actions/actions.jsx';

class Header extends Component {
	handleClick(obj){
		this.props.setSection( obj );
	}

	render(){
		return (
			<div className="header col-xs-6 col-sm-3">
				<a className="titleart" onClick={ ()=>this.handleClick(this.props.sections[0]) }></a>
				<div className="tunein"></div>
				<a className="mobilebtn" onClick={()=>this.props.handleMobileMenu()}>
					<div>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</a>
				<div className="logo"></div>
			</div>
		);
	}

	showMenu(){

	}
}

function mapStateToProps(state) {
	return {
		sections: (state.data) ? state.data['sections'] : null
	};
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		setSection: setSection
	},dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
