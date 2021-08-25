import { PureComponent } from 'react';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router-dom';
import './index.scss';
import logoHome from '../../res/logoHome.png';
import footerLogo from '../../res/footerIcon.png';
import instagram from '../../res/icons_instagram.png';
import weibo from '../../res/icons_weibo.png';
import xiaohongshu from '../../res/xiaohongshu.png';
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
  // {
  //   id: 'miniApp',
  //   icon: require('../../res/xiaohongshu.jpg'),
  //   name: 'LADECENTEOFFICIAL',
  // },
];

class About extends PureComponent {
  renderRight = () => {
    return (
      <div className={'footerBox1'}>
        <div className={'footerText'}>
          @2021 紫钧建筑设计（北京）有限公司 京ICP备2021023278号
        </div>
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

        <div className={'headerContainerFix'}>
          <img src={logoHome} className="logoHomeCollection" alt="menu" />
        </div>

        {/* <div className={'aboutContent'}>
          <img src={footerLogo} className={'collectionImg1'} alt={'img'} />
        </div> */}

        <div className="footerView">
          <div className="miniAppView">
            <img
              src={miniAppQrCode}
              className="miniAppQrCodeImg"
              alt="miniAppQrCodeImg"
            />
            <div className="miniAppQrCodeDesc">扫码进入小程序购买</div>
          </div>
          <div className="joinUsView">
            {JOIN_US_DATA.map((item, index) => {
              return (
                <div
                  className="iconView"
                  key={index}
                  onClick={() => {
                    window.location.href = item.link;
                  }}
                >
                  <img src={item.icon} alt={'icon'} className="iconImg" />
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
