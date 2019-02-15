import React, { Component } from 'react';

import './Header.scss';
export default class Header extends Component {
	render() {
		return (
			<div className="fixed-top">
				<nav className="pl-3 pr-3 navbar navbar-expand-lg header-color mb-0 rounded-0">
					<a className="navbar-brand mr-0" href="#0">
						<i className="material-icons arrow-color">arrow_back_ios</i>
					</a>
					<a className="navbar-brand mr-auto nav-title-wrapper pt-1" href="#0">
						<div className="nav-title"><span>DOTA2 VS FORTNITE</span></div>
						<div className="nav-time"><i className="material-icons">access_time</i><span>09:54:26 remaining to vote</span></div>
					</a>

					<a className="navbar-right" href="#0">
						<i className="material-icons arrow-color">launch</i>
					</a>
					<a className="navbar-right" href="#0">
						<i className="material-icons arrow-color">more_vert</i>
					</a>
				</nav>
			</div>
		);
	}
}

