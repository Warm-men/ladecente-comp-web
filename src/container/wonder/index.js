import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import './index.css';
import banner from '../../res/home_main.png';
import detail_vadio from '../../res/detail_vadio.MP4';
import detail1 from '../../res/detail1.jpg';
import detail2 from '../../res/detail2.jpg';
import a4 from '../../res/a4.jpg';
import a3 from '../../res/a3.png';

import img1a from '../../res/1a.png';
import img1b from '../../res/1b.png';
import img2a from '../../res/2a.png';
import img2b from '../../res/2b.png';
import img3a from '../../res/3a.png';
import img3b from '../../res/3b.png';
import img4a from '../../res/4a.png';
import img4b from '../../res/4b.png';
import img5a from '../../res/5a.png';
import img5b from '../../res/5b.png';
import img6a from '../../res/6a.png';
import img6b from '../../res/6b.png';
import img7a from '../../res/7a.png';
import img7b from '../../res/7b.png';
import img8a from '../../res/8a.png';
import img8b from '../../res/8b.png';
import img9a from '../../res/9a.png';
import img9b from '../../res/9b.png';
import img10a from '../../res/10a.png';
import img10b from '../../res/10b.png';
import img11a from '../../res/11a.png';
import img11b from '../../res/11b.png';
import img12a from '../../res/12a.png';
import img12b from '../../res/12b.png';
import img13a from '../../res/13a.png';
import img13b from '../../res/13b.png';
import img14a from '../../res/14a.png';
import img14b from '../../res/14b.png';
import img15a from '../../res/15a.jpg';
import img15b from '../../res/15b.png';
import img16a from '../../res/16a.png';
import img16b from '../../res/16b.png';
import img17a from '../../res/17a.png';
import img17b from '../../res/17b.png';
import img18a from '../../res/18a.png';
import img18b from '../../res/18b.png';
import img19a from '../../res/19a.png';
import img19b from '../../res/19b.png';
import img20a from '../../res/20a.png';
import img20b from '../../res/20b.png';
import img21a from '../../res/21a.png';
import img21b from '../../res/21b.png';

const wonderData = [
	{
		img1: img1a,
		img2: img1b,
		activeIndex: 1,
	},
	{
		img1: img2a,
		img2: img2b,
		activeIndex: 1,
	},
	{
		img1: img3a,
		img2: img3b,
		activeIndex: 1,
	},
	{
		img1: img4a,
		img2: img4b,
		activeIndex: 1,
	},
	{
		img1: img5a,
		img2: img5b,
		activeIndex: 1,
	},
	{
		img1: img6a,
		img2: img6b,
		activeIndex: 1,
	},
	{
		img1: img7a,
		img2: img7b,
		activeIndex: 1,
	},
	{
		img1: img8a,
		img2: img8b,
		activeIndex: 1,
	},
	{
		img1: img9a,
		img2: img9b,
		activeIndex: 1,
	},
	{
		img1: img10a,
		img2: img10b,
		activeIndex: 1,
	},
	{
		img1: img11a,
		img2: img11b,
		activeIndex: 1,
	},
	{
		img1: img12a,
		img2: img12b,
		activeIndex: 1,
	},
	{
		img1: img13a,
		img2: img13b,
		activeIndex: 1,
	},
	{
		img1: img14a,
		img2: img14b,
		activeIndex: 1,
	},
	{
		img1: img15a,
		img2: img15b,
		activeIndex: 1,
	},
	{
		img1: img16a,
		img2: img16b,
		activeIndex: 1,
	},
	{
		img1: img17a,
		img2: img17b,
		activeIndex: 1,
	},
	{
		img1: img18a,
		img2: img18b,
		activeIndex: 1,
	},
	{
		img1: img19a,
		img2: img19b,
		activeIndex: 1,
	},
	{
		img1: img20a,
		img2: img20b,
		activeIndex: 1,
	},
	{
		img1: img21a,
		img2: img21b,
		activeIndex: 1,
	},
];

export default class Home extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			imgs: wonderData,
		};
	}

	componentDidMount() {
		// if (this.videoRef.current && this.videoRef.current.paused) {
		// setTimeout(() => {
		// 	this.videoRef.current.play();
		// }, 2000);
		// }
	}

	handlePressMenu = () => {
		this.setState({
			showMenu: !this.state.showMenu,
		});
	};

	handlePressMenuItem = (id) => {};

	onClickItem = (item) => {};

	handleItemShow = (item, index, showIndex) => {
		let imgs = [...this.state.imgs];
		imgs[index].activeIndex = showIndex;
		this.setState({ imgs });
	};

	render() {
		const { showMenu, showLogo, imgs } = this.state;
		const { props } = this;
		console.log('🚀 ~ file: index.js ~ line 29 ~ Home ~ render ~ props', props);
		return (
			<div className={'homeContainer detailPageBg'}>
				<Helmet>
					<title>Ladecente</title>
				</Helmet>
				<div className='detailView'>
					<video width='425' height='750' controls autoPlay>
						<source src={detail_vadio} type='video/mp4' />
					</video>
					<div className='detailDescription'>
						<img src={detail1} alt='' className='detailImage' />
						<div className='detailText'>
							AW22首发系列《Wonder Island云岛仙游》，设计灵感“疫情下的 隐秘人格 Persona underthe
							epidemic”，表达对当下与未来的一种、 叙事和展望。
						</div>
					</div>
				</div>
				<img src={detail2} alt='' />

				<div className='detailImagesView'>
					{imgs.map((item, index) => {
						const isShow2 = item.activeIndex === 2;
						const animateStyle = isShow2
							? 'detailImagesItemImg imgFadeOut imageIndex'
							: 'detailImagesItemImg imageIndex';
						return (
							<div
								key={index}
								className='detailImagesItemView'
								onMouseEnter={() => {
									console.log(item, index);
									this.handleItemShow(item, index, 2);
								}}
								onMouseLeave={() => {
									this.handleItemShow(item, index, 1);
								}}
							>
								<img src={item[`img1`]} alt='' className={animateStyle} />
								<img src={item[`img2`]} alt='' className={'detailImagesItemImg'} />
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}
