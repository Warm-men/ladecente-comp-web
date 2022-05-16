import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';
import './index.css';

import renewed0 from '../../res/renewed0.jpg';
import renewed1 from '../../res/renewed1.jpg';
import renewed11 from '../../res/renewed11.png';
import renewed12 from '../../res/renewed12.png';
import renewed21 from '../../res/renewed21.png';
import renewed22 from '../../res/renewed22.jpg';
import renewed31 from '../../res/renewed31.jpg';
import renewed32 from '../../res/renewed32.png';
import renewed41 from '../../res/renewed41.jpg';
import renewed42 from '../../res/renewed42.jpg';
import renewed51 from '../../res/renewed51.jpg';
import renewed52 from '../../res/renewed52.png';
import renewed61 from '../../res/renewed61.jpg';
import renewed62 from '../../res/renewed62.jpg';
import renewed71 from '../../res/renewed71.jpg';
import renewed72 from '../../res/renewed72.jpg';


const data = [
	renewed11,
	renewed12,
	renewed21,
	renewed22,
	renewed31,
	renewed32,
	renewed41,
	renewed42,
	renewed51,
	renewed52,
	renewed61,
	renewed62,
	renewed71,
	renewed72
];

export default class Renewed extends PureComponent {
	handlePressMenuItem = (id) => {};

	onClickItem = (item) => {};

	render() {
		const { props } = this;
		console.log('🚀 ~ file: index.js ~ line 29 ~ Home ~ render ~ props', props);
		return (
			<div className={'homeContainer renewedBg'}>
				<Helmet>
					<title>Illustration</title>
				</Helmet>
				<div className='renewedCenterView'>
					<img src={renewed0} alt='' className='renewedCenterImg' />
					<div className='renewedViewDesc'>
						<img src={renewed1} alt='' className='renewedCenterImg1' />
						<div className='renewedCenterViewDescText'>
							{`LADECENTE复兴运动系列 ，灵感来自对当代宅文化的观察，试图用复古时兴的方式倡导Fit辣妹的概念，唤起当代人对时尚健康的意识。“接受自己，热爱自己。”`}
						</div>
					</div>
				</div>
				<div className='illImgView'>
					{data.map((item, index) => {
						return <img key={index} src={item} alt='' className='illImgItem' />;
					})}
				</div>
			</div>
		);
	}
}
