import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchData, setSection, changeVideo} from '../actions/actions.jsx';

import Header from '../components/header/Header.jsx';
import Menu from '../components/menu/Menu.jsx';
import MobileMenu from '../components/menu/MobileMenu.jsx';
import Footer from '../components/footer/Footer.jsx';
import VideoPlayer from '../components/videoplayer/VideoPlayer.jsx';

import Templates from '../templates/Templates.jsx';
import SideMenu from '../components/sidemenu/SideMenu.jsx'

class BasePage extends Component {
	constructor(props){
		super(props);

		this.state = {
			direction: "forward",
			current: 0,
			mobilemenu: false
		}

		this.class = null;
		this.changeItem = this.changeItem.bind(this);
		this.loadSection = this.loadSection.bind(this);
		this.handleMobileMenu = this.handleMobileMenu.bind(this);

		this.props.fetchData();
	}

	componentWillUpdate(n){
		if( n.section.class != this.class ){
			this.class = n.section.class;
			this.setState({
				current: 0
			});
		}
	}

	changeItem(n,direction){
		direction = (direction) ? direction : "forward";

		if (this.props.section.content[n]&&(this.props.section.content[n]['video']||this.props.section.content[n]['background'])){
			this.props.changeVideo(this.props.section.content[n]);
		}

		this.setState({
			current: n,
			direction: direction
		});
	}

	loadSection(){
		this.props.setSection( this.props.sections[this.props.section.onComplete] )
	}

	addMobileMenu(){
		if (this.state.mobilemenu) {
			return (
				<MobileMenu handleMobileMenu={this.handleMobileMenu} />
			)
		} else return null;
	}

	handleMobileMenu(){
		this.setState({
			mobilemenu: !this.state.mobilemenu
		});
	}



	render(){
		if (!this.props.section) return null;

		var Main = (Templates[this.props.section.maincontent]) ? Templates[this.props.section.maincontent]: "div";

		return (
			<div className="wrapper">
				<div className="leftside">
					<Header handleMobileMenu={this.handleMobileMenu}/>
					<Menu />
					<Footer />
				</div>

				{ this.addMobileMenu() }

				<div className={"page "+this.props.section.class}>
					<div className="left-column">
						<div>&nbsp;</div>
					</div>
					<div className="main-column">
						<Main data={this.props.section.content} changeItem={this.changeItem} current={this.state.current} direction={this.state.direction} onComplete={this.loadSection} />
					</div>
					{ (this.props.section.sidemenu) ? <SideMenu data={this.props.section.content} changeItem={this.changeItem} current={this.state.current} /> : null }
				</div>

				<VideoPlayer loop={this.props.section.loop} onComplete={this.loadSection} />
			</div>
		);
	}
};

function mapStateToProps(state) {
	return {
		section: (state.section) ? state.section : null,
		sections: (state.data) ? state.data['sections'] : null
	};
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		fetchData: fetchData,
		setSection: setSection,
		changeVideo: changeVideo
	},dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BasePage);
