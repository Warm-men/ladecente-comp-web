import { PureComponent } from 'react';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router-dom';
import './index.scss';
import logoHome from '../../res/logoHome.png';
import footerLogo from '../../res/footerIcon.png';
import instagram from '../../res/instagram_new1.png';
import weixing from '../../res/weixing.png';
import tiktok from '../../res/tiktok.jpg';
import tiktok_code from '../../res/tiktok_code.jpg';
import weibo from '../../res/weibo.png';
import xiaohongshu from '../../res/xiaohongshu.jpg';
import miniAppQrCode from '../../res/miniAppQrCode.jpg';

const JOIN_US_DATA = [
	{
		id: 'ins',
		icon: instagram,
		name: 'Ins',
		link: 'https://instagram.com/ladecenteofficial?utm_medium=copy_link',
	},
	{
		id: 'weibo',
		icon: weibo,
		name: '微博',
		link: 'https://m.weibo.cn/u/2380421314',
	},
	{
		id: 'xiao',
		icon: xiaohongshu,
		name: '小红书',
		link: 'https://www.xiaohongshu.com/user/profile/5cadfdf1000000001000c1b9',
	},
];

class About extends PureComponent {
	renderRight = () => {
		return (
			<div className={'footerBox1'}>
				<div className={'footerText'}>@2021 紫钧建筑设计（北京）有限公司 京ICP备2021023278号</div>
				<div className={'footerText'}>深圳市前海深港合作区前湾一路1号A栋</div>
			</div>
		);
	};
	render() {
		return (
			<div className={'aboutContainer'}>
				<Helmet>
					<title>Renewed Projects</title>
				</Helmet>

				<div className='aboutTopViewWrapper'>
					<div className='aboutTopTitle'>LADECENTE｜跨场景艺术时装</div>
					<div className='aboutTopTitleSub'>
						LADECENT创办于2021年，审美理念“镜·净·境”。品牌不拘泥于某种特定风格，每年针对社会话题为系列开发产品，其宗旨用时装影射Z时代对人类心理，社会环境以及自然科学的思考。
					</div>
				</div>
				<div className='footerView'>
					<div className='footerSubView'>
						<div className='miniAppView'>
							<img src={miniAppQrCode} className='miniAppQrCodeImg' alt='miniAppQrCodeImg' />
							<div className='miniAppQrCodeDesc'>扫码进入小程序购买</div>
						</div>
						<div className='miniAppView'>
							<img src={tiktok_code} className='miniAppQrCodeImg' alt='miniAppQrCodeImg' />
							<div className='miniAppQrCodeDesc'>扫码进入抖音购买</div>
						</div>
					</div>

					<div className='joinUsView'>
						{JOIN_US_DATA.map((item, index) => {
							return (
								<div
									className='iconView'
									key={index}
									onClick={() => {
										window.location.href = item.link;
									}}
								>
									<img src={item.icon} alt={'icon'} className='iconImg' />
								</div>
							);
						})}
					</div>
				</div>

				{this.renderRight()}
			</div>
		);
	}
}

export default withRouter(About);
