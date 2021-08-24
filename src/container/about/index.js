import { PureComponent } from 'react';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router-dom';
import './index.css';
import logoHome from '../../res/logoHome.png';
import footerLogo from '../../res/footerIcon.png';

const JOIN_US_DATA = [
  {
    id: 'ins',
    icon: '',
    name: 'Ins',
  },
  {
    id: 'weibo',
    icon: '',
    name: '微博',
  },
  {
    id: 'xiao',
    icon: '',
    name: '小红书',
  },
  {
    id: 'weChart',
    icon: '',
    name: '微信群',
  },
  {
    id: 'miniApp',
    icon: '',
    name: 'LADECENTEOFFICIAL',
  },
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
    const params = this.props.location.state;
    return (
      <div className={'collectionContainer'}>
        <Helmet>
          <title>Renewed Projects</title>
        </Helmet>

        <div className={'headerContainerFix'}>
          <img src={logoHome} className="logoHomeCollection" alt="menu" />
        </div>

        <div className={'collectionContent'}>
          <img src={footerLogo} className={'collectionImg1'} alt={'img'} />
        </div>
        {this.renderRight()}
      </div>
    );
  }
}

export default withRouter(About);
