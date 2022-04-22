import React, { useMemo, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import CopyIcon from 'static/icons/copy-icon.png';
import RoninLogo from 'static/icons/ronin-logo-white.png';
import isEmpty from 'utils/isEmpty';
import ControlGroup from './components/controlGroup';
import Header from './components/header';
import { getAccountRequest } from './actions';

import './home.css';
import LoadingAsset from './components/loading';

const Home = () => {
  const dispatch = useDispatch();
  const actions = useMemo(() => bindActionCreators({
    getAccountRequest,
  }, dispatch), [dispatch]);

  useEffect(() => {
    actions.getAccountRequest();
  }, []);

  const assetsList = useSelector(state => state.home?.assets);
  const loading = useSelector(state => state.home?.loading);

  const firstAsset = !isEmpty(assetsList) ? assetsList[0] : null;
  const restAssets = !isEmpty(assetsList) ? assetsList.slice(1) : [];

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
              {loading || isEmpty(firstAsset) ?
                '____ ___' :
                `${firstAsset.primaryValue} ${firstAsset.primaryCurrency}`
              }
            </div>
            <div className="h-currency-second">
              {loading || isEmpty(firstAsset) ?
                '______ ___' :
                `${firstAsset.secondaryValue} ${firstAsset.secondaryCurrency}`
              }
            </div>
          </div>
          <img alt="logo" className="h-logo" src={RoninLogo} />
        </div>
      </div>
      <ControlGroup />
    </div>
    <div className="h-assets">
      <div className="h-assets-title">{'Assets'}</div>
      {loading || isEmpty(restAssets) ?
        <LoadingAsset /> :
        restAssets.map(a => <div key={a.id} className="h-assets-item">
          <img alt="eur" className="h-currency-icon" src={a.icon} />
          <div>
            <div className="h-item-first-line">{`${a.primaryValue} ${a.primaryCurrency}`}</div>
            <div className="h-item-second-line">{`${a.secondaryValue} ${a.secondaryCurrency}`}</div>
          </div>
        </div>
        )}
    </div>
  </div>;
};

export default Home;
