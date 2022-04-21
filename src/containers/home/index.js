import React, { useMemo, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import CopyIcon from 'static/icons/copy-icon.png';
import RoninLogo from 'static/icons/ronin-logo-white.png';
import EurIcon from 'static/icons/eur-icon.svg';
import YenIcon from 'static/icons/yen-icon.svg';
import ControlGroup from './components/controlGroup';
import Header from './components/header';
import { getAccountRequest } from './actions';

import './home.css';

const Home = () => {
  const dispatch = useDispatch();
  const actions = useMemo(() => bindActionCreators({
    getAccountRequest,
  }, dispatch), [dispatch]);

  useEffect(() => {
    actions.getAccountRequest();
  }, []);
  

  return <div>
    <Header />
    <div className="h-main">
      <div className="h-card-container">
        <div className="h-card-top">
          <div>
            <span className="h-card-wallet-title">{'My wallet'}</span>
            <span className="h-card-number">{'(7300 3700 3800 3334)'}</span>
          </div>
          <img alt="copy" className="h-copy-icon" src={CopyIcon} />
        </div>
        <div className="h-card-bottom">
          <div>
            <div className="h-currency-first">
              {'1,000 USD'}
            </div>
            <div className="h-currency-second">
              {'23,046,000 VND'}
            </div>
          </div>
          <img alt="logo" className="h-logo" src={RoninLogo} />
        </div>
      </div>
      <ControlGroup />
    </div>
    <div className="h-assets">
      <div className="h-assets-title">{'Assets'}</div>
      <div className="h-assets-item">
        <img alt="eur" className="h-currency-icon" src={EurIcon} />
        <div>
          <div className="h-item-first-line">{'50 EUR'}</div>
          <div className="h-item-second-line">{'1,531,972 VND'}</div>
        </div>
      </div>
      <div className="h-assets-item">
        <img alt="yen" className="h-currency-icon" src={YenIcon} />
        <div>
          <div className="h-item-first-line">{'10,000 YEN'}</div>
          <div className="h-item-second-line">{'2,103,317 VND'}</div>
        </div>
      </div>
    </div>
  </div>;
};

export default Home;
