import { PureComponent } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import './index.css';
import banner from '../../res/home_main.png';
import homeBanner0 from '../../res/homeBanner0.gif';
import menu from '../../res/menu1.png';
import shanchu from '../../res/shanchu.png';
import a1 from '../../res/a1.png';
import a2 from '../../res/a2.png';
import a3 from '../../res/a3.png';
import a4 from '../../res/a4.jpg';
import a5 from '../../res/a5.png';
import a6 from '../../res/a6.png';
import logo1 from '../../res/logo1.png';

const menuData = [
	{
		id: 'wonder',
		label: '2022 AW COLLECTION',
		icon: null,
	},
	{
		id: 'illustration',
		label: 'PERSONA艺术家合作系列',
		icon: null,
	},
	{
		id: 'renewed',
		label: '复兴运动系列',
		icon: null,
	},
	{
		id: 'l7fz',
		label: 'L7FZ特供系列',
		icon: null,
	},
	{
		id: 'life',
		label: 'LIFE DEPTH配饰系列',
		icon: null,
	},
	{
		id: 'about',
		label: 'ABOUT US',
		icon: null,
	},
];

const collection = [
	{ id: 'wonder', img: a1, label: 'Wonder Island', active: false },
	{ id: 'illustration', img: a2, label: 'Illustration Rose', active: false },
	{ id: 'renewed', img: a3, label: 'Renewed Projects', active: false },
	{ id: 'l7fz', img: a4, label: 'L7FZ', active: false },
	{ id: 'life', img: a5, label: 'Lift Depth', active: false },
	{ id: 'about', img: a6, label: 'About Us', active: false },
];
export default class Home extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			showMenu: false,
			showLogo: false,
			collection: collection,
			showGif: true,
		};
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
		this.timer = setTimeout(() => {
			this.setState({ showGif: false });
		}, 2500);
	}

	componentWillUnmount() {
		this.timer = null;
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll = (e) => {
		const scrollTop =
			(e.srcElement ? e.srcElement.documentElement.scrollTop : false) ||
			window.pageYOffset ||
			(e.srcElement ? e.srcElement.body.scrollTop : 0);
		if (scrollTop > 100 && !this.state.showLogo) {
			this.setState({ showLogo: true });
		}
		if (scrollTop < 100 && this.state.showLogo) {
			this.setState({ showLogo: false });
		}
	};

	handlePressMenu = () => {
		this.setState({
			showMenu: !this.state.showMenu,
		});
	};

	handlePressMenuItem = (id) => {
		console.log('🚀 ~ file: index.js ~ line 95 ~ Home ~ this.props', this.props);

		// this.props.history.push(`/${id}`);
	};

	onClickItem = (item) => {};

	handleMouseEnter = (item, index, active) => {
		let newData = [...this.state.collection];
		newData[index].active = active;
		this.setState({
			collection: newData,
		});
	};

	render() {
		const { showMenu, showLogo } = this.state;
		const menuIcon = !showMenu ? menu : shanchu;
		const topClass = showLogo ? 'homeTopView topBackgroundColor' : 'homeTopView';
		console.log(this.props);
		return (
			<div className={'homeContainer'}>
				<Helmet>
					<title>Ladecente</title>
				</Helmet>
				<div className={topClass}>
					<div className='menuView' onClick={this.handlePressMenu}>
						<img src={menuIcon} alt='menu' className='menuImg' />
						<div className='menuText'>Menu</div>
					</div>
					{showLogo ? (
						<div className='topCenterView'>
							<img src={logo1} className='colLogoView' alt='' />
						</div>
					) : null}
					<div className='topCenterView'></div>
				</div>
				<div className='homeBannerImgView'>
					<img src={banner} className='bannerImg' alt='banner' />
				</div>

				{showMenu ? (
					<div className='menuDrawView'>
						{menuData.map((item, index) => {
							const queryState = {
								pathname: `/${item.id}`,
								state: item.id,
							};
							return (
								<Link to={queryState} className='linkItem'>
									<div
										key={item.id}
										className='menuItem'
										onClick={() => {
											this.handlePressMenuItem(item.id);
										}}
									>
										{item.label}
									</div>
								</Link>
							);
						})}
					</div>
				) : null}
				<div className='collectionViewHome'>
					{this.state.collection.map((item, index) => {
						const queryState = {
							pathname: `/${item.id}`,
							state: item.id,
						};
						const btnStyle = item.active
							? 'collectionLabel1 collectionLabelActive'
							: 'collectionLabel1';
						return (
							<div className='collectionItemView'>
								<Link to={queryState} className='linkItem'>
									<img
										src={item.img}
										alt=''
										className='homeCollectionImg'
										onClick={() => {
											this.onClickItem(item);
										}}
									/>
								</Link>
								<Link to={queryState} className='linkItem'>
									<div
										className={btnStyle}
										onMouseEnter={() => {
											this.handleMouseEnter(item, index, true);
										}}
										onMouseLeave={() => {
											this.handleMouseEnter(item, index, false);
										}}
									>
										{item.label}
									</div>
								</Link>
							</div>
						);
					})}
				</div>
				{this.state.showGif ? (
					<div className='homeBannerGif'>
						<img src={homeBanner0} className='homeBanner0Img' alt='' />
					</div>
				) : null}
			</div>
		);
	}
}
