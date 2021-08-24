import { Component } from 'react';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper/core';

import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

import './index.scss';

import logoHome from '../../res/logoHome.png';

SwiperCore.use([Pagination, Navigation]);

class CollectionNew extends Component {
  render() {
    const params = this.props.location.state;
    console.log(
      '🚀 ~ file: index.js ~ line 25 ~ CollectionNew ~ render ~ params',
      params.img
    );
    return (
      <div className={'collectionContainer'}>
        <Helmet>
          <title>Renewed Projects</title>
        </Helmet>

        <div className={'headerContainerFix'}>
          <img src={logoHome} className="logoHomeCollection" alt="menu" />
          <div className="titleView">{params.title} </div>
        </div>
        <div className="swiperBox">
          <div className={'collectionContentNew'}>
            <Swiper
              pagination={{
                type: 'fraction',
              }}
              navigation={true}
              // className="mySwiper"
            >
              {params.img.map((item, index) => {
                return (
                  <SwiperSlide className="sliderItem" key={index}>
                    <div className={'sliderItemDiv'}>
                      <img
                        src={item}
                        className={'collectionImgNew'}
                        alt={'img'}
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
        <div
          className={'collectionDes'}
          dangerouslySetInnerHTML={{ __html: params.des }}
        ></div>
      </div>
    );
  }
}

export default withRouter(CollectionNew);
