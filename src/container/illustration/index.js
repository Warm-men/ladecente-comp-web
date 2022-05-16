import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';
import './index.css';

import illustration0 from '../../res/illustration0.jpg';
import illustration11 from '../../res/illustration11.png';
import illustration12 from '../../res/illustration12.jpg';
import illustration21 from '../../res/illustration21.png';
import illustration22 from '../../res/illustration22.png';
import illustration31 from '../../res/illustration31.jpg';
import illustration32 from '../../res/illustration32.png';
import illustration41 from '../../res/illustration41.png';
import illustration42 from '../../res/illustration42.png';

const data = [
	illustration11,
	illustration12,
	illustration21,
	illustration22,
	illustration31,
	illustration32,
	illustration41,
	illustration42,
];

export default class Home extends PureComponent {
	handlePressMenuItem = (id) => {};

	onClickItem = (item) => {};

	render() {
		const { props } = this;
		console.log('🚀 ~ file: index.js ~ line 29 ~ Home ~ render ~ props', props);
		return (
			<div className={'homeContainer detailPageBg'}>
				<Helmet>
					<title>Illustration</title>
				</Helmet>
				<div className='illTopView'>
					<div className='illTopViewText'>
						LADECENTE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;☓&nbsp;&nbsp;&nbsp;&nbsp;XIE WANG PING
					</div>
				</div>
				<div className='illCenterView'>
					<img src={illustration0} alt='' className='topCenterImg' />
					<div className='illCenterViewDesc'>
						<div className='illCenterViewDescText'>
							{`2021年，LADECENTE与海外艺术家谢王萍的跨界合作系列 《Illustration Rose》\n\n灵感来源于《疫情下的隐秘人格Persona Under the epidemic 》，作为Z世代对于后疫情心理上的观察，而出于同种话题的契合造就了此次跨界合作。\n\n\n\n\n\n随着社交媒体的不断发展，Z世代们在互联网共融共生，其中出现内卷，焦虑，抑郁等众多情绪标签；\n\nLADECENTE想通过跨界语言实现在时装上的情绪表达，影射出现实状况，获得人格多样性的表达。`}
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
