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
				<div className='renewedCenterView'>
					<div className='l7fzCenterImgViw'>
						<img src={l7fz00} alt='' className='l7fzCenterImg' />
						<img src={l7fz01} alt='' className='l7fzCenterImg' />
					</div>
					<div className='renewedViewDesc'>
						{/* <img src={renewed1} alt='' className='renewedCenterImg2' /> */}
						<div className='renewedCenterViewDescText'>
							{`L7FZ特供系列，作为不同应用场景的特定人群而定制的服装\n供应，涵盖了机构，企业，以及特殊人群；\n\n品牌理念是时尚作业，舒适着衣。运用大量环保面料以及服\n务闭环，定位企业形象供应商。规定购买数量，80件起开售。`}
						</div>
					</div>
				</div>
				{/* <div className='l7fzImgView'>
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
				</div> */}
			</div>
		);
	}
}
