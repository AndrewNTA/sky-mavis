import React from 'react';
import './loading.css';

const LoadingAsset = () => {
  return <>
    <div className="la-item">
      <div className="la-icon" />
      <div>
        <div className="la-first-line">{'____ ___'}</div>
        <div className="la-second-line">{'______ ___'}</div>
      </div>
    </div>
    <div className="la-item">
      <div className="la-icon" />
      <div>
        <div className="la-first-line">{'____ ___'}</div>
        <div className="la-second-line">{'______ ___'}</div>
      </div>
    </div>
  </>;
};

export default LoadingAsset;