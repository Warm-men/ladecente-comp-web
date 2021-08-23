import { Component } from 'react';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router-dom';
import './index.css';

import logoHome from '../../res/logoHome.png';

class Collection extends Component {
  render() {
    console.log(this.props);
    const params = this.props.location.state;
    return (
      <div className={'collectionContainer'}>
        <Helmet>
          <title>Renewed Projects</title>
        </Helmet>

        <div className={'headerContainerFix'}>
          <img src={logoHome} className="logoHomeCollection" alt="menu" />
          <div
            className={'collectionDes'}
            dangerouslySetInnerHTML={{ __html: params.des }}
          ></div>
        </div>

        <div className={'collectionContent'}>
          {params.img.map((item, index) => {
            return <img src={item} className={'collectionImg'} alt={'img'} />;
          })}
        </div>
      </div>
    );
  }
}

export default withRouter(Collection);
