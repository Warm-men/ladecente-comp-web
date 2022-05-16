import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';
import './index.css';
import renewed1 from '../../res/renewed1.jpg';
import l7fz00 from '../../res/l7fz00.jpg';
import l7fz01 from '../../res/l7fz01.jpg';
import l7fz11 from '../../res/l7fz11.png';
import l7fz12 from '../../res/l7fz12.png';
import l7fz13 from '../../res/l7fz13.png';
import l7fz20 from '../../res/l7fz20.jpg';
import l7fz21 from '../../res/l7fz21.png';
import l7fz22 from '../../res/l7fz22.png';
import l7fz30 from '../../res/l7fz30.jpg';
import l7fz31 from '../../res/l7fz31.png';
import l7fz32 from '../../res/l7fz32.png';
import l7fz33 from '../../res/l7fz33.png';
import l7fz40 from '../../res/l7fz40.jpg';
import l7fz41 from '../../res/l7fz41.png';
import l7fz42 from '../../res/l7fz42.png';

const data = [l7fz11, l7fz12, l7fz21, l7fz22, l7fz31, l7fz32, l7fz41, l7fz42];

export default class Renewed extends PureComponent {
	handlePressMenuItem = (id) => {};

	onClickItem = (item) => {};

	render() {
		const { props } = this;
		return (
			<div className={'homeContainer renewedBg'}>
				<Helmet>
					<title>Illustration</title>
				</Helmet>
				<div className='l7fzImgView'>
					<img src={l7fz11} alt='' className='illImgItem3' />
					<img src={l7fz12} alt='' className='illImgItem3' />
					<img src={l7fz13} alt='' className='illImgItem3' />
				</div>
				<div className='l7fzImgView'>
					<img src={l7fz20} alt='' className='illImgItem4' />
				</div>
				<div className='l7fzImgView'>
					<img src={l7fz30} alt='' className='illImgItem4' />
				</div>
				<div className='l7fzImgView'>
					<img src={l7fz40} alt='' className='illImgItem4' />
				</div>
			</div>
		);
	}
}
