import React, { Component } from 'react';
import './Detail.scss';

import bg from '../../assets/images/detail-bk.png';
export default class Detail extends Component {

	constructor(props) {
		super(props);
		this.state = {
			dota_rate: 10,
			fortnite_rate: 2
		}
	}
	render() {
		const dota2 = [];
		const fortnite = [];
		for (let i = 0; i < 20; i++) {
			const dotaClassName = this.state.dota_rate >= i ? 'active' : 'none';
			const fortniteClassName = this.state.fortnite_rate >= i ? 'active' : 'none';
			dota2.push(<span className={dotaClassName} />);
			fortnite.push(<span className={fortniteClassName} />);
		}

		return (
				<div className="detail-page">
				<div className="position-relative">
					<img src={bg} style={{width: '100%'}}/>
					<div className="d-flex dota2-rate">
						<i className="material-icons">favorite</i>
						<span>
							<div className="rate-wrapper d-flex rate-wrapper justify-content-between">
								{dota2}
							</div>
							<div className="vote-text"><strong>DOTA2&nbsp;&nbsp;</strong>2.8K upvotes</div>
						</span>
						
					</div>
					<div className="d-flex fortnite-rate">
						<i className="material-icons">favorite</i>
						<span>
							<div className="rate-wrapper d-flex rate-wrapper justify-content-between">
								{fortnite}
							</div>
							<div className="vote-text"><strong>FORTNITE&nbsp;&nbsp;</strong>2.8K upvotes</div>
							{fortnite}
						</span>
						
					</div>
				</div>
				<div className="pl-3 pr-3 d-flex justify-content-around bd-highlight detail-vote">
					<button className="ml-0 w-50 btn btn-grad btn-lg btn-dota2">Vote for <strong>DOTA 2</strong></button>
					<button className="mr-0 w-50 btn btn-grad btn-lg btn-fortnite">Vote for <strong>FORTNITE</strong></button>
				</div>
				<div className="detail-comment d-flex">
					<div className="w-25 ml-3 round-box" ><input className="w-100 input-name" placeholder="Your name"/></div>
					<div className="mr-3 round-box ml-2 flex-grow-2 btn-with-icon" >
						<input className="input-comment" placeholder="Type a comment here..."/>
						<button className="btn"><i className="material-icons">near_me</i></button>
					</div>
				</div>
				<div className="detail-feed">
					<div className="d-flex">
						<span className="alias">Bloomberg</span>
						<span className="time ml-2">3 hours ago</span>
						<span className="btn tool ml-auto">
							<i className="material-icons">more_horiz</i>
						</span>
					</div>
					<div className="detail-feed-content">
						You might also have noticed that some native HTML input properties are missing from the TextField component. This is on purpose. The component takes care of the most used properties, then it's up to the user to use the underlying component shown in the following demo. Still, you can use inputProps (and InputProps, InputLabelProps properties) if you want to avoid some boilerplate
					</div>
				</div>

				<div className="detail-feed">
					<div className="d-flex">
						<span className="alias">Bloomberg</span>
						<span className="time ml-2">3 hours ago</span>
						<span className="btn tool ml-auto">
							<i className="material-icons">more_horiz</i>
						</span>
					</div>
					<div className="detail-feed-content">
						You might also have noticed that some native HTML input properties are missing from the TextField component. This is on purpose. The component takes care of the most used properties, then it's up to the user to use the underlying component shown in the following demo. Still, you can use inputProps (and InputProps, InputLabelProps properties) if you want to avoid some boilerplate
					</div>
				</div>

				<div className="detail-feed">
					<div className="d-flex">
						<span className="alias">Bloomberg</span>
						<span className="time ml-2">3 hours ago</span>
						<span className="btn tool ml-auto">
							<i className="material-icons">more_horiz</i>
						</span>
					</div>
					<div className="detail-feed-content">
						You might also have noticed that some native HTML input properties are missing from the TextField component. This is on purpose. The component takes care of the most used properties, then it's up to the user to use the underlying component shown in the following demo. Still, you can use inputProps (and InputProps, InputLabelProps properties) if you want to avoid some boilerplate
					</div>
				</div>

				<div className="detail-feed">
					<div className="d-flex">
						<span className="alias">Bloomberg</span>
						<span className="time ml-2">3 hours ago</span>
						<span className="btn tool ml-auto">
							<i className="material-icons">more_horiz</i>
						</span>
					</div>
					<div className="detail-feed-content">
						You might also have noticed that some native HTML input properties are missing from the TextField component. This is on purpose. The component takes care of the most used properties, then it's up to the user to use the underlying component shown in the following demo. Still, you can use inputProps (and InputProps, InputLabelProps properties) if you want to avoid some boilerplate
					</div>
				</div>
				</div>
		);
	}
}
  
