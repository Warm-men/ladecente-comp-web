import { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

import { Helmet } from 'react-helmet';
import 'swiper/swiper.min.css';
import 'swiper/components/effect-fade/effect-fade.min.css';

import SwiperCore, { EffectFade, Autoplay } from 'swiper/core';

import './index.css';
import banner1 from '../../res/web_home_banner1.jpg';
import logoHome from '../../res/logoHome.png';
import c1 from '../../res/web_collection_1.png';
import c2 from '../../res/web_collection_2.png';
import c3 from '../../res/web_collection_3.png';
import c4 from '../../res/web_collection_4.png';
import c5 from '../../res/web_collection_5.png';
import c6 from '../../res/web_collection_6.png';
import c7 from '../../res/web_collection_7.png';

SwiperCore.use([EffectFade, Autoplay]);

const FOOTER_DATA = [
  { name: 'L7FZ特供系列', id: 'm1', extra: null, path: '/collection' },
  { name: 'LADECENTE复兴运动系列', id: 'm2', extra: null, path: '/collection' },
  { name: 'Life Depth配饰系列', id: 'm3', extra: null, path: '/collection' },
  { name: 'PERSONA艺术家合作系列', id: 'm4', extra: null, path: '/collection' },
  { name: '关于我们', id: 'm5', extra: null, path: 'about' },
];

const banners = [
  {
    img: banner1,
    label: '',
  },
  {
    img: banner1,
    label: '',
  },
];

const PRODUCES0 = {
  des: 'LADECENTE 特供系列，作为不同应用场景的特定人群而定制的服装供应，涵盖了机构，企业，以及特殊人群；品牌理念是时尚作业，舒适着衣。运用大量环保面料以及服务闭环，定位企业形象供应商，规定购买数量，80件起开售。',
  img: [c1],
};

const PRODUCES1 = {
  des: 'LADECENTE 复兴运动系列，灵感源自对当代宅文化的观察，试图用复古时兴的方式倡导Fit辣妹的概念，唤起当代人对时尚健康的意识。“接受自己，热爱自己。”',
  img: [c2, c3, c4],
};

const PRODUCES2 = {
  des: 'Life Depth 配饰系列，敬请期待！',
  img: [c5, c6],
};

const PRODUCES3 = {
  des: `谢王萍，1995年出生于安徽省黄山市。现就读于日本神户艺术工科大学大学院综合艺术设计专业插画方向。LADECENTE与谢王萍的PERSONA作品的合作款系列，表达主基调“隐秘人格”，不论是艺术家作品本身的蓝调应用，抑或是设计师的面料采用，都结合超现实主义表达人类内心的孤独感和神秘感。`,
  img: [c7],
};

const PRODUCES4 = {
  des: '',
  img: [c7],
};

const collection = {
  m1: PRODUCES0,
  m2: PRODUCES1,
  m3: PRODUCES2,
  m4: PRODUCES3,
  m5: PRODUCES4,
};

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuId: '',
    };
  }

  renderFooter = () =>
    FOOTER_DATA.map((item, index) => {
      const queryState = {
        pathname: item.path,
        state: collection[item.id],
      };
      console.log(
        '🚀 ~ file: index.js ~ line 117 ~ Home ~ FOOTER_DATA.map ~ queryState',
        queryState
      );
      return (
        <div className={'footerItem'} key={index}>
          <Link to={queryState}>{item.name}</Link>
        </div>
      );
    });

  renderRight = () => {
    return (
      <div className={'footerBox1'}>
        <div className={'footerText'}>
          @2021 紫钧建筑设计（北京）有限公司 <a href="">京ICP备2021023278号</a>
        </div>
        <div className={'footerText'}>深圳市前海深港合作区前湾一路1号A栋</div>
      </div>
    );
  };

  render() {
    return (
      <div className={'homeContainer'}>
        <Helmet>
          <title>Renewed Projects</title>
        </Helmet>
        <div className={'headerContainer'}>
          <img src={logoHome} className="logoHome" alt="menu" />
        </div>
        <div className="swiperWrap">
          <div className="swiperWrapContainer">
            <Swiper
              autoplay={{
                delay: 6000,
                disableOnInteraction: false,
              }}
              effect={'fade'}
              loop={true}
            >
              {banners.map((item, index) => {
                return (
                  <SwiperSlide className="sliderItem" key={index}>
                    <img
                      src={item.img}
                      className="sliderItemImg"
                      alt={'banner'}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        <div className="footerBox">{this.renderFooter()}</div>
        {this.renderRight()}
      </div>
    );
  }
}
