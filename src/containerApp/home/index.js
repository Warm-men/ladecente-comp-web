import { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Helmet } from 'react-helmet';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import SwiperCore, { Pagination, Autoplay } from 'swiper/core';
import {
  MENU_DATA,
  COLLECTION,
  JOIN_US_DATA,
  BANNERS
} from '../../utils/index';
import './index.scss';
import menuIcon from '../../res/menu.png';
import cancelIcon from '../../res/cancel.png';
import logoHome1 from '../../res/logoHome1.png';
import miniAppQrCode from '../../res/miniAppQrCode.jpg';

SwiperCore.use([Autoplay, Pagination]);

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      menuId: '',
    };
  }

  renderHeader = () => {
    return (
      <div className={'headerContainerApp'}>
        {MENU_DATA.map((item, index) => {
          return (
            <div
              key={index}
              className={'headItemApp'}
              onClick={() => this.handleClickMenu(item)}
            >
              {item.name}
            </div>
          );
        })}
      </div>
    );
  };

  renderProduceImg = (id) => {
    if(COLLECTION[id].length === 0) return;
    if (id === 'm5') {
      return (
        <div className="footerViewApp">
          <div className="miniAppViewApp">
            <img
              src={miniAppQrCode}
              className="miniAppQrCodeImgApp"
              alt="miniAppQrCodeImgApp"
            />
            <div className="miniAppQrCodeDescApp">扫码进入小程序购买</div>
          </div>
          <div className="joinUsViewApp">
            {JOIN_US_DATA.map((item, index) => {
              return (
                <div
                  className="iconViewApp"
                  key={index}
                  onClick={() => {
                    window.location.href = item.link;
                  }}
                >
                  <img src={item.icon} alt={'icon'} className="iconImgApp" />
                </div>
              );
            })}
          </div>
        </div>
      )
    };
    return (
      <div className={'produceBoxApp'}>
        {COLLECTION[id].map((item, index) => {
          return (
            <div className="itemBoxApp">
              {item.des ? (
                <div
                  dangerouslySetInnerHTML={{ __html: item.des }}
                  className="itemDesApp"
                />
              ) : null}
              <img
                key={index}
                src={item.img}
                className="produceImageApp"
                alt="produceImageApp"
              />
            </div>
          );
        })}
      </div>
    );
  };

  renderFooter = () => {
    return (
      <div className={'footerBoxApp'}>
        <div className={'footerTextApp'}>
          @2021 紫钧建筑设计（北京）有限公司京ICP备2021023278号
        </div>
        <div className={'footerTextApp'}>深圳市前海深港合作区前湾一路1号A栋</div>
      </div>
    );
  };

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu,
    });
  };

  handleClickMenu = (item) => {
    this.toggleMenu();
    this.setState({ menuId: item.id });
  };

  render() {
    const { showMenu, menuId } = this.state;
    return (
      <div className={'homeContainerApp'}>
        <Helmet>
          <title>Renewed Projects</title>
        </Helmet>
        {showMenu ? this.renderHeader() : null}
        <div onClick={this.toggleMenu} className={'menuIconContainerApp'}>
          <img
            src={showMenu ? cancelIcon : menuIcon}
            className="menuIconApp"
            alt="menu"
          />
          <img src={logoHome1} className="logoHomeApp" alt="menu" />
        </div>
        {menuId && this.renderProduceImg(menuId)}
        {!menuId ? (
          <div className="swiperWrapApp">
            <Swiper
              pagination={{
                dynamicBullets: true,
                currentClass: 'activeP',
              }}
              className="mySwiper"
              ref={(refs) => (this.swiperRefs = refs)}
              autoplay={{
                delay: 6000,
                disableOnInteraction: false,
              }}
              loop={true}
            >
              {BANNERS.map((item, index) => {
                return (
                  <SwiperSlide className="sliderItemApp" key={index}>
                    <img
                      src={item.img}
                      className="sliderItemImgApp"
                      alt={'banner'}
                    />
                    <div className="itemLabelApp">{item.label}</div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        ) : null}

        {this.renderFooter()}
      </div>
    );
  }
}
